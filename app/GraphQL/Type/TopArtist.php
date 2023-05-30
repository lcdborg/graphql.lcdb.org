<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class TopArtist extends ObjectType
{
    /** @inheritDoc */
    public function __construct()
    {
        $configuration = [
            'name' => 'TopArtist',
            'description' => 'Top artists details collected by a user',
            'fields' => static function () {
                return [
                    'id' => Type::int(),
                    'name' => Type::string(),
                    'userPerformanceCount' => Type::int(),
                ];
            },
        ];

        parent::__construct($configuration);
    }
}
