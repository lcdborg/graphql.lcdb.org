<?php

namespace App\ORM\Entity;

/**
 * ArtistToArtistGroup
 */
class ArtistToArtistGroup
{
    /**
     * @var string|null
     */
    private $reason;

    /**
     * @var \App\ORM\Entity\ArtistGroup
     */
    private $artistGroup;

    /**
     * @var \App\ORM\Entity\Artist
     */
    private $artist;

    /**
     * @var \App\ORM\Entity\User
     */
    private $user;

    /**
     * @var \App\ORM\Entity\ArtistUnprefix
     */
    private $artistUnprefix;


    /**
     * Set reason.
     *
     * @param string|null $reason
     *
     * @return ArtistToArtistGroup
     */
    public function setReason($reason = null)
    {
        $this->reason = $reason;

        return $this;
    }

    /**
     * Get reason.
     *
     * @return string|null
     */
    public function getReason()
    {
        return $this->reason;
    }

    /**
     * Set artistGroup.
     *
     * @param \App\ORM\Entity\ArtistGroup $artistGroup
     *
     * @return ArtistToArtistGroup
     */
    public function setArtistGroup(\App\ORM\Entity\ArtistGroup $artistGroup)
    {
        $this->artistGroup = $artistGroup;

        return $this;
    }

    /**
     * Get artistGroup.
     *
     * @return \App\ORM\Entity\ArtistGroup
     */
    public function getArtistGroup()
    {
        return $this->artistGroup;
    }

    /**
     * Set artist.
     *
     * @param \App\ORM\Entity\Artist $artist
     *
     * @return ArtistToArtistGroup
     */
    public function setArtist(\App\ORM\Entity\Artist $artist)
    {
        $this->artist = $artist;

        return $this;
    }

    /**
     * Get artist.
     *
     * @return \App\ORM\Entity\Artist
     */
    public function getArtist()
    {
        return $this->artist;
    }

    /**
     * Set user.
     *
     * @param \App\ORM\Entity\User $user
     *
     * @return ArtistToArtistGroup
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

    /**
     * Set artistUnprefix.
     *
     * @param \App\ORM\Entity\ArtistUnprefix $artistUnprefix
     *
     * @return ArtistToArtistGroup
     */
    public function setArtistUnprefix(\App\ORM\Entity\ArtistUnprefix $artistUnprefix)
    {
        $this->artistUnprefix = $artistUnprefix;

        return $this;
    }

    /**
     * Get artistUnprefix.
     *
     * @return \App\ORM\Entity\ArtistUnprefix
     */
    public function getArtistUnprefix()
    {
        return $this->artistUnprefix;
    }
}
