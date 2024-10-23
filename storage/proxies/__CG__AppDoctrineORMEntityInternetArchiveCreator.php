<?php

namespace DoctrineProxies\__CG__\App\Doctrine\ORM\Entity\InternetArchive;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Creator extends \App\Doctrine\ORM\Entity\InternetArchive\Creator implements \Doctrine\ORM\Proxy\InternalProxy
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
        "\0".parent::class."\0".'artist' => [parent::class, 'artist', null],
        "\0".parent::class."\0".'id' => [parent::class, 'id', null],
        "\0".parent::class."\0".'identifiers' => [parent::class, 'identifiers', null],
        "\0".parent::class."\0".'name' => [parent::class, 'name', null],
        'artist' => [parent::class, 'artist', null],
        'id' => [parent::class, 'id', null],
        'identifiers' => [parent::class, 'identifiers', null],
        'name' => [parent::class, 'name', null],
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