<?php

namespace App\Doctrine\ORM\Entity;

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
     * @var \App\Doctrine\ORM\Entity\ArtistGroup
     */
    private $artistGroup;

    /**
     * @var \App\Doctrine\ORM\Entity\Artist
     */
    private $artist;

    /**
     * @var \App\Doctrine\ORM\Entity\User
     */
    private $user;


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
     * @param \App\Doctrine\ORM\Entity\ArtistGroup $artistGroup
     *
     * @return ArtistToArtistGroup
     */
    public function setArtistGroup(\App\Doctrine\ORM\Entity\ArtistGroup $artistGroup)
    {
        $this->artistGroup = $artistGroup;

        return $this;
    }

    /**
     * Get artistGroup.
     *
     * @return \App\Doctrine\ORM\Entity\ArtistGroup
     */
    public function getArtistGroup()
    {
        return $this->artistGroup;
    }

    /**
     * Set artist.
     *
     * @param \App\Doctrine\ORM\Entity\Artist $artist
     *
     * @return ArtistToArtistGroup
     */
    public function setArtist(\App\Doctrine\ORM\Entity\Artist $artist)
    {
        $this->artist = $artist;

        return $this;
    }

    /**
     * Get artist.
     *
     * @return \App\Doctrine\ORM\Entity\Artist
     */
    public function getArtist()
    {
        return $this->artist;
    }

    /**
     * Set user.
     *
     * @param \App\Doctrine\ORM\Entity\User $user
     *
     * @return ArtistToArtistGroup
     */
    public function setUser(\App\Doctrine\ORM\Entity\User $user)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user.
     *
     * @return \App\Doctrine\ORM\Entity\User
     */
    public function getUser()
    {
        return $this->user;
    }
}
