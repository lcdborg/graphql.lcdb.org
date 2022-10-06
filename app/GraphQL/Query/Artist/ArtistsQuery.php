<?php

namespace App\GraphQL\Query\Artist;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\FilterQueryBuilder;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\Artist;
use App\ORM\Entity\ArtistUnprefix;
use League\Event\EventDispatcher;

class ArtistsQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        if ($operationName === 'ArtistListOther') {
            $driver->get(EventDispatcher::class)->subscribeTo('filter.querybuilder',
                function (FilterQueryBuilder $event) use ($variables) {
                    $queryBuilder = $event->getQueryBuilder();
                    $queryBuilder
                        ->andWhere(
                            $queryBuilder->expr()->orX(
                                $queryBuilder->expr()->lt('entity.nameFirstLetter', ':min'),
                                $queryBuilder->expr()->gt('entity.nameFirstLetter', ':max')

                            )
                        )
                        ->setParameter('min', 65)
                        ->setParameter('max', 122);

#                    print_r($queryBuilder->getQuery()->getSQL());die();
                }
            );
        }

        if ($operationName === 'SourceArtists') {
            $driver->get(EventDispatcher::class)->subscribeTo('filter.querybuilder',
                function (FilterQueryBuilder $event) use ($variables) {
                    $queryBuilder = $event->getQueryBuilder();
                    $queryBuilder
                        ->distinct()
                        ->join('entity.performances', 'performances')
                        ->join('performances.sources', 'sources')
                    ;

#                    print_r($queryBuilder->getQuery()->getSQL());die();
                }
            );
        }

        if ($operationName === 'SourceArtistsOther') {
            $driver->get(EventDispatcher::class)->subscribeTo('filter.querybuilder',
                function (FilterQueryBuilder $event) use ($variables) {
                    $queryBuilder = $event->getQueryBuilder();
                    $queryBuilder
                        ->distinct()
                        ->join('entity.performances', 'performances')
                        ->join('performances.sources', 'sources')
                        ->andWhere(
                            $queryBuilder->expr()->orX(
                                $queryBuilder->expr()->lt('entity.nameFirstLetter', ':min'),
                                $queryBuilder->expr()->gt('entity.nameFirstLetter', ':max')

                            )
                        )
                        ->setParameter('min', 65)
                        ->setParameter('max', 122);
                    ;

#                    print_r($queryBuilder->getQuery()->getSQL());die();
                }
            );
        }

        return [
            'type' => $driver->connection($driver->type(ArtistUnprefix::class)),
            'args' => [
                'filter' => $driver->filter(ArtistUnprefix::class),
            ],
            'resolve' => $driver->resolve(ArtistUnprefix::class),
        ];
    }
}
