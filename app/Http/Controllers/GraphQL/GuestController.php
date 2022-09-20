<?php

namespace App\Http\Controllers\GraphQL;

use ApiSkeletons\Doctrine\GraphQL\Config;
use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\Http\Controllers\Controller;
use App\ORM\Entity\Artist;
use App\ORM\Entity\Performance;
use App\ORM\Entity\Source;
use App\ORM\Entity\User;
use Doctrine\ORM\EntityManager;
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
use Illuminate\Http\Request;

class GuestController extends Controller
{
    public function graphql(EntityManager $entityManager, Request $request)
    {
        $driver = new Driver($entityManager, new Config([
            'globalEnable' => true,
            'limit' => 5,
            'useHydratorCache' => false,
            'globalIgnore' => ['password', 'realemail', 'email'],
        ]));

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

        $query = $request->get('query');
        $result = GraphQL::executeQuery($schema, $query);

        return $result->toArray();
    }
}
