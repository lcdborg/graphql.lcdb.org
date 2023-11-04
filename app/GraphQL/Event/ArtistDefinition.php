<?php

declare(strict_types=1);

namespace App\GraphQL\Event;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use ApiSkeletons\Doctrine\ORM\GraphQL\Event\EntityDefinition;
use ApiSkeletons\Doctrine\ORM\GraphQL\Event\FilterQueryBuilder;
use App\ORM\Entity\Artist;
use App\ORM\Entity\Performance;
use App\ORM\Entity\Source;
use App\ORM\Entity\User;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use League\Event\EventDispatcher;

final class ArtistDefinition implements Event
{
    public static function subscribe(Driver $driver): void
    {
        $driver->get(EventDispatcher::class)->subscribeTo(
            'artist.users.definition',
            static function (FilterQueryBuilder $event): void {
                /**
                 * Limit the query to just users that own the
                 * artist, trade actively > 2, order by the last userPerformance created.
                 */
                $queryBuilder = $event->getQueryBuilder();
                $queryBuilder
                    ->innerJoin('entity.userPerformances', 'userPerformances')
                    ->innerJoin('userPerformances.performance', 'performance')
                    ->innerJoin('performance.artist', 'artist')
                    ->andWhere($queryBuilder->expr()->gt('entity.activetrading', 2))
                    ->andWhere($queryBuilder->expr()->eq('artist.id', ':id'))
                    ->setParameter('id', $event->getObjectValue()->getId())
                    ->groupBy('entity')
                    ->orderBy('COUNT(userPerformances)', 'DESC');
            },
        );

        /**
         * Add a userPerformanceCount field to UserList
         */
        $driver->get(EventDispatcher::class)->subscribeTo(
            Artist::class . '.definition',
            static function (EntityDefinition $event) use ($driver): void {
                $definition = $event->getDefinition();
                $fields     = $definition['fields']();

                $fields['years'] = [
                    'type' => Type::listOf(Type::int()),
                    'description' => 'The performance years for an artist',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver): mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                        $queryBuilder->select('performance.year')
                            ->distinct()
                            ->from(Performance::class, 'performance')
                            ->andWhere($queryBuilder->expr()->eq('performance.artist', ':artist'))
                            ->setParameter('artist', $objectValue->getId())
                            ->orderBy('performance.year', 'ASC');

                        $years = [];
                        foreach ($queryBuilder->getQuery()->getArrayResult() as $result) {
                            $years[] = $result['year'];
                        }

                        return $years;
                    },
                ];

                $fields['latestYear'] = [
                    'type' => Type::int(),
                    'description' => 'The most recent performance year for an artist',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver): mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                        $queryBuilder->select('MAX(performance.year)')
                            ->from(Performance::class, 'performance')
                            ->andWhere($queryBuilder->expr()->eq('performance.artist', ':artist'))
                            ->setParameter('artist', $objectValue->getId())
                            ->orderBy('performance.year', 'ASC');

                        return $queryBuilder->getQuery()->getSingleScalarResult();
                    },
                ];

                $fields['sourceYears'] = [
                    'type' => Type::listOf(Type::int()),
                    'description' => 'The performance for artist sources',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver): mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                        $queryBuilder->select('performance.year')
                            ->distinct()
                            ->from(Source::class, 'source')
                            ->innerJoin('source.performance', 'performance')
                            ->andWhere($queryBuilder->expr()->eq('performance.artist', ':artist'))
                            ->setParameter('artist', $objectValue->getId())
                            ->orderBy('performance.year', 'ASC');

                        $years = [];
                        foreach ($queryBuilder->getQuery()->getArrayResult() as $result) {
                            $years[] = $result['year'];
                        }

                        return $years;
                    },
                ];

                $fields['sourceLatestYear'] = [
                    'type' => Type::int(),
                    'description' => 'The most recent performance year for an artist\'s sources',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver): mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                        $queryBuilder->select('MAX(performance.year)')
                            ->from(Source::class, 'source')
                            ->innerJoin('source.performance', 'performance')
                            ->andWhere($queryBuilder->expr()->eq('performance.artist', ':artist'))
                            ->setParameter('artist', $objectValue->getId())
                            ->orderBy('performance.year', 'ASC');

                        return $queryBuilder->getQuery()->getSingleScalarResult();
                    },
                ];

                $fields['sourceCount'] = [
                    'type' => Type::int(),
                    'description' => 'The number of sources for an artist',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver): mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                        $queryBuilder->select('COUNT(source.id)')
                            ->from(Source::class, 'source')
                            ->innerJoin('source.performance', 'performance')
                            ->andWhere($queryBuilder->expr()->eq('performance.artist', ':artist'))
                            ->setParameter('artist', $objectValue->getId());

                        return $queryBuilder->getQuery()->getSingleScalarResult();
                    },
                ];

                $fields['users'] = [
                    'type' => $driver->connection($driver->type(User::class)),
                    'args' => [
                        'filter' => $driver->filter(User::class),
                        'pagination' => $driver->pagination(),
                    ],
                    'description' => 'The count of user performances for a user',
                    'resolve' => $driver->resolve(User::class, 'artist.users.definition'),
                ];

                $definition['fields'] = $fields;
            },
        );
    }
}
