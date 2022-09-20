<?php

namespace App\ORM\Entity;

/**
 * Checksum
 */
class Checksum
{
    /**
     * @var string|null
     */
    private $md5desc;

    /**
     * @var string|null
     */
    private $md5text;

    /**
     * @var \DateTime
     */
    private $createdAt;

    /**
     * @var int
     */
    private $id;

    /**
     * @var \App\ORM\Entity\Source
     */
    private $source;


    /**
     * Set md5desc.
     *
     * @param string|null $md5desc
     *
     * @return Checksum
     */
    public function setMd5desc($md5desc = null)
    {
        $this->md5desc = $md5desc;

        return $this;
    }

    /**
     * Get md5desc.
     *
     * @return string|null
     */
    public function getMd5desc()
    {
        return $this->md5desc;
    }

    /**
     * Set md5text.
     *
     * @param string|null $md5text
     *
     * @return Checksum
     */
    public function setMd5text($md5text = null)
    {
        $this->md5text = $md5text;

        return $this;
    }

    /**
     * Get md5text.
     *
     * @return string|null
     */
    public function getMd5text()
    {
        return $this->md5text;
    }

    /**
     * Set createdAt.
     *
     * @param \DateTime $createdAt
     *
     * @return Checksum
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
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set source.
     *
     * @param \App\ORM\Entity\Source $source
     *
     * @return Checksum
     */
    public function setSource(\App\ORM\Entity\Source $source)
    {
        $this->source = $source;

        return $this;
    }

    /**
     * Get source.
     *
     * @return \App\ORM\Entity\Source
     */
    public function getSource()
    {
        return $this->source;
    }
}
