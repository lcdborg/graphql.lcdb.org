<?php

namespace App\ORM\Entity\InternetArchive;

/**
 * Creator
 */
class Creator
{
    /**
     * @var string
     */
    private $name;

    /**
     * @var int
     */
    private $id;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $identifiers;

    /**
     * @var \App\ORM\Entity\Artist
     */
    private $artist;

    /**
     * @var \App\ORM\Entity\ArtistUnprefix
     */
    private $artistUnprefix;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->identifiers = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set name.
     *
     * @param string $name
     *
     * @return Creator
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Add identifier.
     *
     * @param \App\ORM\Entity\InternetArchive\Identifier $identifier
     *
     * @return Creator
     */
    public function addIdentifier(\App\ORM\Entity\InternetArchive\Identifier $identifier)
    {
        $this->identifiers[] = $identifier;

        return $this;
    }

    /**
     * Remove identifier.
     *
     * @param \App\ORM\Entity\InternetArchive\Identifier $identifier
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeIdentifier(\App\ORM\Entity\InternetArchive\Identifier $identifier)
    {
        return $this->identifiers->removeElement($identifier);
    }

    /**
     * Get identifiers.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getIdentifiers()
    {
        return $this->identifiers;
    }

    /**
     * Set artist.
     *
     * @param \App\ORM\Entity\Artist|null $artist
     *
     * @return Creator
     */
    public function setArtist(\App\ORM\Entity\Artist $artist = null)
    {
        $this->artist = $artist;

        return $this;
    }

    /**
     * Get artist.
     *
     * @return \App\ORM\Entity\Artist|null
     */
    public function getArtist()
    {
        return $this->artist;
    }

    /**
     * Set artistUnprefix.
     *
     * @param \App\ORM\Entity\ArtistUnprefix|null $artistUnprefix
     *
     * @return Creator
     */
    public function setArtistUnprefix(\App\ORM\Entity\ArtistUnprefix $artistUnprefix = null)
    {
        $this->artistUnprefix = $artistUnprefix;

        return $this;
    }

    /**
     * Get artistUnprefix.
     *
     * @return \App\ORM\Entity\ArtistUnprefix|null
     */
    public function getArtistUnprefix()
    {
        return $this->artistUnprefix;
    }
}
