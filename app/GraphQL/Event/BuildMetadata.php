<?php

declare(strict_types=1);

namespace App\GraphQL\Event;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use ApiSkeletons\Doctrine\ORM\GraphQL\Event\Metadata;
use App\Doctrine\ORM\Entity\UserPerformance;
use League\Event\EventDispatcher;

final class BuildMetadata implements Event
{
    public static function subscribe(Driver $driver): void
    {
        $driver->get(EventDispatcher::class)->subscribeTo(
            'metadata.build',
            static function (Metadata $event): void {
                    $metadata = $event->getMetadata();

                    $metadata[UserPerformance::class]['limit'] = 1000;
            },
        );
    }
}
