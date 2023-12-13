<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use ApiSkeletons\Doctrine\ORM\GraphQL\Config;
use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\GraphQL\Schema;
use Doctrine\ORM\EntityManager;
use GraphQL\GraphQL;
use GraphQL\Validator\Rules\QueryComplexity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

use function array_merge;
use function mb_convert_encoding;
use function serialize;
use function unserialize;

class GraphQLController extends Controller
{
    /** @return array<mixed, mixed> */
    public function graphql(EntityManager $entityManager, Request $request): array
    {
        $variables     = $request->get('variables') ?? [];
        $operationName = $request->get('operationName');

        if (Redis::exists('GraphQL.metadata')) {
            $metadata = Redis::get('GraphQL.metadata');
            $metadata = unserialize($metadata);
        } else {
            $metadata = [];
        }

        // Build Driver
        $driver = new Driver($entityManager, new Config([
            'globalEnable' => true,
            'limit' => 300,
            'useHydratorCache' => true,
            'ignoreFields' => ['password', 'realemail'],
            'groupSuffix' => '',
            'sortFields' => true,
            'entityPrefix' => 'App\\ORM\\Entity\\',
        ]), $metadata);

        if (! $metadata) {
            Redis::set('GraphQL.metadata', serialize($driver->get('metadata')->getArrayCopy()));
        }

        $myValidationRules = array_merge(
            GraphQL::getStandardValidationRules(),
            [new QueryComplexity(250)],
        );

        // Run GraphQL
        $result = GraphQL::executeQuery(
            schema: Schema::build($driver, $variables, $operationName),
            source: $request->get('query'),
            variableValues: $variables,
            operationName: $operationName,
            validationRules: $myValidationRules,
        );

        return mb_convert_encoding($result->toArray(), 'UTF-8', 'auto');
    }
}
