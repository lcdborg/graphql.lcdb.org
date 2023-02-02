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
        return [
            'type' => $driver->connection($driver->type(Creator::class)),
            'args' => [
                'filter' => $driver->filter(Creator::class),
                'pagination' => $driver->pagination(),
            ],
            'resolve' => $driver->resolve(Creator::class),
            'description' => <<<EOF
Fetch a collection of creators.
EOF,
        ];
    }
}
