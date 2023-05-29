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
    private $description;

    /**
     * @var string|null
     */
    private $body;

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
     * Set description.
     *
     * @param string|null $description
     *
     * @return Checksum
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
     * Set body.
     *
     * @param string|null $body
     *
     * @return Checksum
     */
    public function setBody($body = null)
    {
        $this->body = $body;

        return $this;
    }

    /**
     * Get body.
     *
     * @return string|null
     */
    public function getBody()
    {
        return $this->body;
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
