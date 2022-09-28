<?php

namespace App\GraphQL\Query;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use App\ORM\Entity\Performance;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class ArtistGroupLatestYearQuery implements GraphQLQuery
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
                $queryBuilder->select('MAX(performance.year)')
                    ->from(Performance::class, 'performance')
                    ->innerJoin('performance.artist', 'artist')
                    ->innerJoin('artist.artistToArtistGroups', 'artistToArtistGroups')
                    ->innerJoin('artistToArtistGroups.artistGroup', 'artistGroup')
                    ->andWhere($queryBuilder->expr()->eq('artistGroup.id', ':artistGroupId'))
                    ->setParameter('artistGroupId', $args['id'])
                    ->orderBy('performance.year', 'ASC');

                return $queryBuilder->getQuery()->getSingleScalarResult();
            },
        ];
    }
}
