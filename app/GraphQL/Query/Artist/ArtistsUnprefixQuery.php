<?php

namespace App\GraphQL\Query\Artist;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\FilterQueryBuilder;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\ArtistUnprefix;
use App\ORM\Entity\Performance;
use App\ORM\Entity\Source;
use League\Event\EventDispatcher;
use function Doctrine\ORM\QueryBuilder;

class ArtistsUnprefixQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        if ($operationName === 'ArtistUnprefixListOther') {
            $driver->get(EventDispatcher::class)->subscribeTo('artists.unprefix',
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

#                    print_r($queryBuilder->getQuery()->getSQL());die();
                }
            );
        }

        return [
            'type' => $driver->connection($driver->type(ArtistUnprefix::class)),
            'args' => [
                'filter' => $driver->filter(ArtistUnprefix::class),
            ],
            'resolve' => $driver->resolve(ArtistUnprefix::class, 'artists.unprefix'),
            'description' => <<<EOF
Fetch a collection of artists using a view for unprefixing the artist name.
This endpoint does not have relationships.  Use `artists` for related data.

Special Operations:

* ArtistUnprefixListOther

    Fetch artists with non-a to z-names
EOF,
        ];
    }
}
