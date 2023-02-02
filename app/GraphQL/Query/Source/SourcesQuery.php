<?php

namespace App\GraphQL\Query\Source;

use ApiSkeletons\Doctrine\GraphQL\Driver;
use ApiSkeletons\Doctrine\GraphQL\Event\FilterQueryBuilder;
use App\GraphQL\Query\GraphQLQuery;
use App\ORM\Entity\Source;
use League\Event\EventDispatcher;

class SourcesQuery implements GraphQLQuery
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array
    {
        if ($operationName === 'ArtistSources') {
            $driver->get(EventDispatcher::class)->subscribeTo('sources',
                function (FilterQueryBuilder $event) use ($variables) {
                    if (isset($variables['id']) && $variables['id']) {
                        $queryBuilder = $event->getQueryBuilder();
                        $queryBuilder
                            ->innerJoin('entity.performance', 'performance')
                            ->innerJoin('performance.artist', 'artist')
                            ->andWhere($queryBuilder->expr()->eq('artist.id', ':artistId'))
                            ->setParameter('artistId', $variables['id']);

                        if (isset($variables['year']) && $variables['year']) {
                            $queryBuilder
                                ->andWhere($queryBuilder->expr()->eq('performance.year', ':performanceYear'))
                                ->setParameter('performanceYear', $variables['year'])
                                ->orderBy('entity.id')
                                ->orderBy('performance.date');
                        }
                    }
                }
            );
        }

        if ($operationName === 'ArtistGroupSources') {
            $driver->get(EventDispatcher::class)->subscribeTo('sources',
                function (FilterQueryBuilder $event) use ($variables) {
                    if (isset($variables['id']) && $variables['id']) {
                        $queryBuilder = $event->getQueryBuilder();
                        $queryBuilder
                            ->innerJoin('entity.performance', 'performance')
                            ->innerJoin('performance.artist', 'artist')
                            ->innerJoin('artist.artistToArtistGroups', 'artistToArtistGroups')
                            ->innerJoin('artistToArtistGroups.artistGroup', 'artistGroup')
                            ->andWhere($queryBuilder->expr()->eq('artistGroup.id', ':artistGroupId'))
                            ->setParameter('artistGroupId', $variables['id']);

                        if (isset($variables['year']) && $variables['year']) {
                            $queryBuilder
                                ->andWhere($queryBuilder->expr()->eq('performance.year', ':performanceYear'))
                                ->setParameter('performanceYear', $variables['year'])
                                ->orderBy('entity.id')
                                ->orderBy('performance.date');
                        }
                    }
                }
            );
        }

        return [
            'type' => $driver->connection($driver->type(Source::class)),
            'args' => [
                'filter' => $driver->filter(Source::class),
                'pagination' => $driver->pagination(),
            ],
            'resolve' => $driver->resolve(Source::class, 'sources'),
            'description' => <<<EOF
Fetch a collection of sources.

Special Operations

* ArtistSources

    Fetch sources by artist \$id and \$year
* ArtistGroupSources

    Fetch sources by artist group \$id and \$year
EOF,
        ];
    }
}
