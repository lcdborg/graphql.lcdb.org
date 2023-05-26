<?php

namespace App\GraphQL\Query\UserList;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\UserList;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class UserListByUsernameQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        return [
            'type' => $driver->type(UserList::class),
            'args' => [
                'username' => Type::nonNull(Type::string()),
                'listname' => Type::string(),
            ],
            'resolve' => function ($obj, $args, $context, ResolveInfo $info) use ($driver) {

                if (! $args['listname']) {
                    return null;
                }

                $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                $queryBuilder->select('userList')
                    ->from(UserList::class, 'userList')
                    ->innerJoin('userList.user', 'user')
                    ->andWhere($queryBuilder->expr()->eq('userList.shortname', ':shortname'))
                    ->setParameter('shortname', $args['listname'])
                    ->andWhere($queryBuilder->expr()->eq('user.username', ':username'))
                    ->setParameter('username', $args['username']);

                return $queryBuilder->getQuery()->getOneOrNullResult();
            },
            'description' => <<<EOF
Fetch a single user list by username and listname.
EOF,
        ];
    }
}
