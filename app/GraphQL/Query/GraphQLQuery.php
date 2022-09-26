<?php

namespace App\GraphQL\Query;

use ApiSkeletons\Doctrine\GraphQL\Driver;

interface GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array;
}
