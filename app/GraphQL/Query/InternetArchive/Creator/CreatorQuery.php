<?php

declare(strict_types=1);

namespace App\GraphQL\Query\InternetArchive\Creator;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\Doctrine\ORM\Entity\InternetArchive\Creator;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class CreatorQuery implements GraphQLQuery
{
    /** @inheritDoc */
    public static function getDefinition(Driver $driver, array $variables = [], string|null $operationName = null): array
    {
        return [
            'type' => $driver->type(Creator::class),
            'args' => [
                'id' => Type::nonNull($driver->type('int')),
            ],
            'resolve' => static function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                return $driver->get(EntityManager::class)->getRepository(Creator::class)->find($args['id']);
            },
            'description' => <<<'EOF'
Fetch a single creator.
EOF,
        ];
    }
}
