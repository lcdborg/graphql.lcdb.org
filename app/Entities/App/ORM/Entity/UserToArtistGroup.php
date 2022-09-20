<?php

namespace App\ORM\Entity;

/**
 * UserToArtistGroup
 */
class UserToArtistGroup
{
    /**
     * @var int
     */
    private $ref_user_update;

    /**
     * @var bool
     */
    private $temporary;

    /**
     * @var \App\ORM\Entity\User
     */
    private $user;

    /**
     * @var \App\ORM\Entity\ArtistGroup
     */
    private $artistGroup;


    /**
     * Set refUserUpdate.
     *
     * @param int $refUserUpdate
     *
     * @return UserToArtistGroup
     */
    public function setRefUserUpdate($refUserUpdate)
    {
        $this->ref_user_update = $refUserUpdate;

        return $this;
    }

    /**
     * Get refUserUpdate.
     *
     * @return int
     */
    public function getRefUserUpdate()
    {
        return $this->ref_user_update;
    }

    /**
     * Set temporary.
     *
     * @param bool $temporary
     *
     * @return UserToArtistGroup
     */
    public function setTemporary($temporary)
    {
        $this->temporary = $temporary;

        return $this;
    }

    /**
     * Get temporary.
     *
     * @return bool
     */
    public function getTemporary()
    {
        return $this->temporary;
    }

    /**
     * Set user.
     *
     * @param \App\ORM\Entity\User $user
     *
     * @return UserToArtistGroup
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
     * Set artistGroup.
     *
     * @param \App\ORM\Entity\ArtistGroup $artistGroup
     *
     * @return UserToArtistGroup
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
}
