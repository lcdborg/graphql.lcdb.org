<?php

namespace App\GraphQL\Query;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\ORM\Entity\User;

class UsersQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        return [
            'type' => $driver->connection($driver->type(User::class)),
            'args' => [
                'filter' => $driver->filter(User::class),
            ],
            'resolve' => $driver->resolve(User::class),
        ];
    }
}
