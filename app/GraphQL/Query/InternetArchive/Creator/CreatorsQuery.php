<?php

declare(strict_types=1);

namespace App\GraphQL\Query\InternetArchive\Creator;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\InternetArchive\Creator;

class CreatorsQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->connection($driver->type(Creator::class)),
            'args' => [
                'filter' => $driver->filter(Creator::class),
                'pagination' => $driver->pagination(),
            ],
            'resolve' => $driver->resolve(Creator::class),
            'description' => <<<'EOF'
Fetch a collection of creators.
EOF,
        ];
    }
}
