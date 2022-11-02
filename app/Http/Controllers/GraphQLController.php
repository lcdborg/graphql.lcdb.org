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
                    ## Artists
                    'artists'          => GraphQLQuery\Artist\ArtistsQuery::getDefinition($driver, $variables, $operationName),
                    /**
                     * ArtistListOther
                     *      Fetch artist for non-a to z-names
                     * SourceArtists
                     *      Fetch artists with sources
                     * SourceArtistsOther
                     *      Fetch artists with sources for non-a to z-names
                     */
                    'artist'                 => GraphQLQuery\Artist\AritstQuery::getDefinition($driver, $variables, $operationName),
                    'artistYears'            => GraphQLQuery\Artist\ArtistYearsQuery::getDefinition($driver, $variables, $operationName),
                    'artistLatestYear'       => GraphQLQuery\Artist\ArtistLatestYearQuery::getDefinition($driver, $variables, $operationName),
                    ## Artist Groups
                    'artistGroup'            => GraphQLQuery\ArtistGroup\ArtistGroupQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroups'           => GraphQLQuery\ArtistGroup\ArtistGroupsQuery::getDefinition($driver, $variables, $operationName),
                    /**
                     * ArtistGroupsOther
                     *      Fetch artist groups with non-a to z-names
                     * SourceArtistGroups
                     *      Fetch artist groups with sources
                     * SourceArtistGroupsOther
                     *      Fetch artist groups with sources for non-a to z-names
                     */
                    'artistGroupArtists'          => GraphQLQuery\ArtistGroup\ArtistGroupArtistsQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupLatestYear'       => GraphQLQuery\ArtistGroup\ArtistGroupLatestYearQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupSourceCount'      => GraphQLQuery\ArtistGroup\ArtistGroupSourceCountQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupYears'            => GraphQLQuery\ArtistGroup\ArtistGroupYearsQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupSourceYears'      => GraphQLQuery\ArtistGroup\ArtistGroupSourceYearsQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupSourceLatestYear' => GraphQLQuery\ArtistGroup\ArtistGroupSourceLatestYearQuery::getDefinition($driver, $variables, $operationName),
                    ## Performances
                    'performances'                => GraphQLQuery\Performance\PerformancesQuery::getDefinition($driver, $variables, $operationName),
                    /**
                     * ArtistGroupPerformances
                     *      Fetch performances for the given artist group $id and $year
                     */
                    'performance'      => GraphQLQuery\Performance\PerformanceQuery::getDefinition($driver, $variables, $operationName),
                    ## Sources
                    'sources'          => GraphQLQuery\Source\SourcesQuery::getDefinition($driver, $variables, $operationName),
                    /**
                     * ArtistSources
                     *      Fetch sources by artist $id and $year
                     * ArtistGroupSources
                     *      Fetch sources by artist group $id and $year
                     */
                    'source'           => GraphQLQuery\Source\SourceQuery::getDefinition($driver, $variables, $operationName),
                    'sourceCount'      => GraphQLQuery\Source\SourceCountQuery::getDefinition($driver, $variables, $operationName),
                    'sourceYears'      => GraphQLQuery\Source\SourceYearsQuery::getDefinition($driver, $variables, $operationName),
                    'sourceLatestYear' => GraphQLQuery\Source\SourceLatestYearQuery::getDefinition($driver, $variables, $operationName),
                    ## Users
                    'users'            => GraphQLQuery\User\UsersQuery::getDefinition($driver, $variables, $operationName),
                    'user'             => GraphQLQuery\User\UserQuery::getDefinition($driver, $variables, $operationName),

                    ## Internet Archive
                    'creator'          => GraphQLQuery\InternetArchive\Creator\CreatorQuery::getDefinition($driver, $variables, $operationName),
                    'creators'         => GraphQLQuery\InternetArchive\Creator\CreatorsQuery::getDefinition($driver, $variables, $operationName),
                    'creatorsUnprefix' => GraphQLQuery\InternetArchive\Creator\CreatorsUnprefixQuery::getDefinition($driver, $variables, $operationName),
                    'identifier'       => GraphQLQuery\InternetArchive\Identifier\IdentifierQuery::getDefinition($driver, $variables, $operationName),
                    'identifiers'      => GraphQLQuery\InternetArchive\Identifier\IdentifiersQuery::getDefinition($driver, $variables, $operationName),
                ],
            ]),
        ]);

        $result = GraphQL::executeQuery($schema, $query, null, null, $variables, $operationName);

        return mb_convert_encoding($result->toArray(), "UTF-8", "auto");
    }
}
