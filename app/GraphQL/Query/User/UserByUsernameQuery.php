<?php

namespace App\GraphQL\Query\User;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\User;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class UserByUsernameQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        return [
            'type' => $driver->type(User::class),
            'args' => [
                'username' => Type::nonNull(Type::string()),
            ],
            'resolve' => function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                return $driver->get(EntityManager::class)->getRepository(User::class)
                    ->findOneBy([
                        'username' => $args['username']
                    ]);
            },
            'description' => <<<EOF
Fetch a single user by username.
EOF,
        ];
    }
}
