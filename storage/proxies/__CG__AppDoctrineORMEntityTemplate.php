<?php

namespace DoctrineProxies\__CG__\App\Doctrine\ORM\Entity;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Template extends \App\Doctrine\ORM\Entity\Template implements \Doctrine\ORM\Proxy\InternalProxy
{
    use \Symfony\Component\VarExporter\LazyGhostTrait {
        initializeLazyObject as private;
        setLazyObjectAsInitialized as public __setInitialized;
        isLazyObjectInitialized as private;
        createLazyGhost as private;
        resetLazyObject as private;
    }

    public function __load(): void
    {
        $this->initializeLazyObject();
    }
    

    private const LAZY_OBJECT_PROPERTY_SCOPES = [
        "\0".parent::class."\0".'author' => [parent::class, 'author', null],
        "\0".parent::class."\0".'default_colors' => [parent::class, 'default_colors', null],
        "\0".parent::class."\0".'default_columns' => [parent::class, 'default_columns', null],
        "\0".parent::class."\0".'description' => [parent::class, 'description', null],
        "\0".parent::class."\0".'forcelist' => [parent::class, 'forcelist', null],
        "\0".parent::class."\0".'id' => [parent::class, 'id', null],
        "\0".parent::class."\0".'longdesc' => [parent::class, 'longdesc', null],
        "\0".parent::class."\0".'name' => [parent::class, 'name', null],
        "\0".parent::class."\0".'smarty' => [parent::class, 'smarty', null],
        "\0".parent::class."\0".'userLists' => [parent::class, 'userLists', null],
        "\0".parent::class."\0".'users' => [parent::class, 'users', null],
        "\0".parent::class."\0".'zendview' => [parent::class, 'zendview', null],
        'author' => [parent::class, 'author', null],
        'default_colors' => [parent::class, 'default_colors', null],
        'default_columns' => [parent::class, 'default_columns', null],
        'description' => [parent::class, 'description', null],
        'forcelist' => [parent::class, 'forcelist', null],
        'id' => [parent::class, 'id', null],
        'longdesc' => [parent::class, 'longdesc', null],
        'name' => [parent::class, 'name', null],
        'smarty' => [parent::class, 'smarty', null],
        'userLists' => [parent::class, 'userLists', null],
        'users' => [parent::class, 'users', null],
        'zendview' => [parent::class, 'zendview', null],
    ];

    public function __isInitialized(): bool
    {
        return isset($this->lazyObjectState) && $this->isLazyObjectInitialized();
    }

    public function __serialize(): array
    {
        $properties = (array) $this;
        unset($properties["\0" . self::class . "\0lazyObjectState"]);

        return $properties;
    }
}