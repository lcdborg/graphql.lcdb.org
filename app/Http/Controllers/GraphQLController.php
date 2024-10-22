<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use ApiSkeletons\Doctrine\ORM\GraphQL\Config;
use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use ApiSkeletons\Laravel\ApiProblem\Facades\ApiProblem;
use App\GraphQL\Mutation;
use App\GraphQL\Query;
use Doctrine\Laminas\Hydrator\DoctrineObject;
use Doctrine\ORM\EntityManager;
use GraphQL\Error\Error;
use GraphQL\Error\FormattedError;
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Schema;
use GraphQL\Validator\DocumentValidator;
use GraphQL\Validator\Rules\QueryComplexity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Throwable;

use function array_map;
use function config;

class GraphQLController extends Controller
{
    /** @return mixed[] */
    public function __invoke(EntityManager $entityManager, Request $request): array
    {
        $variables     = $request->get('variables') ?? [];
        $operationName = $request->get('operationName');

        if (Redis::exists('GraphQL.metadata')) {
            $metadata = Redis::get('GraphQL.metadata');
            $metadata = unserialize($metadata);
        } else {
            $metadata = [];
        }

        $metadata = [];

        // Build Driver
        $driver = new Driver($entityManager, new Config([
            'globalEnable' => true,
            'limit' => 300,
            'useHydratorCache' => true,
            'ignoreFields' => ['password', 'realemail'],
            'groupSuffix' => '',
            'sortFields' => true,
            'entityPrefix' => 'App\\Doctrine\\ORM\\Entity\\',
        ]), $metadata);

        if (! $metadata) {
            Redis::set('GraphQL.metadata', serialize($driver->get('metadata')->getArrayCopy()));
        }

        // Limit query complexity
        DocumentValidator::addRule(new QueryComplexity(350));

        try {
            $myValidationRules = array_merge(
                GraphQL::getStandardValidationRules(),
                [new QueryComplexity(250)],
            );

            // Run GraphQL
            $result = GraphQL::executeQuery(
                schema: \App\GraphQL\Schema::build($driver, $variables, $operationName),
                source: $request->get('query'),
                variableValues: $variables,
                operationName: $operationName,
                validationRules: $myValidationRules,
            )
                ->setErrorFormatter(static function (Error $error): array {
                    $exception = $error->getPrevious() ?: $error;

                    // Local development
                    if (config('app.debug')) {
                        throw $exception;
                    }

                    return FormattedError::createFromException($error);
                })
                ->setErrorsHandler(static fn (array $errors, callable $formatter): array => array_map($formatter, $errors));

            return mb_convert_encoding($result->toArray(), 'UTF-8', 'UTF-8');
        } catch (Throwable $e) {
            return FormattedError::createFromException($e);
        }
    }
}
