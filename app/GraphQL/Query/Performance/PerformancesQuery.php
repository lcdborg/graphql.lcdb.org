<?php

namespace App\GraphQL\Query\Performance;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\FilterQueryBuilder;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\Performance;
use League\Event\EventDispatcher;

class PerformancesQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        if ($operationName === 'ArtistGroupPerformances') {
            $driver->get(EventDispatcher::class)->subscribeTo('filter.querybuilder',
                function (FilterQueryBuilder $event) use ($variables) {
                    $queryBuilder = $event->getQueryBuilder();
                    $queryBuilder
                        ->innerJoin('entity.artist', 'artist')
                        ->innerJoin('artist.artistToArtistGroups', 'artistToArtistGroups')
                        ->innerJoin('artistToArtistGroups.artistGroup', 'artistGroup')
                        ->andWhere($queryBuilder->expr()->eq('artistGroup.id', ':artistGroupId'))
                        ->setParameter('artistGroupId', $variables['id']);

#                    print_r($queryBuilder->getQuery()->getSQL());die();
                }
            );
        }

        return [
            'type' => $driver->connection($driver->type(Performance::class)),
            'args' => [
                'filter' => $driver->filter(Performance::class),
            ],
            'resolve' => $driver->resolve(Performance::class),
            'description' => <<<EOF
Fetch a collection of performances.

Special Operations

* ArtistGroupPerformances

    Fetch performances for the given artist group \$id and \$year
EOF,
        ];
    }
}
