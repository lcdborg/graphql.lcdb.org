<?php

namespace App\GraphQL\Query\Performance;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\Performance;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class PerformanceQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        return [
            'type' => $driver->type(Performance::class),
            'args' => [
                'id' => Type::nonNull(Type::int()),
            ],
            'resolve' => function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                return $driver->get(EntityManager::class)->getRepository(Performance::class)->find($args['id']);
            },
            'description' => <<<EOF
Fetch a single performance.
EOF,
        ];
    }
}
