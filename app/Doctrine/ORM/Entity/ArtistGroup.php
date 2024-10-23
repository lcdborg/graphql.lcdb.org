<?php

namespace App\Doctrine\ORM\Entity;

/**
 * ArtistGroup
 */
class ArtistGroup
{
    /**
     * @var string|null
     */
    private $title;

    /**
     * @var string|null
     */
    private $header;

    /**
     * @var string|null
     */
    private $footer;

    /**
     * @var int
     */
    private $id;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $artistToArtistGroups;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $userToArtistGroups;

    /**
     * @var \App\Doctrine\ORM\Entity\User
     */
    private $user;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->artistToArtistGroups = new \Doctrine\Common\Collections\ArrayCollection();
        $this->userToArtistGroups = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set title.
     *
     * @param string|null $title
     *
     * @return ArtistGroup
     */
    public function setTitle($title = null)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title.
     *
     * @return string|null
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set header.
     *
     * @param string|null $header
     *
     * @return ArtistGroup
     */
    public function setHeader($header = null)
    {
        $this->header = $header;

        return $this;
    }

    /**
     * Get header.
     *
     * @return string|null
     */
    public function getHeader()
    {
        return $this->header;
    }

    /**
     * Set footer.
     *
     * @param string|null $footer
     *
     * @return ArtistGroup
     */
    public function setFooter($footer = null)
    {
        $this->footer = $footer;

        return $this;
    }

    /**
     * Get footer.
     *
     * @return string|null
     */
    public function getFooter()
    {
        return $this->footer;
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
     * Add artistToArtistGroup.
     *
     * @param \App\Doctrine\ORM\Entity\ArtistToArtistGroup $artistToArtistGroup
     *
     * @return ArtistGroup
     */
    public function addArtistToArtistGroup(\App\Doctrine\ORM\Entity\ArtistToArtistGroup $artistToArtistGroup)
    {
        $this->artistToArtistGroups[] = $artistToArtistGroup;

        return $this;
    }

    /**
     * Remove artistToArtistGroup.
     *
     * @param \App\Doctrine\ORM\Entity\ArtistToArtistGroup $artistToArtistGroup
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeArtistToArtistGroup(\App\Doctrine\ORM\Entity\ArtistToArtistGroup $artistToArtistGroup)
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
     * Add userToArtistGroup.
     *
     * @param \App\Doctrine\ORM\Entity\UserToArtistGroup $userToArtistGroup
     *
     * @return ArtistGroup
     */
    public function addUserToArtistGroup(\App\Doctrine\ORM\Entity\UserToArtistGroup $userToArtistGroup)
    {
        $this->userToArtistGroups[] = $userToArtistGroup;

        return $this;
    }

    /**
     * Remove userToArtistGroup.
     *
     * @param \App\Doctrine\ORM\Entity\UserToArtistGroup $userToArtistGroup
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeUserToArtistGroup(\App\Doctrine\ORM\Entity\UserToArtistGroup $userToArtistGroup)
    {
        return $this->userToArtistGroups->removeElement($userToArtistGroup);
    }

    /**
     * Get userToArtistGroups.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getUserToArtistGroups()
    {
        return $this->userToArtistGroups;
    }

    /**
     * Set user.
     *
     * @param \App\Doctrine\ORM\Entity\User $user
     *
     * @return ArtistGroup
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
