<?php

namespace App\Http\Controllers;

use ApiSkeletons\Doctrine\GraphQL\Config;
use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\EntityDefinition;
use App\GraphQL\Query as GraphQLQuery;
use App\ORM\Entity\User;
use App\ORM\Entity\UserList;
use App\ORM\Entity\UserPerformance;
use Doctrine\ORM\EntityManager;
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
use Illuminate\Http\Request;
use League\Event\EventDispatcher;

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
            'globalIgnore' => ['password', 'realemail'],
            'groupSuffix' => '',
            'entityPrefix' => 'App\\ORM\\Entity\\',
        ]));

        /**
         * Add a userPerformanceCount field to each userList
         */
        $driver->get(EventDispatcher::class)->subscribeTo(
            UserList::class . '.definition',
            static function (EntityDefinition $event) use ($driver): void {
                $definition = $event->getDefinition();
                $fields = $definition['fields']();

                $fields['userPerformanceCount'] = [
                    'type' => Type::int(),
                    'description' => 'The count of user performances assigned to a user list',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver) : mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();

                        $queryBuilder->select('COUNT(userPerformance)')
                            ->from(UserPerformance::class, 'userPerformance')
                            ->innerJoin('userPerformance.userLists', 'userLists')
                            ->andWhere($queryBuilder->expr()->eq('userLists.id', ':id'))
                            ->setParameter('id', $objectValue->getId())
                            ;

                        return $queryBuilder->getQuery()->getSingleScalarResult();
                    },
                ];

                $definition['fields'] = $fields;
            }
        );

        /**
         * Add a userPerformanceCount field to each user
         */
        $driver->get(EventDispatcher::class)->subscribeTo(
            User::class . '.definition',
            static function (EntityDefinition $event) use ($driver): void {
                $definition = $event->getDefinition();
                $fields = $definition['fields']();

                $fields['userPerformanceCount'] = [
                    'type' => Type::int(),
                    'description' => 'The count of user performances for a user',
                    'resolve' => static function ($objectValue, array $args, $context, ResolveInfo $info) use ($driver) : mixed {
                        $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();

                        $queryBuilder->select('COUNT(userPerformance)')
                            ->from(UserPerformance::class, 'userPerformance')
                            ->innerJoin('userPerformance.user', 'user')
                            ->andWhere($queryBuilder->expr()->eq('user.id', ':id'))
                            ->setParameter('id', $objectValue->getId())
                        ;

                        return $queryBuilder->getQuery()->getSingleScalarResult();
                    },
                ];

                $definition['fields'] = $fields;
            }
        );


        /**
         * Operation names with special handling are listed below each field
         */
        $schema = new Schema([
            'query' => new ObjectType([
                'name' => 'query',
                'fields' => [
                    ## Artists
                    'artists'                   => GraphQLQuery\Artist\ArtistsQuery::getDefinition($driver, $variables, $operationName),
                    'artist'                 => GraphQLQuery\Artist\AritstQuery::getDefinition($driver, $variables, $operationName),
                    'artistYears'            => GraphQLQuery\Artist\ArtistYearsQuery::getDefinition($driver, $variables, $operationName),
                    'artistLatestYear'       => GraphQLQuery\Artist\ArtistLatestYearQuery::getDefinition($driver, $variables, $operationName),
                    'artistsUnprefix'        => GraphQLQuery\Artist\ArtistsUnprefixQuery::getDefinition($driver, $variables, $operationName),
                    'artistsUnprefixSource'  => GraphQLQuery\Artist\ArtistsUnprefixSourceQuery::getDefinition($driver, $variables, $operationName),

                    ## Artist Groups
                    'artistGroup'                 => GraphQLQuery\ArtistGroup\ArtistGroupQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroups'                => GraphQLQuery\ArtistGroup\ArtistGroupsQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupArtists'          => GraphQLQuery\ArtistGroup\ArtistGroupArtistsQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupLatestYear'       => GraphQLQuery\ArtistGroup\ArtistGroupLatestYearQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupSourceCount'      => GraphQLQuery\ArtistGroup\ArtistGroupSourceCountQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupYears'            => GraphQLQuery\ArtistGroup\ArtistGroupYearsQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupSourceYears'      => GraphQLQuery\ArtistGroup\ArtistGroupSourceYearsQuery::getDefinition($driver, $variables, $operationName),
                    'artistGroupSourceLatestYear' => GraphQLQuery\ArtistGroup\ArtistGroupSourceLatestYearQuery::getDefinition($driver, $variables, $operationName),

                    ## Performances
                    'performances'     => GraphQLQuery\Performance\PerformancesQuery::getDefinition($driver, $variables, $operationName),
                    'performance'      => GraphQLQuery\Performance\PerformanceQuery::getDefinition($driver, $variables, $operationName),

                    ## Sources
                    'sources'          => GraphQLQuery\Source\SourcesQuery::getDefinition($driver, $variables, $operationName),
                    'source'           => GraphQLQuery\Source\SourceQuery::getDefinition($driver, $variables, $operationName),
                    'sourceCount'      => GraphQLQuery\Source\SourceCountQuery::getDefinition($driver, $variables, $operationName),
                    'sourceYears'      => GraphQLQuery\Source\SourceYearsQuery::getDefinition($driver, $variables, $operationName),
                    'sourceLatestYear' => GraphQLQuery\Source\SourceLatestYearQuery::getDefinition($driver, $variables, $operationName),

                    ## Internet Archive
                    'creator'              => GraphQLQuery\InternetArchive\Creator\CreatorQuery::getDefinition($driver, $variables, $operationName),
                    'creatorLatestYear'    => GraphQLQuery\InternetArchive\Creator\CreatorLatestYearQuery::getDefinition($driver, $variables, $operationName),
                    'creatorYears'         => GraphQLQuery\InternetArchive\Creator\CreatorYearsQuery::getDefinition($driver, $variables, $operationName),
                    'creators'             => GraphQLQuery\InternetArchive\Creator\CreatorsQuery::getDefinition($driver, $variables, $operationName),
                    'creatorsUnprefix'     => GraphQLQuery\InternetArchive\Creator\CreatorsUnprefixQuery::getDefinition($driver, $variables, $operationName),
                    'identifier'           => GraphQLQuery\InternetArchive\Identifier\IdentifierQuery::getDefinition($driver, $variables, $operationName),
                    'identifiers'          => GraphQLQuery\InternetArchive\Identifier\IdentifiersQuery::getDefinition($driver, $variables, $operationName),

                    ## Users
                    'users'                => GraphQLQuery\User\UsersQuery::getDefinition($driver, $variables, $operationName),
                    'user'                 => GraphQLQuery\User\UserQuery::getDefinition($driver, $variables, $operationName),
                    'userByUsername'       => GraphQLQuery\User\UserByUsernameQuery::getDefinition($driver, $variables, $operationName),

                    # User Lists
                    'userList'             => GraphQLQuery\UserList\UserListQuery::getDefinition($driver, $variables, $operationName),
                    'userListByUsername'   => GraphQLQuery\UserList\UserListByUsernameQuery::getDefinition($driver, $variables, $operationName),

                    # User Performances
                    'userPerformancesByUsername' => GraphQLQuery\UserPerformance\UserPerformancesByUsernameQuery::getDefinition($driver, $variables, $operationName),
                    'userPerformance'            => GraphQLQuery\UserPerformance\UserPerformanceQuery::getDefinition($driver, $variables, $operationName),
                ],
            ]),
        ]);

        $result = GraphQL::executeQuery($schema, $query, null, null, $variables, $operationName);

        return mb_convert_encoding($result->toArray(), "UTF-8", "auto");
    }
}
