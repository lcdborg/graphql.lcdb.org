<?php

namespace App\GraphQL\Query\InternetArchive\Identifier;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\InternetArchive\Creator;

class IdentifiersQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        return [
            'type' => $driver->connection($driver->type(Creator::class)),
            'args' => [
                'filter' => $driver->filter(Creator::class),
            ],
            'resolve' => $driver->resolve(Creator::class),
        ];
    }
}
