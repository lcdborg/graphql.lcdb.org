<?php

namespace App\Doctrine\ORM\Entity;

/**
 * Performance
 */
class Performance
{
    /**
     * @var string
     */
    private $date;

    /**
     * @var string
     */
    private $venue;

    /**
     * @var string
     */
    private $city;

    /**
     * @var string
     */
    private $state;

    /**
     * @var string|null
     */
    private $set1;

    /**
     * @var string|null
     */
    private $set2;

    /**
     * @var string|null
     */
    private $set3;

    /**
     * @var string|null
     */
    private $comment;

    /**
     * @var \DateTime|null
     */
    private $updatedAt;

    /**
     * @var \DateTime|null
     */
    private $createdAt;

    /**
     * @var int|null
     */
    private $year;

    /**
     * @var string
     */
    private $showsuserid;

    /**
     * @var int
     */
    private $ref_festival;

    /**
     * @var bool
     */
    private $festival_lock;

    /**
     * @var \DateTime|null
     */
    private $spotlight_date;

    /**
     * @var \DateTime|null
     */
    private $staffpick_date;

    /**
     * @var int
     */
    private $merge_lock;

    /**
     * @var int
     */
    private $ref_venue;

    /**
     * @var string|null
     */
    private $changeComment;

    /**
     * @var bool
     */
    private $isCompilation;

    /**
     * @var string
     */
    private $title;

    /**
     * @var int
     */
    private $id;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $sources;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $userPerformances;

    /**
     * @var \App\Doctrine\ORM\Entity\Artist
     */
    private $artist;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $wantedUsers = array();

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->sources = new \Doctrine\Common\Collections\ArrayCollection();
        $this->userPerformances = new \Doctrine\Common\Collections\ArrayCollection();
        $this->wantedUsers = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set date.
     *
     * @param string $date
     *
     * @return Performance
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date.
     *
     * @return string
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set venue.
     *
     * @param string $venue
     *
     * @return Performance
     */
    public function setVenue($venue)
    {
        $this->venue = $venue;

        return $this;
    }

    /**
     * Get venue.
     *
     * @return string
     */
    public function getVenue()
    {
        return $this->venue;
    }

    /**
     * Set city.
     *
     * @param string $city
     *
     * @return Performance
     */
    public function setCity($city)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city.
     *
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Set state.
     *
     * @param string $state
     *
     * @return Performance
     */
    public function setState($state)
    {
        $this->state = $state;

        return $this;
    }

    /**
     * Get state.
     *
     * @return string
     */
    public function getState()
    {
        return $this->state;
    }

    /**
     * Set set1.
     *
     * @param string|null $set1
     *
     * @return Performance
     */
    public function setSet1($set1 = null)
    {
        $this->set1 = $set1;

        return $this;
    }

    /**
     * Get set1.
     *
     * @return string|null
     */
    public function getSet1()
    {
        return $this->set1;
    }

    /**
     * Set set2.
     *
     * @param string|null $set2
     *
     * @return Performance
     */
    public function setSet2($set2 = null)
    {
        $this->set2 = $set2;

        return $this;
    }

    /**
     * Get set2.
     *
     * @return string|null
     */
    public function getSet2()
    {
        return $this->set2;
    }

    /**
     * Set set3.
     *
     * @param string|null $set3
     *
     * @return Performance
     */
    public function setSet3($set3 = null)
    {
        $this->set3 = $set3;

        return $this;
    }

    /**
     * Get set3.
     *
     * @return string|null
     */
    public function getSet3()
    {
        return $this->set3;
    }

    /**
     * Set comment.
     *
     * @param string|null $comment
     *
     * @return Performance
     */
    public function setComment($comment = null)
    {
        $this->comment = $comment;

        return $this;
    }

    /**
     * Get comment.
     *
     * @return string|null
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * Set updatedAt.
     *
     * @param \DateTime|null $updatedAt
     *
     * @return Performance
     */
    public function setUpdatedAt($updatedAt = null)
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * Get updatedAt.
     *
     * @return \DateTime|null
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * Set createdAt.
     *
     * @param \DateTime|null $createdAt
     *
     * @return Performance
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
     * Set year.
     *
     * @param int|null $year
     *
     * @return Performance
     */
    public function setYear($year = null)
    {
        $this->year = $year;

        return $this;
    }

    /**
     * Get year.
     *
     * @return int|null
     */
    public function getYear()
    {
        return $this->year;
    }

    /**
     * Set showsuserid.
     *
     * @param string $showsuserid
     *
     * @return Performance
     */
    public function setShowsuserid($showsuserid)
    {
        $this->showsuserid = $showsuserid;

        return $this;
    }

    /**
     * Get showsuserid.
     *
     * @return string
     */
    public function getShowsuserid()
    {
        return $this->showsuserid;
    }

    /**
     * Set refFestival.
     *
     * @param int $refFestival
     *
     * @return Performance
     */
    public function setRefFestival($refFestival)
    {
        $this->ref_festival = $refFestival;

        return $this;
    }

