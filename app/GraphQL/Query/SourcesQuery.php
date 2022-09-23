<?php

namespace App\GraphQL\Query;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\ORM\Entity\Source;

class SourcesQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver): array
    {
        return [
            'type' => $driver->connection($driver->type(Source::class)),
            'args' => [
                'filter' => $driver->filter(Source::class),
            ],
            'resolve' => $driver->resolve(Source::class),
        ];
    }
}
