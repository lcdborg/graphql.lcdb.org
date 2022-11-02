<?php

namespace App\ORM\Entity;

/**
 * Artist
 */
class Artist
{
    /**
     * @var string
     */
    private $name;

    /**
     * @var string|null
     */
    private $fanUrl;

    /**
     * @var string|null
     */
    private $officialUrl;

    /**
     * @var string
     */
    private $icon;

    /**
     * @var string
     */
    private $artistuserid;

    /**
     * @var \DateTime|null
     */
    private $createdAt;

    /**
     * @var string
     */
    private $abbrev;

    /**
     * @var bool
     */
    private $isTradable;

    /**
     * @var int
     */
    private $ref_shnartist;

    /**
     * @var int
     */
    private $nameFirstLetter;

    /**
     * @var int
     */
    private $archive_key;

    /**
     * @var bool|null
     */
    private $top100;

    /**
     * @var string|null
     */
    private $nameNormalized;

    /**
     * @var string|null
     */
    private $notes;

    /**
     * @var int
     */
    private $id;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $performances;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $artistToArtistGroups;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $creators;

    /**
     * @var \App\ORM\Entity\User
     */
    private $user;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->performances = new \Doctrine\Common\Collections\ArrayCollection();
        $this->artistToArtistGroups = new \Doctrine\Common\Collections\ArrayCollection();
        $this->creators = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set name.
     *
     * @param string $name
     *
     * @return Artist
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
     * Set fanUrl.
     *
     * @param string|null $fanUrl
     *
     * @return Artist
     */
    public function setFanUrl($fanUrl = null)
    {
        $this->fanUrl = $fanUrl;

        return $this;
    }

    /**
     * Get fanUrl.
     *
     * @return string|null
     */
    public function getFanUrl()
    {
        return $this->fanUrl;
    }

    /**
     * Set officialUrl.
     *
     * @param string|null $officialUrl
     *
     * @return Artist
     */
    public function setOfficialUrl($officialUrl = null)
    {
        $this->officialUrl = $officialUrl;

        return $this;
    }

    /**
     * Get officialUrl.
     *
     * @return string|null
     */
    public function getOfficialUrl()
    {
        return $this->officialUrl;
    }

    /**
     * Set icon.
     *
     * @param string $icon
     *
     * @return Artist
     */
    public function setIcon($icon)
    {
        $this->icon = $icon;

        return $this;
    }

    /**
     * Get icon.
     *
     * @return string
     */
    public function getIcon()
    {
        return $this->icon;
    }

    /**
     * Set artistuserid.
     *
     * @param string $artistuserid
     *
     * @return Artist
     */
    public function setArtistuserid($artistuserid)
    {
        $this->artistuserid = $artistuserid;

        return $this;
    }

    /**
     * Get artistuserid.
     *
     * @return string
     */
    public function getArtistuserid()
    {
        return $this->artistuserid;
    }

    /**
     * Set createdAt.
     *
     * @param \DateTime|null $createdAt
     *
     * @return Artist
     */
    public function setCreatedAt($createdAt = null)
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * Get createdAt.
     *
     * @return \DateTime|null
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set abbrev.
     *
     * @param string $abbrev
     *
     * @return Artist
     */
    public function setAbbrev($abbrev)
    {
        $this->abbrev = $abbrev;

        return $this;
    }

    /**
     * Get abbrev.
     *
     * @return string
     */
    public function getAbbrev()
    {
        return $this->abbrev;
    }

    /**
     * Set isTradable.
     *
     * @param bool $isTradable
     *
     * @return Artist
     */
    public function setIsTradable($isTradable)
    {
        $this->isTradable = $isTradable;

        return $this;
    }

    /**
     * Get isTradable.
     *
     * @return bool
     */
    public function getIsTradable()
    {
        return $this->isTradable;
    }

    /**
     * Set refShnartist.
     *
     * @param int $refShnartist
     *
     * @return Artist
     */
    public function setRefShnartist($refShnartist)
    {
        $this->ref_shnartist = $refShnartist;

        return $this;
    }

    /**
     * Get refShnartist.
     *
     * @return int
     */
    public function getRefShnartist()
    {
        return $this->ref_shnartist;
    }

