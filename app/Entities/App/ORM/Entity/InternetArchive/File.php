<?php

namespace App\ORM\Entity\InternetArchive;

/**
 * File
 */
class File
{
    /**
     * @var string
     */
    private $name;

    /**
     * @var string|null
     */
    private $body;

    /**
     * @var int
     */
    private $id;

    /**
     * @var \App\ORM\Entity\InternetArchive\Identifier
     */
    private $identifier;


    /**
     * Set name.
     *
     * @param string $name
     *
     * @return File
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
     * Set body.
     *
     * @param string|null $body
     *
     * @return File
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
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set identifier.
     *
     * @param \App\ORM\Entity\InternetArchive\Identifier $identifier
     *
     * @return File
     */
    public function setIdentifier(\App\ORM\Entity\InternetArchive\Identifier $identifier)
    {
        $this->identifier = $identifier;

        return $this;
    }

    /**
     * Get identifier.
     *
     * @return \App\ORM\Entity\InternetArchive\Identifier
     */
    public function getIdentifier()
    {
        return $this->identifier;
    }
}
