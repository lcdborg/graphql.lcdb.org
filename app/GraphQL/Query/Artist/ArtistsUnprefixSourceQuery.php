<?php

namespace App\GraphQL\Query\Artist;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\FilterQueryBuilder;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\ArtistUnprefixSource;
use League\Event\EventDispatcher;

class ArtistsUnprefixSourceQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        if ($operationName === 'ArtistsUnprefixSourceOther') {
            $driver->get(EventDispatcher::class)->subscribeTo('filter.querybuilder',
                function (FilterQueryBuilder $event) use ($variables) {
                    $queryBuilder = $event->getQueryBuilder();
                    $queryBuilder
                        ->andWhere(
                            $queryBuilder->expr()->orX(
                                $queryBuilder->expr()->lt('ASCII(entity.nameUnprefix)', ':min'),
                                $queryBuilder->expr()->gt('ASCII(entity.nameUnprefix)', ':max')

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
            'type' => $driver->connection($driver->type(ArtistUnprefixSource::class)),
            'args' => [
                'filter' => $driver->filter(ArtistUnprefixSource::class),
            ],
            'resolve' => $driver->resolve(ArtistUnprefixSource::class),
            'description' => <<<EOF
Fetch a collection of artists that have sources
using a view for unprefixing the artist name.
This endpoint does not have relationships.  Use `artists` for related data.

Special Operations:

* ArtistsUnprefixSourceOther

    Fetch artists with sources with non-a to z-names
EOF,
        ];
    }
}