    /**
     * Set nameFirstLetter.
     *
     * @param int $nameFirstLetter
     *
     * @return Artist
     */
    public function setNameFirstLetter($nameFirstLetter)
    {
        $this->nameFirstLetter = $nameFirstLetter;

        return $this;
    }

    /**
     * Get nameFirstLetter.
     *
     * @return int
     */
    public function getNameFirstLetter()
    {
        return $this->nameFirstLetter;
    }

    /**
     * Set archiveKey.
     *
     * @param int $archiveKey
     *
     * @return Artist
     */
    public function setArchiveKey($archiveKey)
    {
        $this->archive_key = $archiveKey;

        return $this;
    }

    /**
     * Get archiveKey.
     *
     * @return int
     */
    public function getArchiveKey()
    {
        return $this->archive_key;
    }

    /**
     * Set top100.
     *
     * @param bool|null $top100
     *
     * @return Artist
     */
    public function setTop100($top100 = null)
    {
        $this->top100 = $top100;

        return $this;
    }

    /**
     * Get top100.
     *
     * @return bool|null
     */
    public function getTop100()
    {
        return $this->top100;
    }

    /**
     * Set nameNormalized.
     *
     * @param string|null $nameNormalized
     *
     * @return Artist
     */
    public function setNameNormalized($nameNormalized = null)
    {
        $this->nameNormalized = $nameNormalized;

        return $this;
    }

    /**
     * Get nameNormalized.
     *
     * @return string|null
     */
    public function getNameNormalized()
    {
        return $this->nameNormalized;
    }

    /**
     * Set notes.
     *
     * @param string|null $notes
     *
     * @return Artist
     */
    public function setNotes($notes = null)
    {
        $this->notes = $notes;

        return $this;
    }

    /**
     * Get notes.
     *
     * @return string|null
     */
    public function getNotes()
    {
        return $this->notes;
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
     * Add performance.
     *
     * @param \App\ORM\Entity\Performance $performance
     *
     * @return Artist
     */
    public function addPerformance(\App\ORM\Entity\Performance $performance)
    {
        $this->performances[] = $performance;

        return $this;
    }

    /**
     * Remove performance.
     *
     * @param \App\ORM\Entity\Performance $performance
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removePerformance(\App\ORM\Entity\Performance $performance)
    {
        return $this->performances->removeElement($performance);
    }

    /**
     * Get performances.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getPerformances()
    {
        return $this->performances;
    }

    /**
     * Add artistToArtistGroup.
     *
     * @param \App\ORM\Entity\ArtistToArtistGroup $artistToArtistGroup
     *
     * @return Artist
     */
    public function addArtistToArtistGroup(\App\ORM\Entity\ArtistToArtistGroup $artistToArtistGroup)
    {
        $this->artistToArtistGroups[] = $artistToArtistGroup;

        return $this;
    }

    /**
     * Remove artistToArtistGroup.
     *
     * @param \App\ORM\Entity\ArtistToArtistGroup $artistToArtistGroup
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeArtistToArtistGroup(\App\ORM\Entity\ArtistToArtistGroup $artistToArtistGroup)
    {
        return $this->artistToArtistGroups->removeElement($artistToArtistGroup);
    }

    /**
     * Get artistToArtistGroups.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getArtistToArtistGroups()
    {
        return $this->artistToArtistGroups;
    }

    /**
     * Add creator.
     *
     * @param \App\ORM\Entity\InternetArchive\Creator $creator
     *
     * @return Artist
     */
    public function addCreator(\App\ORM\Entity\InternetArchive\Creator $creator)
    {
        $this->creators[] = $creator;

        return $this;
    }

    /**
     * Remove creator.
     *
     * @param \App\ORM\Entity\InternetArchive\Creator $creator
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeCreator(\App\ORM\Entity\InternetArchive\Creator $creator)
    {
        return $this->creators->removeElement($creator);
    }

    /**
     * Get creators.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getCreators()
    {
        return $this->creators;
    }

    /**
     * Set user.
     *
     * @param \App\ORM\Entity\User $user
     *
     * @return Artist
     */
    public function setUser(\App\ORM\Entity\User $user)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user.
     *
     * @return \App\ORM\Entity\User
     */
    public function getUser()
    {
        return $this->user;
    }
}
