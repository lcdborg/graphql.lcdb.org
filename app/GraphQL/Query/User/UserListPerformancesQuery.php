<?php

namespace App\GraphQL\Query\User;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\FilterQueryBuilder;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\UserList;
use App\ORM\Entity\UserPerformance;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use League\Event\EventDispatcher;

class UserListPerformancesQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        $driver->get(EventDispatcher::class)->subscribeTo('userListPerformances',
            function (FilterQueryBuilder $event) use ($variables) {
                $queryBuilder = $event->getQueryBuilder();
                $queryBuilder
                    ->innerJoin('entity.userLists', 'userList')
                    ->innerJoin('userList.user', 'user')
                    ->innerJoin('entity.performance', 'performance')
                    ->innerJoin('performance.artist', 'artist')
                    ->andWhere($queryBuilder->expr()->eq('user.username', ':userId'))
                    ->setParameter('userId', $event->getArgs()['username'])
                    ->andWhere($queryBuilder->expr()->eq('userList.shortname', ':userListShortName'))
                    ->setParameter('userListShortName', $event->getArgs()['listname'])
                    ->addOrderBy('artist.name', 'asc')
                    ->addOrderBy('performance.year', 'asc')
                    ->addOrderBy('performance.date', 'asc')
                    ->addOrderBy('entity.id', 'asc')
                    ;

#                    print_r($queryBuilder->getQuery()->getSQL());die();
            }
        );


        return [
            'type' => $driver->connection($driver->type(UserPerformance::class)),
            'args' => [
                'username' => Type::nonNull(Type::string()),
                'listname' => Type::nonNull(Type::string()),
                'pagination' => $driver->pagination(),
            ],
            'resolve' => $driver->resolve(UserPerformance::class, 'userListPerformances'),
            'description' => <<<EOF
Fetch a single user list of user performances.
EOF,
        ];
    }
}
