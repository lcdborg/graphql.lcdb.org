<?php

namespace App\ORM\Entity;

/**
 * UserList
 */
class UserList
{
    /**
     * @var string
     */
    private $ref_username;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $shortname;

    /**
     * @var string|null
     */
    private $notes;

    /**
     * @var \DateTime
     */
    private $createdAt;

    /**
     * @var int
     */
    private $views;

    /**
     * @var \DateTime
     */
    private $lastviewed;

    /**
     * @var bool
     */
    private $defaultlist;

    /**
     * @var bool|null
     */
    private $private;

    /**
     * @var int
     */
    private $id;

    /**
     * @var \App\ORM\Entity\User
     */
    private $user;

    /**
     * @var \App\ORM\Entity\Template
     */
    private $template;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $userPerformances = array();

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->userPerformances = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set refUsername.
     *
     * @param string $refUsername
     *
     * @return UserList
     */
    public function setRefUsername($refUsername)
    {
        $this->ref_username = $refUsername;

        return $this;
    }

    /**
     * Get refUsername.
     *
     * @return string
     */
    public function getRefUsername()
    {
        return $this->ref_username;
    }

    /**
     * Set name.
     *
     * @param string $name
     *
     * @return UserList
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
     * Set shortname.
     *
     * @param string $shortname
     *
     * @return UserList
     */
    public function setShortname($shortname)
    {
        $this->shortname = $shortname;

        return $this;
    }

    /**
     * Get shortname.
     *
     * @return string
     */
    public function getShortname()
    {
        return $this->shortname;
    }

    /**
     * Set notes.
     *
     * @param string|null $notes
     *
     * @return UserList
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
     * Set createdAt.
     *
     * @param \DateTime $createdAt
     *
     * @return UserList
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * Get createdAt.
     *
     * @return \DateTime
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set views.
     *
     * @param int $views
     *
     * @return UserList
     */
    public function setViews($views)
    {
        $this->views = $views;

        return $this;
    }

    /**
     * Get views.
     *
     * @return int
     */
    public function getViews()
    {
        return $this->views;
    }

    /**
     * Set lastviewed.
     *
     * @param \DateTime $lastviewed
     *
     * @return UserList
     */
    public function setLastviewed($lastviewed)
    {
        $this->lastviewed = $lastviewed;

        return $this;
    }

    /**
     * Get lastviewed.
     *
     * @return \DateTime
     */
    public function getLastviewed()
    {
        return $this->lastviewed;
    }

    /**
     * Set defaultlist.
     *
     * @param bool $defaultlist
     *
     * @return UserList
     */
    public function setDefaultlist($defaultlist)
    {
        $this->defaultlist = $defaultlist;

        return $this;
    }

    /**
     * Get defaultlist.
     *
     * @return bool
     */
    public function getDefaultlist()
    {
        return $this->defaultlist;
    }

    /**
     * Set private.
     *
     * @param bool|null $private
     *
     * @return UserList
     */
    public function setPrivate($private = null)
    {
        $this->private = $private;

        return $this;
    }

    /**
     * Get private.
     *
     * @return bool|null
     */
    public function getPrivate()
    {
        return $this->private;
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
     * Set user.
     *
     * @param \App\ORM\Entity\User $user
     *
     * @return UserList
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
     * Set template.
     *
     * @param \App\ORM\Entity\Template|null $template
     *
     * @return UserList
     */
    public function setTemplate(\App\ORM\Entity\Template $template = null)
    {
        $this->template = $template;

        return $this;
    }

    /**
     * Get template.
     *
     * @return \App\ORM\Entity\Template|null
     */
    public function getTemplate()
    {
        return $this->template;
    }

    /**
     * Add userPerformance.
     *
     * @param \App\ORM\Entity\UserPerformance $userPerformance
     *
     * @return UserList
     */
    public function addUserPerformance(\App\ORM\Entity\UserPerformance $userPerformance)
    {
        $this->userPerformances[] = $userPerformance;

        return $this;
    }

    /**
     * Remove userPerformance.
     *
     * @param \App\ORM\Entity\UserPerformance $userPerformance
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeUserPerformance(\App\ORM\Entity\UserPerformance $userPerformance)
    {
        return $this->userPerformances->removeElement($userPerformance);
    }

    /**
     * Get userPerformances.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getUserPerformances()
    {
        return $this->userPerformances;
    }
}
