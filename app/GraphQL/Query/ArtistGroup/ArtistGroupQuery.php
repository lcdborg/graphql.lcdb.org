<?php

namespace App\GraphQL\Query\ArtistGroup;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\ArtistGroup;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class ArtistGroupQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        return [
            'type' => $driver->type(ArtistGroup::class),
            'args' => [
                'id' => Type::nonNull(Type::int()),
            ],
            'resolve' => function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                return $driver->get(EntityManager::class)->getRepository(ArtistGroup::class)->find($args['id']);
            },
        ];
    }
}
