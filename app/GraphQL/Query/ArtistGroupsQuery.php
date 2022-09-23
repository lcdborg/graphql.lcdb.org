<?php

namespace App\GraphQL\Query;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\ORM\Entity\ArtistGroup;

class ArtistGroupsQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver): array
    {
        return [
            'type' => $driver->connection($driver->type(ArtistGroup::class)),
            'args' => [
                'filter' => $driver->filter(ArtistGroup::class),
            ],
            'resolve' => $driver->resolve(ArtistGroup::class),
        ];
    }
}
