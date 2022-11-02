<?php

namespace App\GraphQL\Query\InternetArchive\Creator;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\FilterQueryBuilder;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\InternetArchive\Creator;
use League\Event\EventDispatcher;

class CreatorsQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        if ($operationName === 'CreatorListOther') {
            $driver->get(EventDispatcher::class)->subscribeTo('filter.querybuilder',
                function (FilterQueryBuilder $event) use ($variables) {
                    $queryBuilder = $event->getQueryBuilder();
                    $queryBuilder
                        ->andWhere(
                            $queryBuilder->expr()->orX(
                                $queryBuilder->expr()->lt('ASCII(entity.name)', ':min'),
                                $queryBuilder->expr()->gt('ASCII(entity.name)', ':max')

                            )
                        )
                        ->setParameter('min', 65)
                        ->setParameter('max', 122);

#                    print_r($queryBuilder->getQuery()->getSQL());die();
                }
            );
        }

        return [
            'type' => $driver->connection($driver->type(Creator::class)),
            'args' => [
                'filter' => $driver->filter(Creator::class),
            ],
            'resolve' => $driver->resolve(Creator::class),
        ];
    }
}
