<?php

namespace App\ORM\Entity\InternetArchive;

/**
 * Identifier
 */
class Identifier
{
    /**
     * @var string
     */
    private $archiveIdentifier;

    /**
     * @var string|null
     */
    private $server;

    /**
     * @var string|null
     */
    private $performanceDate;

    /**
     * @var \DateTime
     */
    private $addedAt;

    /**
     * @var string|null
     */
    private $title;

    /**
     * @var string|null
     */
    private $description;

    /**
     * @var string|null
     */
    private $uploader;

    /**
     * @var string|null
     */
    private $venue;

    /**
     * @var string|null
     */
    private $coverage;

    /**
     * @var string|null
     */
    private $year;

    /**
     * @var string|null
     */
    private $notes;

    /**
     * @var string|null
     */
    private $taper;

    /**
     * @var string|null
     */
    private $lineage;

    /**
     * @var string|null
     */
    private $archiveSource;

    /**
     * @var string|null
     */
    private $md5s;

    /**
     * @var int
     */
    private $id;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $file;

    /**
     * @var \App\ORM\Entity\InternetArchive\Creator
     */
    private $creator;

    /**
     * @var \App\ORM\Entity\Source
     */
    private $source;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $collection = array();

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->file = new \Doctrine\Common\Collections\ArrayCollection();
        $this->collection = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set archiveIdentifier.
     *
     * @param string $archiveIdentifier
     *
     * @return Identifier
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
     * Set server.
     *
     * @param string|null $server
     *
     * @return Identifier
     */
    public function setServer($server = null)
    {
        $this->server = $server;

        return $this;
    }

    /**
     * Get server.
     *
     * @return string|null
     */
    public function getServer()
    {
        return $this->server;
    }

    /**
     * Set performanceDate.
     *
     * @param string|null $performanceDate
     *
     * @return Identifier
     */
    public function setPerformanceDate($performanceDate = null)
    {
        $this->performanceDate = $performanceDate;

        return $this;
    }

    /**
     * Get performanceDate.
     *
     * @return string|null
     */
    public function getPerformanceDate()
    {
        return $this->performanceDate;
    }

    /**
     * Set addedAt.
     *
     * @param \DateTime $addedAt
     *
     * @return Identifier
     */
    public function setAddedAt($addedAt)
    {
        $this->addedAt = $addedAt;

        return $this;
    }

    /**
     * Get addedAt.
     *
     * @return \DateTime
     */
    public function getAddedAt()
    {
        return $this->addedAt;
    }

    /**
     * Set title.
     *
     * @param string|null $title
     *
     * @return Identifier
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
     * Set description.
     *
     * @param string|null $description
     *
     * @return Identifier
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
     * Set uploader.
     *
     * @param string|null $uploader
     *
     * @return Identifier
     */
    public function setUploader($uploader = null)
    {
        $this->uploader = $uploader;

        return $this;
    }

    /**
     * Get uploader.
     *
     * @return string|null
     */
    public function getUploader()
    {
        return $this->uploader;
    }

    /**
     * Set venue.
     *
     * @param string|null $venue
     *
     * @return Identifier
     */
    public function setVenue($venue = null)
    {
        $this->venue = $venue;

        return $this;
    }

    /**
     * Get venue.
     *
     * @return string|null
     */
    public function getVenue()
    {
        return $this->venue;
    }

    /**
     * Set coverage.
     *
     * @param string|null $coverage
     *
     * @return Identifier
     */
    public function setCoverage($coverage = null)
    {
        $this->coverage = $coverage;

        return $this;
    }

    /**
     * Get coverage.
     *
     * @return string|null
     */
    public function getCoverage()
    {
        return $this->coverage;
    }

    /**
     * Set year.
     *
     * @param string|null $year
     *
     * @return Identifier
     */
    public function setYear($year = null)
    {
        $this->year = $year;

        return $this;
    }

    /**
     * Get year.
     *
     * @return string|null
     */
    public function getYear()
    {
        return $this->year;
    }

    /**
     * Set notes.
     *
     * @param string|null $notes
     *
     * @return Identifier
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
     * Set taper.
     *
     * @param string|null $taper
     *
     * @return Identifier
     */
    public function setTaper($taper = null)
    {
        $this->taper = $taper;

        return $this;
    }

    /**
     * Get taper.
     *
     * @return string|null
     */
    public function getTaper()
    {
        return $this->taper;
    }

    /**
     * Set lineage.
     *
     * @param string|null $lineage
     *
     * @return Identifier
     */
    public function setLineage($lineage = null)
    {
        $this->lineage = $lineage;

        return $this;
    }

    /**
     * Get lineage.
     *
     * @return string|null
     */
    public function getLineage()
    {
        return $this->lineage;
    }

    /**
     * Set archiveSource.
     *
     * @param string|null $archiveSource
     *
     * @return Identifier
     */
    public function setArchiveSource($archiveSource = null)
    {
        $this->archiveSource = $archiveSource;

        return $this;
    }

    /**
     * Get archiveSource.
     *
     * @return string|null
     */
    public function getArchiveSource()
    {
        return $this->archiveSource;
    }

    /**
     * Set md5s.
     *
     * @param string|null $md5s
     *
     * @return Identifier
     */
    public function setMd5s($md5s = null)
    {
        $this->md5s = $md5s;

        return $this;
    }

    /**
     * Get md5s.
     *
     * @return string|null
     */
    public function getMd5s()
    {
        return $this->md5s;
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
     * Add file.
     *
     * @param \App\ORM\Entity\InternetArchive\File $file
     *
     * @return Identifier
     */
    public function addFile(\App\ORM\Entity\InternetArchive\File $file)
    {
        $this->file[] = $file;

        return $this;
    }

    /**
     * Remove file.
     *
     * @param \App\ORM\Entity\InternetArchive\File $file
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeFile(\App\ORM\Entity\InternetArchive\File $file)
    {
        return $this->file->removeElement($file);
    }

    /**
     * Get file.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getFile()
    {
        return $this->file;
    }

    /**
     * Set creator.
     *
     * @param \App\ORM\Entity\InternetArchive\Creator $creator
     *
     * @return Identifier
     */
    public function setCreator(\App\ORM\Entity\InternetArchive\Creator $creator)
    {
        $this->creator = $creator;

        return $this;
    }

    /**
     * Get creator.
     *
     * @return \App\ORM\Entity\InternetArchive\Creator
     */
    public function getCreator()
    {
        return $this->creator;
    }

    /**
     * Set source.
     *
     * @param \App\ORM\Entity\Source|null $source
     *
     * @return Identifier
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
     * Add collection.
     *
     * @param \App\ORM\Entity\InternetArchive\Collection $collection
     *
     * @return Identifier
     */
    public function addCollection(\App\ORM\Entity\InternetArchive\Collection $collection)
    {
        $this->collection[] = $collection;

        return $this;
    }

    /**
     * Remove collection.
     *
     * @param \App\ORM\Entity\InternetArchive\Collection $collection
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeCollection(\App\ORM\Entity\InternetArchive\Collection $collection)
    {
        return $this->collection->removeElement($collection);
    }

    /**
     * Get collection.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getCollection()
    {
        return $this->collection;
    }
}
