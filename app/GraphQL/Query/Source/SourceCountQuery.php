<?php

namespace App\GraphQL\Query\Source;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\Source;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class SourceCountQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        return [
            'type' => Type::int(),
            'args' => [
                'id' => Type::nonNull(Type::int()),
            ],
            'resolve' => function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                $queryBuilder->select('COUNT(source.id)')
                    ->from(Source::class, 'source')
                    ->innerJoin('source.performance', 'performance')
                    ->andWhere($queryBuilder->expr()->eq('performance.artist', ':artist'))
                    ->setParameter('artist', $args['id']);

                return $queryBuilder->getQuery()->getSingleScalarResult();
            },
            'description' => <<<EOF
Fetch the number of sources for an artist.
EOF,
        ];
    }
}
