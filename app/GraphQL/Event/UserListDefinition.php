<?php

declare(strict_types=1);

namespace App\GraphQL\Event;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use ApiSkeletons\Doctrine\ORM\GraphQL\Event\EntityDefinition;
use App\Doctrine\ORM\Entity\UserList;
use App\Doctrine\ORM\Entity\UserPerformance;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use League\Event\EventDispatcher;

final class UserListDefinition implements Event
{
    public static function subscribe(Driver $driver): void
    {
        /**
         * Add a userPerformanceCount field to UserList
         */
        $driver->get(EventDispatcher::class)->subscribeTo(
            UserList::class . '.definition',
            static function (EntityDefinition $event) use ($driver): void {
                $definition = $event->getDefinition();
                $fields     = $definition['fields']();

                $fields['userPerformanceCount'] = [
                    'type' => $driver->type('int'),
                    'description' => 'The count of user performances assigned to a user list',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver): mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();

                        $queryBuilder->select('COUNT(userPerformance)')
                            ->from(UserPerformance::class, 'userPerformance')
                            ->innerJoin('userPerformance.userLists', 'userLists')
                            ->andWhere($queryBuilder->expr()->eq('userLists.id', ':id'))
                            ->setParameter('id', $objectValue->getId());

                        return $queryBuilder->getQuery()->getSingleScalarResult();
                    },
                ];

                $definition['fields'] = $fields;
            },
        );
    }
}
