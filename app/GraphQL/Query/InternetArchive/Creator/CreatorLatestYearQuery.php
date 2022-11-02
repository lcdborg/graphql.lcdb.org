<?php

namespace App\GraphQL\Query\InternetArchive\Creator;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\InternetArchive\Identifier;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class CreatorLatestYearQuery implements GraphQLQuery
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
                $queryBuilder->select('MAX(identifier.year)')
                    ->from(Identifier::class, 'identifier')
                    ->innerJoin('identifier.creator', 'creator')
                    ->andWhere($queryBuilder->expr()->eq('creator.id', ':id'))
                    ->setParameter('id', $args['id'])
                    ->orderBy('identifier.year', 'ASC');

                return $queryBuilder->getQuery()->getSingleScalarResult();
            },
        ];
    }
}
