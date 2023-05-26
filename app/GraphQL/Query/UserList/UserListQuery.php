<?php

namespace App\GraphQL\Query\UserList;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\UserList;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class UserListQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        return [
            'type' => $driver->type(UserList::class),
            'args' => [
                'id' => Type::nonNull(Type::int()),
                'shortname' => Type::nonNull(Type::string()),
            ],
            'resolve' => function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                return $driver->get(EntityManager::class)
                    ->getRepository(UserList::class)
                    ->findOneBy([
                        'user' => $args['id'],
                        'shortname' => $args['shortname']
                    ]);
            },
            'description' => <<<EOF
Fetch a single user list.
EOF,
        ];
    }
}