    /**
     * Get refFestival.
     *
     * @return int
     */
    public function getRefFestival()
    {
        return $this->ref_festival;
    }

    /**
     * Set festivalLock.
     *
     * @param bool $festivalLock
     *
     * @return Performance
     */
    public function setFestivalLock($festivalLock)
    {
        $this->festival_lock = $festivalLock;

        return $this;
    }

    /**
     * Get festivalLock.
     *
     * @return bool
     */
    public function getFestivalLock()
    {
        return $this->festival_lock;
    }

    /**
     * Set spotlightDate.
     *
     * @param \DateTime|null $spotlightDate
     *
     * @return Performance
     */
    public function setSpotlightDate($spotlightDate = null)
    {
        $this->spotlight_date = $spotlightDate;

        return $this;
    }

    /**
     * Get spotlightDate.
     *
     * @return \DateTime|null
     */
    public function getSpotlightDate()
    {
        return $this->spotlight_date;
    }

    /**
     * Set staffpickDate.
     *
     * @param \DateTime|null $staffpickDate
     *
     * @return Performance
     */
    public function setStaffpickDate($staffpickDate = null)
    {
        $this->staffpick_date = $staffpickDate;

        return $this;
    }

    /**
     * Get staffpickDate.
     *
     * @return \DateTime|null
     */
    public function getStaffpickDate()
    {
        return $this->staffpick_date;
    }

    /**
     * Set mergeLock.
     *
     * @param int $mergeLock
     *
     * @return Performance
     */
    public function setMergeLock($mergeLock)
    {
        $this->merge_lock = $mergeLock;

        return $this;
    }

    /**
     * Get mergeLock.
     *
     * @return int
     */
    public function getMergeLock()
    {
        return $this->merge_lock;
    }

    /**
     * Set refVenue.
     *
     * @param int $refVenue
     *
     * @return Performance
     */
    public function setRefVenue($refVenue)
    {
        $this->ref_venue = $refVenue;

        return $this;
    }

    /**
     * Get refVenue.
     *
     * @return int
     */
    public function getRefVenue()
    {
        return $this->ref_venue;
    }

    /**
     * Set changeComment.
     *
     * @param string|null $changeComment
     *
     * @return Performance
     */
    public function setChangeComment($changeComment = null)
    {
        $this->changeComment = $changeComment;

        return $this;
    }

    /**
     * Get changeComment.
     *
     * @return string|null
     */
    public function getChangeComment()
    {
        return $this->changeComment;
    }

    /**
     * Set isCompilation.
     *
     * @param bool $isCompilation
     *
     * @return Performance
     */
    public function setIsCompilation($isCompilation)
    {
        $this->isCompilation = $isCompilation;

        return $this;
    }

    /**
     * Get isCompilation.
     *
     * @return bool
     */
    public function getIsCompilation()
    {
        return $this->isCompilation;
    }

    /**
     * Set title.
     *
     * @param string $title
     *
     * @return Performance
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title.
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
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
     * Add source.
     *
     * @param \App\Doctrine\ORM\Entity\Source $source
     *
     * @return Performance
     */
    public function addSource(\App\Doctrine\ORM\Entity\Source $source)
    {
        $this->sources[] = $source;

        return $this;
    }

    /**
     * Remove source.
     *
     * @param \App\Doctrine\ORM\Entity\Source $source
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeSource(\App\Doctrine\ORM\Entity\Source $source)
    {
        return $this->sources->removeElement($source);
    }

    /**
     * Get sources.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getSources()
    {
        return $this->sources;
    }

    /**
     * Add userPerformance.
     *
     * @param \App\Doctrine\ORM\Entity\UserPerformance $userPerformance
     *
     * @return Performance
     */
    public function addUserPerformance(\App\Doctrine\ORM\Entity\UserPerformance $userPerformance)
    {
        $this->userPerformances[] = $userPerformance;

        return $this;
    }

    /**
     * Remove userPerformance.
     *
     * @param \App\Doctrine\ORM\Entity\UserPerformance $userPerformance
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeUserPerformance(\App\Doctrine\ORM\Entity\UserPerformance $userPerformance)
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

    /**
     * Set artist.
     *
     * @param \App\Doctrine\ORM\Entity\Artist $artist
     *
     * @return Performance
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
     * Add wantedUser.
     *
     * @param \App\Doctrine\ORM\Entity\User $wantedUser
     *
     * @return Performance
     */
    public function addWantedUser(\App\Doctrine\ORM\Entity\User $wantedUser)
    {
        $this->wantedUsers[] = $wantedUser;

        return $this;
    }

    /**
     * Remove wantedUser.
     *
     * @param \App\Doctrine\ORM\Entity\User $wantedUser
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeWantedUser(\App\Doctrine\ORM\Entity\User $wantedUser)
    {
        return $this->wantedUsers->removeElement($wantedUser);
    }

    /**
     * Get wantedUsers.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getWantedUsers()
    {
        return $this->wantedUsers;
    }
}
