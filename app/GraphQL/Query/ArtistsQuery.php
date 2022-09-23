<?php

namespace App\GraphQL\Query;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\FilterQueryBuilder;
use App\ORM\Entity\Artist;
use League\Event\EventDispatcher;

class ArtistsQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = []): array
    {
        $driver->get(EventDispatcher::class)->subscribeTo('filter.querybuilder',
            function(FilterQueryBuilder $event) use ($variables) {
                if (isset($variables['_artists_other']) && $variables['_artists_other']) {
                    $queryBuilder = $event->getQueryBuilder();
                    $queryBuilder
                        ->orWhere($queryBuilder->expr()->lt('entity.nameFirstLetter', ':min'))
                        ->orWhere($queryBuilder->expr()->gt('entity.nameFirstLetter', ':max'))
                        ->setParameter('min', 65)
                        ->setParameter('max', 122);
                }
            }
        );

        return [
            'type' => $driver->connection($driver->type(Artist::class)),
            'args' => [
                'filter' => $driver->filter(Artist::class),
            ],
            'resolve' => $driver->resolve(Artist::class),
        ];
    }
}
