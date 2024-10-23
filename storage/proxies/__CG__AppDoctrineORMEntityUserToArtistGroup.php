<?php

namespace DoctrineProxies\__CG__\App\Doctrine\ORM\Entity;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class UserToArtistGroup extends \App\Doctrine\ORM\Entity\UserToArtistGroup implements \Doctrine\ORM\Proxy\InternalProxy
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
        "\0".parent::class."\0".'artistGroup' => [parent::class, 'artistGroup', null],
        "\0".parent::class."\0".'ref_user_update' => [parent::class, 'ref_user_update', null],
        "\0".parent::class."\0".'temporary' => [parent::class, 'temporary', null],
        "\0".parent::class."\0".'user' => [parent::class, 'user', null],
        'artistGroup' => [parent::class, 'artistGroup', null],
        'ref_user_update' => [parent::class, 'ref_user_update', null],
        'temporary' => [parent::class, 'temporary', null],
        'user' => [parent::class, 'user', null],
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
