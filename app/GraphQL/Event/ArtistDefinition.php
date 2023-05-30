<?php

declare(strict_types=1);

namespace App\GraphQL\Event;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\EntityDefinition;
use App\ORM\Entity\Artist;
use App\ORM\Entity\ArtistGroup;
use App\ORM\Entity\Performance;
use App\ORM\Entity\Source;
use App\ORM\Entity\UserList;
use App\ORM\Entity\UserPerformance;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use League\Event\EventDispatcher;

final class ArtistDefinition implements Event
{
    public static function subscribe(Driver $driver): void
    {
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

                $definition['fields'] = $fields;
            },
        );
    }
}
