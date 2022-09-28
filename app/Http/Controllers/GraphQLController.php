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
        $variables = $request->get('variables') ?? [];
        $operationName = $request->get('operationName');

        $driver = new Driver($entityManager, new Config([
            'globalEnable' => true,
            'limit' => 300,
            'useHydratorCache' => true,
            'globalIgnore' => ['password', 'realemail', 'email'],
        ]));

        /**
         * Operation names with special handling are listed below each field
         */
        $schema = new Schema([
            'query' => new ObjectType([
                'name' => 'query',
                'fields' => [
                    'artists'          => GraphQLQuery\ArtistsQuery::getDefinition($driver, $variables, $operationName),
                    /**
                     * ArtistListOther
                     *      Fetch artist for non-a to z-names
                     * SourceArtists
                     *      Fetch artists with sources
                     * SourceArtistsOther
                     *      Fetch artists with sources for non-a to z-names
                     */
                    'artist'                 => GraphQLQuery\AritstQuery::getDefinition($driver, $variables, $operationName),
                    'artistYears'            => GraphQLQuery\ArtistYearsQuery::getDefinition($driver, $variables, $operationName),
                    'artistLatestYear'       => GraphQLQuery\ArtistLatestYearQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroup'            => GraphQLQuery\ArtistGroupQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroups'           => GraphQLQuery\ArtistGroupsQuery::getDefinition($driver, $variables, $operationName),
                    /**
                     * ArtistGroupsOther
                     *      Fetch artist groups with non-a to z-names
                     * SourceArtistGroups
                     *      Fetch artist groups with sources
                     * SourceArtistGroupsOther
                     *      Fetch artist groups with sources for non-a to z-names
                     */
                    'artistGroupArtists'     => GraphQLQuery\ArtistGroupArtistsQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupLatestYear'  => GraphQLQuery\ArtistGroupLatestYearQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupSourceCount' => GraphQLQuery\ArtistGroupSourceCountQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupYears'       => GraphQLQuery\ArtistGroupYearsQuery::getDefinition($driver, $variables, $operationName),
                    'performances'     => GraphQLQuery\PerformancesQuery::getDefinition($driver, $variables, $operationName),
                    /**
                     * ArtistGroupPerformances
                     *      Fetch performances for the given artist group $id and $year
                     */
                    'performance'      => GraphQLQuery\PerformanceQuery::getDefinition($driver, $variables, $operationName),
                    'sources'          => GraphQLQuery\SourcesQuery::getDefinition($driver, $variables, $operationName),
                    /**
                     * ArtistSources
                     *      Fetch sources by artist $id and $year
                     */
                    'source'           => GraphQLQuery\SourceQuery::getDefinition($driver, $variables, $operationName),
                    'sourceCount'      => GraphQLQuery\SourceCountQuery::getDefinition($driver, $variables, $operationName),
                    'sourceYears'      => GraphQLQuery\SourceYearsQuery::getDefinition($driver, $variables, $operationName),
                    'sourceLatestYear' => GraphQLQuery\SourceLatestYearQuery::getDefinition($driver, $variables, $operationName),
                    'users'            => GraphQLQuery\UsersQuery::getDefinition($driver, $variables, $operationName),
                    'user'             => GraphQLQuery\UserQuery::getDefinition($driver, $variables, $operationName),
                ],
            ]),
        ]);

        $result = GraphQL::executeQuery($schema, $query, null, null, $variables, $operationName);

        return mb_convert_encoding($result->toArray(), "UTF-8", "auto");
    }
}
