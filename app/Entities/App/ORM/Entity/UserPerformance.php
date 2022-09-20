<?php

namespace App\ORM\Entity;

/**
 * UserPerformance
 */
class UserPerformance
{
    /**
     * @var string|null
     */
    private $sourceInfo;

    /**
     * @var string|null
     */
    private $checksums;

    /**
     * @var \DateTime
     */
    private $createdAt;

    /**
     * @var int|null
     */
    private $media_count;

    /**
     * @var string|null
     */
    private $media_type;

    /**
     * @var int|null
     */
    private $noise_reduction;

    /**
     * @var string|null
     */
    private $scms_status;

    /**
     * @var string|null
     */
    private $show_rating;

    /**
     * @var string|null
     */
    private $sound_rating;

    /**
     * @var string|null
     */
    private $microphones;

    /**
     * @var int|null
     */
    private $generation;

    /**
     * @var string|null
     */
    private $note;

    /**
     * @var string|null
     */
    private $j_card_comment;

    /**
     * @var string|null
     */
    private $tech_note;

    /**
     * @var string|null
     */
    private $reference_number;

    /**
     * @var string|null
     */
    private $traded_from;

    /**
     * @var string|null
     */
    private $traded_from_email;

    /**
     * @var bool|null
     */
    private $tradesAllowed;

    /**
     * @var string|null
     */
    private $status;

    /**
     * @var string|null
     */
    private $attendance;

    /**
     * @var string
     */
    private $userid;

    /**
     * @var string|null
     */
    private $tapername;

    /**
     * @var string|null
     */
    private $miclocation;

    /**
     * @var int
     */
    private $id;

    /**
     * @var \App\ORM\Entity\Performance
     */
    private $performance;

    /**
     * @var \App\ORM\Entity\Source
     */
    private $source;

    /**
     * @var \App\ORM\Entity\User
     */
    private $user;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $userLists = array();

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->userLists = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set sourceInfo.
     *
     * @param string|null $sourceInfo
     *
     * @return UserPerformance
     */
    public function setSourceInfo($sourceInfo = null)
    {
        $this->sourceInfo = $sourceInfo;

        return $this;
    }

    /**
     * Get sourceInfo.
     *
     * @return string|null
     */
    public function getSourceInfo()
    {
        return $this->sourceInfo;
    }

    /**
     * Set checksums.
     *
     * @param string|null $checksums
     *
     * @return UserPerformance
     */
    public function setChecksums($checksums = null)
    {
        $this->checksums = $checksums;

        return $this;
    }

    /**
     * Get checksums.
     *
     * @return string|null
     */
    public function getChecksums()
    {
        return $this->checksums;
    }

    /**
     * Set createdAt.
     *
     * @param \DateTime $createdAt
     *
     * @return UserPerformance
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
     * Set mediaCount.
     *
     * @param int|null $mediaCount
     *
     * @return UserPerformance
     */
    public function setMediaCount($mediaCount = null)
    {
        $this->media_count = $mediaCount;

        return $this;
    }

    /**
     * Get mediaCount.
     *
     * @return int|null
     */
    public function getMediaCount()
    {
        return $this->media_count;
    }

    /**
     * Set mediaType.
     *
     * @param string|null $mediaType
     *
     * @return UserPerformance
     */
    public function setMediaType($mediaType = null)
    {
        $this->media_type = $mediaType;

        return $this;
    }

    /**
     * Get mediaType.
     *
     * @return string|null
     */
    public function getMediaType()
    {
        return $this->media_type;
    }

    /**
     * Set noiseReduction.
     *
     * @param int|null $noiseReduction
     *
     * @return UserPerformance
     */
    public function setNoiseReduction($noiseReduction = null)
    {
        $this->noise_reduction = $noiseReduction;

        return $this;
    }

    /**
     * Get noiseReduction.
     *
     * @return int|null
     */
    public function getNoiseReduction()
    {
        return $this->noise_reduction;
    }

    /**
     * Set scmsStatus.
     *
     * @param string|null $scmsStatus
     *
     * @return UserPerformance
     */
    public function setScmsStatus($scmsStatus = null)
    {
        $this->scms_status = $scmsStatus;

        return $this;
    }

    /**
     * Get scmsStatus.
     *
     * @return string|null
     */
    public function getScmsStatus()
    {
        return $this->scms_status;
    }

    /**
     * Set showRating.
     *
     * @param string|null $showRating
     *
     * @return UserPerformance
     */
    public function setShowRating($showRating = null)
    {
        $this->show_rating = $showRating;

        return $this;
    }

    /**
     * Get showRating.
     *
     * @return string|null
     */
    public function getShowRating()
    {
        return $this->show_rating;
    }

    /**
     * Set soundRating.
     *
     * @param string|null $soundRating
     *
     * @return UserPerformance
     */
    public function setSoundRating($soundRating = null)
    {
        $this->sound_rating = $soundRating;

        return $this;
    }

    /**
     * Get soundRating.
     *
     * @return string|null
     */
    public function getSoundRating()
    {
        return $this->sound_rating;
    }

    /**
     * Set microphones.
     *
     * @param string|null $microphones
     *
     * @return UserPerformance
     */
    public function setMicrophones($microphones = null)
    {
        $this->microphones = $microphones;

        return $this;
    }

    /**
     * Get microphones.
     *
     * @return string|null
     */
    public function getMicrophones()
    {
        return $this->microphones;
    }

    /**
     * Set generation.
     *
     * @param int|null $generation
     *
     * @return UserPerformance
     */
    public function setGeneration($generation = null)
    {
        $this->generation = $generation;

        return $this;
    }

    /**
     * Get generation.
     *
     * @return int|null
     */
    public function getGeneration()
    {
        return $this->generation;
    }

