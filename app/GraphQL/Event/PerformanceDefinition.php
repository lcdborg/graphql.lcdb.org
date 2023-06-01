<?php

declare(strict_types=1);

namespace App\GraphQL\Event;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\EntityDefinition;
use ApiSkeletons\Doctrine\GraphQL\Event\FilterQueryBuilder;
use App\ORM\Entity\Performance;
use App\ORM\Entity\User;
use League\Event\EventDispatcher;

final class PerformanceDefinition implements Event
{
    public static function subscribe(Driver $driver): void
    {
        $driver->get(EventDispatcher::class)->subscribeTo(
            'performance.users.definition',
            static function (FilterQueryBuilder $event): void {
                /**
                 * Limit the query to just users that own the
                 * show.
                 */
                $queryBuilder = $event->getQueryBuilder();
                $queryBuilder
                    ->innerJoin('entity.userPerformances', 'userPerformances')
                    ->innerJoin('userPerformances.performance', 'performance')
                    ->andWhere($queryBuilder->expr()->eq('performance.id', ':id'))
                    ->setParameter('id', $event->getObjectValue()->getId());
            },
        );

        $driver->get(EventDispatcher::class)->subscribeTo(
            Performance::class . '.definition',
            static function (EntityDefinition $event) use ($driver): void {
                $definition = $event->getDefinition();
                $fields     = $definition['fields']();

                $fields['users'] = [
                    'type' => $driver->connection($driver->type(User::class)),
                    'args' => [
                        'filter' => $driver->filter(User::class),
                        'pagination' => $driver->pagination(),
                    ],
                    'description' => 'The count of user performances for a user',
                    'resolve' => $driver->resolve(User::class, 'performance.users.definition'),
                ];

                $definition['fields'] = $fields;
            },
        );
    }
}
