<?php

namespace DoctrineProxies\__CG__\App\ORM\Entity;


/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class ArtistToArtistGroup extends \App\ORM\Entity\ArtistToArtistGroup implements \Doctrine\ORM\Proxy\Proxy
{
    /**
     * @var \Closure the callback responsible for loading properties in the proxy object. This callback is called with
     *      three parameters, being respectively the proxy object to be initialized, the method that triggered the
     *      initialization process and an array of ordered parameters that were passed to that method.
     *
     * @see \Doctrine\Common\Proxy\Proxy::__setInitializer
     */
    public $__initializer__;

    /**
     * @var \Closure the callback responsible of loading properties that need to be copied in the cloned object
     *
     * @see \Doctrine\Common\Proxy\Proxy::__setCloner
     */
    public $__cloner__;

    /**
     * @var boolean flag indicating if this object was already initialized
     *
     * @see \Doctrine\Persistence\Proxy::__isInitialized
     */
    public $__isInitialized__ = false;

    /**
     * @var array<string, null> properties to be lazy loaded, indexed by property name
     */
    public static $lazyPropertiesNames = array (
);

    /**
     * @var array<string, mixed> default values of properties to be lazy loaded, with keys being the property names
     *
     * @see \Doctrine\Common\Proxy\Proxy::__getLazyProperties
     */
    public static $lazyPropertiesDefaults = array (
);



    public function __construct(?\Closure $initializer = null, ?\Closure $cloner = null)
    {

        $this->__initializer__ = $initializer;
        $this->__cloner__      = $cloner;
    }







    /**
     * 
     * @return array
     */
    public function __sleep()
    {
        if ($this->__isInitialized__) {
            return ['__isInitialized__', '' . "\0" . 'App\\ORM\\Entity\\ArtistToArtistGroup' . "\0" . 'reason', '' . "\0" . 'App\\ORM\\Entity\\ArtistToArtistGroup' . "\0" . 'artistGroup', '' . "\0" . 'App\\ORM\\Entity\\ArtistToArtistGroup' . "\0" . 'artist', '' . "\0" . 'App\\ORM\\Entity\\ArtistToArtistGroup' . "\0" . 'user', '' . "\0" . 'App\\ORM\\Entity\\ArtistToArtistGroup' . "\0" . 'artistUnprefix'];
        }

        return ['__isInitialized__', '' . "\0" . 'App\\ORM\\Entity\\ArtistToArtistGroup' . "\0" . 'reason', '' . "\0" . 'App\\ORM\\Entity\\ArtistToArtistGroup' . "\0" . 'artistGroup', '' . "\0" . 'App\\ORM\\Entity\\ArtistToArtistGroup' . "\0" . 'artist', '' . "\0" . 'App\\ORM\\Entity\\ArtistToArtistGroup' . "\0" . 'user', '' . "\0" . 'App\\ORM\\Entity\\ArtistToArtistGroup' . "\0" . 'artistUnprefix'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (ArtistToArtistGroup $proxy) {
                $proxy->__setInitializer(null);
                $proxy->__setCloner(null);

                $existingProperties = get_object_vars($proxy);

                foreach ($proxy::$lazyPropertiesDefaults as $property => $defaultValue) {
                    if ( ! array_key_exists($property, $existingProperties)) {
                        $proxy->$property = $defaultValue;
                    }
                }
            };

        }
    }

    /**
     * 
     */
    public function __clone()
    {
        $this->__cloner__ && $this->__cloner__->__invoke($this, '__clone', []);
    }

    /**
     * Forces initialization of the proxy
     */
    public function __load(): void
    {
        $this->__initializer__ && $this->__initializer__->__invoke($this, '__load', []);
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __isInitialized(): bool
    {
        return $this->__isInitialized__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitialized($initialized): void
    {
        $this->__isInitialized__ = $initialized;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitializer(\Closure $initializer = null): void
    {
        $this->__initializer__ = $initializer;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __getInitializer(): ?\Closure
    {
        return $this->__initializer__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setCloner(\Closure $cloner = null): void
    {
        $this->__cloner__ = $cloner;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific cloning logic
     */
    public function __getCloner(): ?\Closure
    {
        return $this->__cloner__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     * @deprecated no longer in use - generated code now relies on internal components rather than generated public API
     * @static
     */
    public function __getLazyProperties(): array
    {
        return self::$lazyPropertiesDefaults;
    }

    
    /**
     * {@inheritDoc}
     */
    public function setReason($reason = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setReason', [$reason]);

        return parent::setReason($reason);
    }

    /**
     * {@inheritDoc}
     */
    public function getReason()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getReason', []);

        return parent::getReason();
    }

    /**
     * {@inheritDoc}
     */
    public function setArtistGroup(\App\ORM\Entity\ArtistGroup $artistGroup)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setArtistGroup', [$artistGroup]);

        return parent::setArtistGroup($artistGroup);
    }

    /**
     * {@inheritDoc}
     */
    public function getArtistGroup()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getArtistGroup', []);

        return parent::getArtistGroup();
    }

    /**
     * {@inheritDoc}
     */
    public function setArtist(\App\ORM\Entity\Artist $artist)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setArtist', [$artist]);

        return parent::setArtist($artist);
    }

    /**
     * {@inheritDoc}
     */
    public function getArtist()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getArtist', []);

        return parent::getArtist();
    }

    /**
     * {@inheritDoc}
     */
    public function setUser(\App\ORM\Entity\User $user)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUser', [$user]);

        return parent::setUser($user);
    }

    /**
     * {@inheritDoc}
     */
    public function getUser()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUser', []);

        return parent::getUser();
    }

    /**
     * {@inheritDoc}
     */
    public function setArtistUnprefix(\App\ORM\Entity\ArtistUnprefix $artistUnprefix)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setArtistUnprefix', [$artistUnprefix]);

        return parent::setArtistUnprefix($artistUnprefix);
    }

    /**
     * {@inheritDoc}
     */
    public function getArtistUnprefix()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getArtistUnprefix', []);

        return parent::getArtistUnprefix();
    }

}
