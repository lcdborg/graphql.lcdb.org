<?php

namespace App\GraphQL\Query\UserPerformance;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\UserPerformance;
use GraphQL\Type\Definition\Type;

class UserPerformanceQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        return [
            'type' => $driver->type(UserPerformance::class),
            'args' => [
                'id' => Type::nonNull(Type::int()),
            ],
            'resolve' => $driver->resolve(UserPerformance::class),
            'description' => <<<EOF
Fetch a single user performance.
EOF,
        ];
    }
}
