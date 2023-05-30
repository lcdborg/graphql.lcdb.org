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

final class ArtistGroupDefinition implements Event
{
    public static function subscribe(Driver $driver): void
    {
        /**
         * Add a userPerformanceCount field to UserList
         */
        $driver->get(EventDispatcher::class)->subscribeTo(
            ArtistGroup::class . '.definition',
            static function (EntityDefinition $event) use ($driver): void {
                $definition = $event->getDefinition();
                $fields     = $definition['fields']();

                $fields['latestYear'] = [
                    'type' => Type::int(),
                    'description' => 'The most recent performance year for an artist group',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver): mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();

                        $queryBuilder->select('MAX(performance.year)')
                            ->from(Performance::class, 'performance')
                            ->innerJoin('performance.artist', 'artist')
                            ->innerJoin('artist.artistToArtistGroups', 'artistToArtistGroups')
                            ->innerJoin('artistToArtistGroups.artistGroup', 'artistGroup')
                            ->andWhere($queryBuilder->expr()->eq('artistGroup.id', ':artistGroupId'))
                            ->setParameter('artistGroupId', $objectValue->getId())
                            ->orderBy('performance.year', 'ASC');

                        return $queryBuilder->getQuery()->getSingleScalarResult();
                    },
                ];

                $fields['sourceLatestYear'] = [
                    'type' => Type::int(),
                    'description' => 'The most recent source year for an artist group',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver): mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                        $queryBuilder->select('MAX(performance.year)')
                            ->from(Source::class, 'source')
                            ->innerJoin('source.performance', 'performance')
                            ->innerJoin('performance.artist', 'artist')
                            ->innerJoin('artist.artistToArtistGroups', 'artistToArtistGroups')
                            ->innerJoin('artistToArtistGroups.artistGroup', 'artistGroup')
                            ->andWhere($queryBuilder->expr()->eq('artistGroup.id', ':artistGroupId'))
                            ->setParameter('artistGroupId', $objectValue->getId())
                            ->orderBy('performance.year', 'ASC');

                        return $queryBuilder->getQuery()->getSingleScalarResult();
                    },
                ];

                $fields['sourceCount'] = [
                    'type' => Type::int(),
                    'description' => 'Count the number of sources for an artist group',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver): mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                        $queryBuilder->select('COUNT(source.id)')
                            ->from(Source::class, 'source')
                            ->innerJoin('source.performance', 'performance')
                            ->innerJoin('performance.artist', 'artist')
                            ->innerJoin('artist.artistToArtistGroups', 'artistToArtistGroups')
                            ->innerJoin('artistToArtistGroups.artistGroup', 'artistGroup')
                            ->andWhere($queryBuilder->expr()->eq('artistGroup.id', ':artistGroupId'))
                            ->setParameter('artistGroupId', $objectValue->getId());

                        return $queryBuilder->getQuery()->getSingleScalarResult();
                    },
                ];

                $fields['performanceYears'] = [
                    'type' => Type::listOf(Type::int()),
                    'description' => 'Fetch all years for artist group performances',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver): mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                        $queryBuilder->select('performance.year')
                            ->distinct()
                            ->from(Performance::class, 'performance')
                            ->innerJoin('performance.artist', 'artist')
                            ->innerJoin('artist.artistToArtistGroups', 'artistToArtistGroups')
                            ->innerJoin('artistToArtistGroups.artistGroup', 'artistGroup')
                            ->andWhere($queryBuilder->expr()->eq('artistGroup.id', ':artistGroupId'))
                            ->setParameter('artistGroupId', $objectValue->getId())
                            ->orderBy('performance.year', 'ASC');

                        $years = [];
                        foreach ($queryBuilder->getQuery()->getArrayResult() as $result) {
                            $years[] = $result['year'];
                        }

                        return $years;
                    },
                ];

                $fields['sourceYears'] = [
                    'type' => Type::listOf(Type::int()),
                    'description' => 'Fetch all years for artist group sources',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver): mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                        $queryBuilder->select('performance.year')
                            ->distinct()
                            ->from(Source::class, 'source')
                            ->innerJoin('source.performance', 'performance')
                            ->innerJoin('performance.artist', 'artist')
                            ->innerJoin('artist.artistToArtistGroups', 'artistToArtistGroups')
                            ->innerJoin('artistToArtistGroups.artistGroup', 'artistGroup')
                            ->andWhere($queryBuilder->expr()->eq('artistGroup.id', ':artistGroupId'))
                            ->setParameter('artistGroupId', $objectValue->getId())
                            ->orderBy('performance.year', 'ASC');

                        $years = [];
                        foreach ($queryBuilder->getQuery()->getArrayResult() as $result) {
                            $years[] = $result['year'];
                        }

                        return $years;
                    },
                ];

                $fields['artistsByName'] = [
                    'type' => Type::listOf($driver->type(Artist::class)),
                    'description' => 'Return a list of artists in an artist group sorted by name.',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver): mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                        $queryBuilder->select('artist')
                            ->from(Artist::class, 'artist')
                            ->innerJoin('artist.artistToArtistGroups', 'artistToArtistGroups')
                            ->innerJoin('artistToArtistGroups.artistGroup', 'artistGroup')
                            ->andWhere($queryBuilder->expr()->eq('artistGroup.id', ':artistGroupId'))
                            ->setParameter('artistGroupId', $objectValue->getId())
                            ->orderBy('artist.name', 'ASC');

                        return $queryBuilder->getQuery()->getResult();
                    },
                ];

                $definition['fields'] = $fields;
            },
        );
    }
}
