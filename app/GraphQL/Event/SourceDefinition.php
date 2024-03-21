<?php

declare(strict_types=1);

namespace App\GraphQL\Event;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use ApiSkeletons\Doctrine\ORM\GraphQL\Event\EntityDefinition;
use ApiSkeletons\Doctrine\ORM\GraphQL\Event\QueryBuilder as FilterQueryBuilder;
use App\ORM\Entity\Source;
use App\ORM\Entity\User;
use League\Event\EventDispatcher;

final class SourceDefinition implements Event
{
    public static function subscribe(Driver $driver): void
    {
        $driver->get(EventDispatcher::class)->subscribeTo(
            'source.users.definition',
            static function (FilterQueryBuilder $event): void {
                /**
                 * Limit the query to just users that own the
                 * show, trade actively > 2, order by the last userPerformance created.
                 */
                $queryBuilder = $event->getQueryBuilder();
                $queryBuilder
                    ->innerJoin('entity.userPerformances', 'userPerformances')
                    ->innerJoin('userPerformances.source', 'source')
                    ->andWhere($queryBuilder->expr()->gt('entity.activetrading', 2))
                    ->andWhere($queryBuilder->expr()->eq('source.id', ':id'))
                    ->setParameter('id', $event->getObjectValue()->getId())
                    ->orderBy('userPerformances.createdAt', 'DESC');
            },
        );

        $driver->get(EventDispatcher::class)->subscribeTo(
            Source::class . '.definition',
            static function (EntityDefinition $event) use ($driver): void {
                $definition = $event->getDefinition();
                $fields     = $definition['fields']();

                $fields['users'] = [
                    'type' => $driver->connection(User::class),
                    'args' => [
                        'filter' => $driver->filter(User::class),
                        'pagination' => $driver->pagination(),
                    ],
                    'description' => 'The count of user performances for a user',
                    'resolve' => $driver->resolve(User::class, 'source.users.definition'),
                ];

                $definition['fields'] = $fields;
            },
        );
    }
}
