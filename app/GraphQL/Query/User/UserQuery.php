<?php

namespace App\GraphQL\Query\User;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\User;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class UserQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        return [
            'type' => $driver->type(User::class),
            'args' => [
                'id' => Type::nonNull(Type::int()),
            ],
            'resolve' => function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                return $driver->get(EntityManager::class)->getRepository(User::class)->find($args['id']);
            },
        ];
    }
}
