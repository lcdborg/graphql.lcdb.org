<?php

namespace App\GraphQL\Query;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\ORM\Entity\Performance;

class PerformancesQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        return [
            'type' => $driver->connection($driver->type(Performance::class)),
            'args' => [
                'filter' => $driver->filter(Performance::class),
            ],
            'resolve' => $driver->resolve(Performance::class),
        ];
    }
}
