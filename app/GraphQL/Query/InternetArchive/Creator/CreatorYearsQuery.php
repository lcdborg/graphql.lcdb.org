<?php

namespace App\GraphQL\Query\InternetArchive\Creator;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\InternetArchive\Identifier;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class CreatorYearsQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        return [
            'type' => Type::listOf(Type::int()),
            'args' => [
                'id' => Type::nonNull(Type::int()),
            ],
            'resolve' => function ($obj, $args, $context, ResolveInfo $info) use ($driver) {
                $queryBuilder = $driver->get(EntityManager::class)->createQueryBuilder();
                $queryBuilder->select('identifier.year')
                    ->distinct()
                    ->from(Identifier::class, 'identifier')
                    ->innerJoin('identifier.creator', 'creator')
                    ->andWhere($queryBuilder->expr()->eq('creator.id', ':id'))
                    ->setParameter('id', $args['id'])
                    ->orderBy('identifier.year', 'ASC');

                $years = [];
                foreach($queryBuilder->getQuery()->getArrayResult() as $result) {
                    $years[] = $result['year'];
                }

                return $years;
            },
            'description' => <<<EOF
Fetch an array of years for creator identifiers.
EOF,
        ];
    }
}
