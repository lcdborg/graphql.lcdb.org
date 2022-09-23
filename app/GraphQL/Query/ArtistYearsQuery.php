<?php

namespace App\GraphQL\Query;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\ORM\Entity\Performance;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class ArtistYearsQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver): array
    {
        return [
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
        ];
    }
}
