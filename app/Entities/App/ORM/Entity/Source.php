<?php

namespace App\ORM\Entity;

/**
 * Source
 */
class Source
{
    /**
     * @var \DateTime|null
     */
    private $createdAt;

    /**
     * @var string
     */
    private $enterUsername;

    /**
     * @var string
     */
    private $circdate;

    /**
     * @var int
     */
    private $shndiskcount;

    /**
     * @var int
     */
    private $wavdiskcount;

    /**
     * @var string|null
     */
    private $textdoc;

    /**
     * @var string
     */
    private $comments;

    /**
     * @var string
     */
    private $archiveIdentifier;

    /**
     * @var \DateTime|null
     */
    private $updatedAt;

    /**
     * @var int|null
     */
    private $mediaSize;

    /**
     * @var int|null
     */
    private $mediaSizeUncompressed;

    /**
     * @var int|null
     */
    private $dummyColumn;

    /**
     * @var int
     */
    private $id;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $checksums;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $userPerformances;

    /**
     * @var \App\ORM\Entity\Performance
     */
    private $performance;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->checksums = new \Doctrine\Common\Collections\ArrayCollection();
        $this->userPerformances = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set createdAt.
     *
     * @param \DateTime|null $createdAt
     *
     * @return Source
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
     * Set enterUsername.
     *
     * @param string $enterUsername
     *
     * @return Source
     */
    public function setEnterUsername($enterUsername)
    {
        $this->enterUsername = $enterUsername;

        return $this;
    }

    /**
     * Get enterUsername.
     *
     * @return string
     */
    public function getEnterUsername()
    {
        return $this->enterUsername;
    }

    /**
     * Set circdate.
     *
     * @param string $circdate
     *
     * @return Source
     */
    public function setCircdate($circdate)
    {
        $this->circdate = $circdate;

        return $this;
    }

    /**
     * Get circdate.
     *
     * @return string
     */
    public function getCircdate()
    {
        return $this->circdate;
    }

    /**
     * Set shndiskcount.
     *
     * @param int $shndiskcount
     *
     * @return Source
     */
    public function setShndiskcount($shndiskcount)
    {
        $this->shndiskcount = $shndiskcount;

        return $this;
    }

    /**
     * Get shndiskcount.
     *
     * @return int
     */
    public function getShndiskcount()
    {
        return $this->shndiskcount;
    }

    /**
     * Set wavdiskcount.
     *
     * @param int $wavdiskcount
     *
     * @return Source
     */
    public function setWavdiskcount($wavdiskcount)
    {
        $this->wavdiskcount = $wavdiskcount;

        return $this;
    }

    /**
     * Get wavdiskcount.
     *
     * @return int
     */
    public function getWavdiskcount()
    {
        return $this->wavdiskcount;
    }

    /**
     * Set textdoc.
     *
     * @param string|null $textdoc
     *
     * @return Source
     */
    public function setTextdoc($textdoc = null)
    {
        $this->textdoc = $textdoc;

        return $this;
    }

    /**
     * Get textdoc.
     *
     * @return string|null
     */
    public function getTextdoc()
    {
        return $this->textdoc;
    }

    /**
     * Set comments.
     *
     * @param string $comments
     *
     * @return Source
     */
    public function setComments($comments)
    {
        $this->comments = $comments;

        return $this;
    }

    /**
     * Get comments.
     *
     * @return string
     */
    public function getComments()
    {
        return $this->comments;
    }

    /**
     * Set archiveIdentifier.
     *
     * @param string $archiveIdentifier
     *
     * @return Source
     */
    public function setArchiveIdentifier($archiveIdentifier)
    {
        $this->archiveIdentifier = $archiveIdentifier;

        return $this;
    }

    /**
     * Get archiveIdentifier.
     *
     * @return string
     */
    public function getArchiveIdentifier()
    {
        return $this->archiveIdentifier;
    }

    /**
     * Set updatedAt.
     *
     * @param \DateTime|null $updatedAt
     *
     * @return Source
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
     * Set mediaSize.
     *
     * @param int|null $mediaSize
     *
     * @return Source
     */
    public function setMediaSize($mediaSize = null)
    {
        $this->mediaSize = $mediaSize;

        return $this;
    }

    /**
     * Get mediaSize.
     *
     * @return int|null
     */
    public function getMediaSize()
    {
        return $this->mediaSize;
    }

    /**
     * Set mediaSizeUncompressed.
     *
     * @param int|null $mediaSizeUncompressed
     *
     * @return Source
     */
    public function setMediaSizeUncompressed($mediaSizeUncompressed = null)
    {
        $this->mediaSizeUncompressed = $mediaSizeUncompressed;

        return $this;
    }

    /**
     * Get mediaSizeUncompressed.
     *
     * @return int|null
     */
    public function getMediaSizeUncompressed()
    {
        return $this->mediaSizeUncompressed;
    }

    /**
     * Set dummyColumn.
     *
     * @param int|null $dummyColumn
     *
     * @return Source
     */
    public function setDummyColumn($dummyColumn = null)
    {
        $this->dummyColumn = $dummyColumn;

        return $this;
    }

    /**
     * Get dummyColumn.
     *
     * @return int|null
     */
    public function getDummyColumn()
    {
        return $this->dummyColumn;
    }

    /**
     * Set id.
     *
     * @param int $id
     *
     * @return Source
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
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
     * Add checksum.
     *
     * @param \App\ORM\Entity\Checksum $checksum
     *
     * @return Source
     */
    public function addChecksum(\App\ORM\Entity\Checksum $checksum)
    {
        $this->checksums[] = $checksum;

        return $this;
    }

    /**
     * Remove checksum.
     *
     * @param \App\ORM\Entity\Checksum $checksum
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeChecksum(\App\ORM\Entity\Checksum $checksum)
    {
        return $this->checksums->removeElement($checksum);
    }

    /**
     * Get checksums.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getChecksums()
    {
        return $this->checksums;
    }

    /**
     * Add userPerformance.
     *
     * @param \App\ORM\Entity\UserPerformance $userPerformance
     *
     * @return Source
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

    /**
     * Set performance.
     *
     * @param \App\ORM\Entity\Performance $performance
     *
     * @return Source
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
}
