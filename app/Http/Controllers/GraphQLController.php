<?php

namespace App\Http\Controllers;

use ApiSkeletons\Doctrine\GraphQL\Config;
use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query as GraphQLQuery;
use Doctrine\ORM\EntityManager;
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Schema;
use Illuminate\Http\Request;

class GraphQLController extends Controller
{
    public function graphql(EntityManager $entityManager, Request $request)
    {
        $query = $request->get('query');
        $variables = $request->get('variables');
        $operationName = $request->get('operationName');

        $driver = new Driver($entityManager, new Config([
            'globalEnable' => true,
            'limit' => 300,
            'useHydratorCache' => true,
            'globalIgnore' => ['password', 'realemail', 'email'],
        ]));

        $schema = new Schema([
            'query' => new ObjectType([
                'name' => 'query',
                'fields' => [
                    'artists'          => GraphQLQuery\ArtistsQuery::getDefinition($driver, $variables),
                    'artist'           => GraphQLQuery\AritstQuery::getDefinition($driver),
                    'artistYears'      => GraphQLQuery\ArtistYearsQuery::getDefinition($driver),
                    'artistLatestYear' => GraphQLQuery\ArtistLatestYearQuery::getDefinition($driver),
                    'artistGroups'     => GraphQLQuery\ArtistGroupsQuery::getDefinition($driver),
                    'performances'     => GraphQLQuery\PerformancesQuery::getDefinition($driver),
                    'performance'      => GraphQLQuery\PerformanceQuery::getDefinition($driver),
                    'sources'          => GraphQLQuery\SourcesQuery::getDefinition($driver, $variables),
                    'source'           => GraphQLQuery\SourceQuery::getDefinition($driver),
                    'sourceCount'      => GraphQLQuery\SourceCountQuery::getDefinition($driver),
                    'sourceYears'      => GraphQLQuery\SourceYearsQuery::getDefinition($driver),
                    'sourceLatestYear' => GraphQLQuery\SourceLatestYearQuery::getDefinition($driver),
                    'users'            => GraphQLQuery\UsersQuery::getDefinition($driver),
                    'user'             => GraphQLQuery\UserQuery::getDefinition($driver),
                ],
            ]),
        ]);

        $result = GraphQL::executeQuery($schema, $query, null, null, $variables, $operationName);

        return mb_convert_encoding($result->toArray(), "UTF-8", "auto");
    }
}
