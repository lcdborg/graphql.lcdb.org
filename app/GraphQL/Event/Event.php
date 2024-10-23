<?php

declare(strict_types=1);

namespace App\GraphQL\Event;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;

interface Event
{
    public static function subscribe(Driver $driver): void;
}
