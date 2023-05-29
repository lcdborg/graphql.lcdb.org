<?php

namespace App\GraphQL\Event;

use ApiSkeletons\Doctrine\GraphQL\Driver;

interface EventInterface
{
    public static function subscribe(Driver $driver);
}
