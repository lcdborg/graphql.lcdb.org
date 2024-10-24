<?php

namespace DoctrineProxies\__CG__\App\Doctrine\ORM\Entity\InternetArchive;


/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Identifier extends \App\Doctrine\ORM\Entity\InternetArchive\Identifier implements \Doctrine\ORM\Proxy\Proxy
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
            return ['__isInitialized__', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'archiveIdentifier', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'server', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'performanceDate', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'addedAt', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'title', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'description', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'uploader', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'venue', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'coverage', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'year', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'notes', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'taper', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'lineage', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'archiveSource', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'md5s', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'id', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'files', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'creator', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'source', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'collections'];
        }

        return ['__isInitialized__', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'archiveIdentifier', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'server', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'performanceDate', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'addedAt', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'title', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'description', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'uploader', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'venue', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'coverage', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'year', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'notes', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'taper', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'lineage', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'archiveSource', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'md5s', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'id', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'files', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'creator', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'source', '' . "\0" . 'App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier' . "\0" . 'collections'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (Identifier $proxy) {
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
    public function __setInitializer(?\Closure $initializer = null): void
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
    public function __setCloner(?\Closure $cloner = null): void
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
    public function setArchiveIdentifier($archiveIdentifier)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setArchiveIdentifier', [$archiveIdentifier]);

        return parent::setArchiveIdentifier($archiveIdentifier);
    }

    /**
     * {@inheritDoc}
     */
    public function getArchiveIdentifier()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getArchiveIdentifier', []);

        return parent::getArchiveIdentifier();
    }

    /**
     * {@inheritDoc}
     */
    public function setServer($server = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setServer', [$server]);

        return parent::setServer($server);
    }

    /**
     * {@inheritDoc}
     */
    public function getServer()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getServer', []);

        return parent::getServer();
    }

    /**
     * {@inheritDoc}
     */
    public function setPerformanceDate($performanceDate = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPerformanceDate', [$performanceDate]);

        return parent::setPerformanceDate($performanceDate);
    }

    /**
     * {@inheritDoc}
     */
    public function getPerformanceDate()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPerformanceDate', []);

        return parent::getPerformanceDate();
    }

    /**
     * {@inheritDoc}
     */
    public function setAddedAt($addedAt)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAddedAt', [$addedAt]);

        return parent::setAddedAt($addedAt);
    }

    /**
     * {@inheritDoc}
     */
    public function getAddedAt()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAddedAt', []);

        return parent::getAddedAt();
    }

    /**
     * {@inheritDoc}
     */
    public function setTitle($title = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setTitle', [$title]);

        return parent::setTitle($title);
    }

    /**
     * {@inheritDoc}
     */
    public function getTitle()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getTitle', []);

        return parent::getTitle();
    }

    /**
     * {@inheritDoc}
     */
    public function setDescription($description = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDescription', [$description]);

        return parent::setDescription($description);
    }

    /**
     * {@inheritDoc}
     */
    public function getDescription()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDescription', []);

        return parent::getDescription();
    }

    /**
     * {@inheritDoc}
     */
    public function setUploader($uploader = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUploader', [$uploader]);

        return parent::setUploader($uploader);
    }

    /**
     * {@inheritDoc}
     */
    public function getUploader()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUploader', []);

        return parent::getUploader();
    }

    /**
     * {@inheritDoc}
     */
    public function setVenue($venue = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setVenue', [$venue]);

        return parent::setVenue($venue);
    }

    /**
     * {@inheritDoc}
     */
    public function getVenue()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getVenue', []);

        return parent::getVenue();
    }

    /**
     * {@inheritDoc}
     */
    public function setCoverage($coverage = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCoverage', [$coverage]);

        return parent::setCoverage($coverage);
    }

    /**
     * {@inheritDoc}
     */
    public function getCoverage()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCoverage', []);

        return parent::getCoverage();
    }

    /**
     * {@inheritDoc}
     */
    public function setYear($year = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setYear', [$year]);

        return parent::setYear($year);
    }

    /**
     * {@inheritDoc}
     */
    public function getYear()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getYear', []);

        return parent::getYear();
    }

    /**
     * {@inheritDoc}
     */
    public function setNotes($notes = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNotes', [$notes]);

        return parent::setNotes($notes);
    }

    /**
     * {@inheritDoc}
     */
    public function getNotes()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNotes', []);

        return parent::getNotes();
    }

    /**
     * {@inheritDoc}
     */
    public function setTaper($taper = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setTaper', [$taper]);

        return parent::setTaper($taper);
    }

    /**
     * {@inheritDoc}
     */
    public function getTaper()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getTaper', []);

        return parent::getTaper();
    }

    /**
     * {@inheritDoc}
     */
    public function setLineage($lineage = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setLineage', [$lineage]);

        return parent::setLineage($lineage);
    }

    /**
     * {@inheritDoc}
     */
    public function getLineage()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getLineage', []);

        return parent::getLineage();
    }

    /**
     * {@inheritDoc}
     */
    public function setArchiveSource($archiveSource = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setArchiveSource', [$archiveSource]);

        return parent::setArchiveSource($archiveSource);
    }

    /**
     * {@inheritDoc}
     */
    public function getArchiveSource()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getArchiveSource', []);

        return parent::getArchiveSource();
    }

    /**
     * {@inheritDoc}
     */
    public function setMd5s($md5s = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setMd5s', [$md5s]);

        return parent::setMd5s($md5s);
    }

    /**
     * {@inheritDoc}
     */
    public function getMd5s()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getMd5s', []);

        return parent::getMd5s();
    }

    /**
     * {@inheritDoc}
     */
    public function getId()
    {
        if ($this->__isInitialized__ === false) {
            return (int)  parent::getId();
        }


        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getId', []);

        return parent::getId();
    }

    /**
     * {@inheritDoc}
     */
    public function addFile(\App\Doctrine\ORM\Entity\InternetArchive\File $file)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addFile', [$file]);

        return parent::addFile($file);
    }

    /**
     * {@inheritDoc}
     */
    public function removeFile(\App\Doctrine\ORM\Entity\InternetArchive\File $file)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeFile', [$file]);

        return parent::removeFile($file);
    }

    /**
     * {@inheritDoc}
     */
    public function getFiles()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getFiles', []);

        return parent::getFiles();
    }

    /**
     * {@inheritDoc}
     */
    public function setCreator(\App\Doctrine\ORM\Entity\InternetArchive\Creator $creator)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCreator', [$creator]);

        return parent::setCreator($creator);
    }

    /**
     * {@inheritDoc}
     */
    public function getCreator()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCreator', []);

        return parent::getCreator();
    }

    /**
     * {@inheritDoc}
     */
    public function setSource(?\App\Doctrine\ORM\Entity\Source $source = NULL)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setSource', [$source]);

        return parent::setSource($source);
    }

    /**
     * {@inheritDoc}
     */
    public function getSource()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getSource', []);

        return parent::getSource();
    }

    /**
     * {@inheritDoc}
     */
    public function addCollection(\App\Doctrine\ORM\Entity\InternetArchive\Collection $collection)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addCollection', [$collection]);

        return parent::addCollection($collection);
    }

    /**
     * {@inheritDoc}
     */
    public function removeCollection(\App\Doctrine\ORM\Entity\InternetArchive\Collection $collection)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeCollection', [$collection]);

        return parent::removeCollection($collection);
    }

    /**
     * {@inheritDoc}
     */
    public function getCollections()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCollections', []);

        return parent::getCollections();
    }

}
