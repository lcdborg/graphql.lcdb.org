<?php

namespace App\GraphQL\Query;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\ORM\Entity\Artist;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class AritstQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        return [
            'type' => $driver->type(Artist::class),
            'args' => [
                'id' => Type::nonNull(Type::int()),
            ],
            'resolve' => function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                return $driver->get(EntityManager::class)->getRepository(Artist::class)->find($args['id']);
            },
        ];
    }
}