    /**
     * Set note.
     *
     * @param string|null $note
     *
     * @return UserPerformance
     */
    public function setNote($note = null)
    {
        $this->note = $note;

        return $this;
    }

    /**
     * Get note.
     *
     * @return string|null
     */
    public function getNote()
    {
        return $this->note;
    }

    /**
     * Set jCardComment.
     *
     * @param string|null $jCardComment
     *
     * @return UserPerformance
     */
    public function setJCardComment($jCardComment = null)
    {
        $this->j_card_comment = $jCardComment;

        return $this;
    }

    /**
     * Get jCardComment.
     *
     * @return string|null
     */
    public function getJCardComment()
    {
        return $this->j_card_comment;
    }

    /**
     * Set techNote.
     *
     * @param string|null $techNote
     *
     * @return UserPerformance
     */
    public function setTechNote($techNote = null)
    {
        $this->tech_note = $techNote;

        return $this;
    }

    /**
     * Get techNote.
     *
     * @return string|null
     */
    public function getTechNote()
    {
        return $this->tech_note;
    }

    /**
     * Set referenceNumber.
     *
     * @param string|null $referenceNumber
     *
     * @return UserPerformance
     */
    public function setReferenceNumber($referenceNumber = null)
    {
        $this->reference_number = $referenceNumber;

        return $this;
    }

    /**
     * Get referenceNumber.
     *
     * @return string|null
     */
    public function getReferenceNumber()
    {
        return $this->reference_number;
    }

    /**
     * Set tradedFrom.
     *
     * @param string|null $tradedFrom
     *
     * @return UserPerformance
     */
    public function setTradedFrom($tradedFrom = null)
    {
        $this->traded_from = $tradedFrom;

        return $this;
    }

    /**
     * Get tradedFrom.
     *
     * @return string|null
     */
    public function getTradedFrom()
    {
        return $this->traded_from;
    }

    /**
     * Set tradedFromEmail.
     *
     * @param string|null $tradedFromEmail
     *
     * @return UserPerformance
     */
    public function setTradedFromEmail($tradedFromEmail = null)
    {
        $this->traded_from_email = $tradedFromEmail;

        return $this;
    }

    /**
     * Get tradedFromEmail.
     *
     * @return string|null
     */
    public function getTradedFromEmail()
    {
        return $this->traded_from_email;
    }

    /**
     * Set tradesAllowed.
     *
     * @param bool|null $tradesAllowed
     *
     * @return UserPerformance
     */
    public function setTradesAllowed($tradesAllowed = null)
    {
        $this->tradesAllowed = $tradesAllowed;

        return $this;
    }

    /**
     * Get tradesAllowed.
     *
     * @return bool|null
     */
    public function getTradesAllowed()
    {
        return $this->tradesAllowed;
    }

    /**
     * Set status.
     *
     * @param string|null $status
     *
     * @return UserPerformance
     */
    public function setStatus($status = null)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * Get status.
     *
     * @return string|null
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Set attendance.
     *
     * @param string|null $attendance
     *
     * @return UserPerformance
     */
    public function setAttendance($attendance = null)
    {
        $this->attendance = $attendance;

        return $this;
    }

    /**
     * Get attendance.
     *
     * @return string|null
     */
    public function getAttendance()
    {
        return $this->attendance;
    }

    /**
     * Set userid.
     *
     * @param string $userid
     *
     * @return UserPerformance
     */
    public function setUserid($userid)
    {
        $this->userid = $userid;

        return $this;
    }

    /**
     * Get userid.
     *
     * @return string
     */
    public function getUserid()
    {
        return $this->userid;
    }

    /**
     * Set tapername.
     *
     * @param string|null $tapername
     *
     * @return UserPerformance
     */
    public function setTapername($tapername = null)
    {
        $this->tapername = $tapername;

        return $this;
    }

    /**
     * Get tapername.
     *
     * @return string|null
     */
    public function getTapername()
    {
        return $this->tapername;
    }

    /**
     * Set miclocation.
     *
     * @param string|null $miclocation
     *
     * @return UserPerformance
     */
    public function setMiclocation($miclocation = null)
    {
        $this->miclocation = $miclocation;

        return $this;
    }

    /**
     * Get miclocation.
     *
     * @return string|null
     */
    public function getMiclocation()
    {
        return $this->miclocation;
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
     * Set performance.
     *
     * @param \App\ORM\Entity\Performance $performance
     *
     * @return UserPerformance
     */
    public function setPerformance(\App\ORM\Entity\Performance $performance)
    {
        $this->performance = $performance;

        return $this;
    }

    /**
     * Get performance.
     *
     * @return \App\ORM\Entity\Performance
     */
    public function getPerformance()
    {
        return $this->performance;
    }

    /**
     * Set source.
     *
     * @param \App\ORM\Entity\Source|null $source
     *
     * @return UserPerformance
     */
    public function setSource(\App\ORM\Entity\Source $source = null)
    {
        $this->source = $source;

        return $this;
    }

    /**
     * Get source.
     *
     * @return \App\ORM\Entity\Source|null
     */
    public function getSource()
    {
        return $this->source;
    }

    /**
     * Set user.
     *
     * @param \App\ORM\Entity\User $user
     *
     * @return UserPerformance
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
     * Add userList.
     *
     * @param \App\ORM\Entity\UserList $userList
     *
     * @return UserPerformance
     */
    public function addUserList(\App\ORM\Entity\UserList $userList)
    {
        $this->userLists[] = $userList;

        return $this;
    }

    /**
     * Remove userList.
     *
     * @param \App\ORM\Entity\UserList $userList
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeUserList(\App\ORM\Entity\UserList $userList)
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
