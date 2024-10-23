<?php

namespace App\Doctrine\ORM\Entity;

/**
 * Template
 */
class Template
{
    /**
     * @var string
     */
    private $name = '';

    /**
     * @var string
     */
    private $author = '';

    /**
     * @var string|null
     */
    private $description;

    /**
     * @var string|null
     */
    private $default_colors;

    /**
     * @var string|null
     */
    private $default_columns;

    /**
     * @var string|null
     */
    private $longdesc;

    /**
     * @var bool
     */
    private $smarty = '0';

    /**
     * @var bool
     */
    private $forcelist = '0';

    /**
     * @var bool
     */
    private $zendview = '0';

    /**
     * @var int
     */
    private $id;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $users;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $userLists;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->users = new \Doctrine\Common\Collections\ArrayCollection();
        $this->userLists = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set name.
     *
     * @param string $name
     *
     * @return Template
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
     * Set author.
     *
     * @param string $author
     *
     * @return Template
     */
    public function setAuthor($author)
    {
        $this->author = $author;

        return $this;
    }

    /**
     * Get author.
     *
     * @return string
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * Set description.
     *
     * @param string|null $description
     *
     * @return Template
     */
    public function setDescription($description = null)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description.
     *
     * @return string|null
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set defaultColors.
     *
     * @param string|null $defaultColors
     *
     * @return Template
     */
    public function setDefaultColors($defaultColors = null)
    {
        $this->default_colors = $defaultColors;

        return $this;
    }

    /**
     * Get defaultColors.
     *
     * @return string|null
     */
    public function getDefaultColors()
    {
        return $this->default_colors;
    }

    /**
     * Set defaultColumns.
     *
     * @param string|null $defaultColumns
     *
     * @return Template
     */
    public function setDefaultColumns($defaultColumns = null)
    {
        $this->default_columns = $defaultColumns;

        return $this;
    }

    /**
     * Get defaultColumns.
     *
     * @return string|null
     */
    public function getDefaultColumns()
    {
        return $this->default_columns;
    }

    /**
     * Set longdesc.
     *
     * @param string|null $longdesc
     *
     * @return Template
     */
    public function setLongdesc($longdesc = null)
    {
        $this->longdesc = $longdesc;

        return $this;
    }

    /**
     * Get longdesc.
     *
     * @return string|null
     */
    public function getLongdesc()
    {
        return $this->longdesc;
    }

    /**
     * Set smarty.
     *
     * @param bool $smarty
     *
     * @return Template
     */
    public function setSmarty($smarty)
    {
        $this->smarty = $smarty;

        return $this;
    }

    /**
     * Get smarty.
     *
     * @return bool
     */
    public function getSmarty()
    {
        return $this->smarty;
    }

    /**
     * Set forcelist.
     *
     * @param bool $forcelist
     *
     * @return Template
     */
    public function setForcelist($forcelist)
    {
        $this->forcelist = $forcelist;

        return $this;
    }

    /**
     * Get forcelist.
     *
     * @return bool
     */
    public function getForcelist()
    {
        return $this->forcelist;
    }

    /**
     * Set zendview.
     *
     * @param bool $zendview
     *
     * @return Template
     */
    public function setZendview($zendview)
    {
        $this->zendview = $zendview;

        return $this;
    }

    /**
     * Get zendview.
     *
     * @return bool
     */
    public function getZendview()
    {
        return $this->zendview;
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
     * Add user.
     *
     * @param \App\Doctrine\ORM\Entity\User $user
     *
     * @return Template
     */
    public function addUser(\App\Doctrine\ORM\Entity\User $user)
    {
        $this->users[] = $user;

        return $this;
    }

    /**
     * Remove user.
     *
     * @param \App\Doctrine\ORM\Entity\User $user
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeUser(\App\Doctrine\ORM\Entity\User $user)
    {
        return $this->users->removeElement($user);
    }

    /**
     * Get users.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getUsers()
    {
        return $this->users;
    }

    /**
     * Add userList.
     *
     * @param \App\Doctrine\ORM\Entity\UserList $userList
     *
     * @return Template
     */
    public function addUserList(\App\Doctrine\ORM\Entity\UserList $userList)
    {
        $this->userLists[] = $userList;

        return $this;
    }

    /**
     * Remove userList.
     *
     * @param \App\Doctrine\ORM\Entity\UserList $userList
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeUserList(\App\Doctrine\ORM\Entity\UserList $userList)
    {
        return $this->userLists->removeElement($userList);
    }

    /**
     * Get userLists.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getUserLists()
    {
        return $this->userLists;
    }
}
