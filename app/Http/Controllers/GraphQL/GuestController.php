<?php

namespace App\Http\Controllers\GraphQL;

use ApiSkeletons\Doctrine\GraphQL\Config;
use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\FilterQueryBuilder;
use App\Http\Controllers\Controller;
use App\ORM\Entity\Artist;
use App\ORM\Entity\Performance;
use App\ORM\Entity\Source;
use App\ORM\Entity\User;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\QueryBuilder;
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
use Illuminate\Http\Request;
use League\Event\EventDispatcher;

class GuestController extends Controller
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

        $driver->get(EventDispatcher::class)->subscribeTo('filter.querybuilder',
            function(FilterQueryBuilder $event) use ($variables) {
                if (isset($variables['_artists_other']) && $variables['_artists_other']) {
                    $queryBuilder = $event->getQueryBuilder();
                    $queryBuilder
                        ->orWhere($queryBuilder->expr()->lt('entity.nameFirstLetter', ':min'))
                        ->orWhere($queryBuilder->expr()->gt('entity.nameFirstLetter', ':max'))
                        ->setParameter('min', 65)
                        ->setParameter('max', 122);
                }
            }
        );

        $schema = new Schema([
            'query' => new ObjectType([
                'name' => 'query',
                'fields' => [
                    'artists' => [
                        'type' => $driver->connection($driver->type(Artist::class)),
                        'args' => [
                            'filter' => $driver->filter(Artist::class),
                        ],
                        'resolve' => $driver->resolve(Artist::class),
                    ],
                    'artist' => [
                        'type' => $driver->type(Artist::class),
                        'args' => [
                            'id' => Type::nonNull(Type::int()),
                        ],
                        'resolve' => function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                            return $driver->get(EntityManager::class)->getRepository(Artist::class)->find($args['id']);
                        },
                    ],
                    'artistYears' => [
                        'type' => Type::listOf(Type::int()),
                        'args' => [
                            'id' => Type::nonNull(Type::int()),
                        ],
                        'resolve' => function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                            $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                            $queryBuilder->select('performance.year')
                                ->distinct()
                                ->from(Performance::class, 'performance')
                                ->andWhere($queryBuilder->expr()->eq('performance.artist', ':artist'))
                                ->setParameter('artist', $args['id'])
                                ->orderBy('performance.year', 'ASC');

                            $years = [];
                            foreach($queryBuilder->getQuery()->getArrayResult() as $result) {
                                $years[] = $result['year'];
                            }

                            return $years;
                        },
                    ],
                    'artistLatestYear' => [
                        'type' => Type::int(),
                        'args' => [
                            'id' => Type::nonNull(Type::int()),
                        ],
                        'resolve' => function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                            $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                            $queryBuilder->select('MAX(performance.year)')
                                ->from(Performance::class, 'performance')
                                ->andWhere($queryBuilder->expr()->eq('performance.artist', ':artist'))
                                ->setParameter('artist', $args['id'])
                                ->orderBy('performance.year', 'ASC');

                            return $queryBuilder->getQuery()->getSingleScalarResult();
                        },
                    ],
                    'performances' => [
                        'type' => $driver->connection($driver->type(Performance::class)),
                        'args' => [
                            'filter' => $driver->filter(Performance::class),
                        ],
                        'resolve' => $driver->resolve(Performance::class),
                    ],
                    'performance' => [
                        'type' => $driver->type(Performance::class),
                        'args' => [
                            'id' => Type::nonNull(Type::int()),
                        ],
                        'resolve' => function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                            return $driver->get(EntityManager::class)->getRepository(Performance::class)->find($args['id']);
                        },
                    ],
                    'sources' => [
                        'type' => $driver->connection($driver->type(Source::class)),
                        'args' => [
                            'filter' => $driver->filter(Source::class),
                        ],
                        'resolve' => $driver->resolve(Source::class),
                    ],
                    'source' => [
                        'type' => $driver->type(Source::class),
                        'args' => [
                            'id' => Type::nonNull(Type::int()),
                        ],
                        'resolve' => function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                            return $driver->get(EntityManager::class)->getRepository(Source::class)->find($args['id']);
                        },
                    ],
                    'users' => [
                        'type' => $driver->connection($driver->type(User::class)),
                        'args' => [
                            'filter' => $driver->filter(User::class),
                        ],
                        'resolve' => $driver->resolve(User::class),
                    ],
                    'user' => [
                        'type' => $driver->type(User::class),
                        'args' => [
                            'id' => Type::nonNull(Type::int()),
                        ],
                        'resolve' => function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                            return $driver->get(EntityManager::class)->getRepository(User::class)->find($args['id']);
                        },
                    ],
                ],
            ]),
        ]);

        $result = GraphQL::executeQuery($schema, $query, null, null, $variables, $operationName);

        return $result->toArray();
    }
}
