<?php

namespace App\Http\Controllers;

use ApiSkeletons\Doctrine\GraphQL\Config;
use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Event;
use App\GraphQL\Schema;
use Doctrine\ORM\EntityManager;
use GraphQL\GraphQL;
use Illuminate\Http\Request;

class GraphQLController extends Controller
{
    public function graphql(EntityManager $entityManager, Request $request)
    {
        $query = $request->get('query');
        $variables = $request->get('variables') ?? [];
        $operationName = $request->get('operationName');

        // Build Driver
        $driver = new Driver($entityManager, new Config([
            'globalEnable' => true,
            'limit' => 300,
            'useHydratorCache' => true,
            'globalIgnore' => ['password', 'realemail'],
            'groupSuffix' => '',
            'entityPrefix' => 'App\\ORM\\Entity\\',
        ]));

        // Subscribe to events
        Event\BuildMetadata::subscribe($driver);
        Event\UserDefinition::subscribe($driver);
        Event\UserListDefinition::subscribe($driver);

        // Run GraphQL
        $result = GraphQL::executeQuery(
            Schema::build($driver, $variables, $operationName),
            $query,
            null,
            null,
            $variables,
            $operationName
        );

        return mb_convert_encoding($result->toArray(), "UTF-8", "auto");
    }
}
