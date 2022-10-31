<?php

namespace App\ORM\Entity\InternetArchive;

/**
 * Collection
 */
class Collection
{
    /**
     * @var string
     */
    private $name;

    /**
     * @var int
     */
    private $id;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $identifier = array();

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->identifier = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set name.
     *
     * @param string $name
     *
     * @return Collection
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
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Add identifier.
     *
     * @param \App\ORM\Entity\InternetArchive\Identifier $identifier
     *
     * @return Collection
     */
    public function addIdentifier(\App\ORM\Entity\InternetArchive\Identifier $identifier)
    {
        $this->identifier[] = $identifier;

        return $this;
    }

    /**
     * Remove identifier.
     *
     * @param \App\ORM\Entity\InternetArchive\Identifier $identifier
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeIdentifier(\App\ORM\Entity\InternetArchive\Identifier $identifier)
    {
        return $this->identifier->removeElement($identifier);
    }

    /**
     * Get identifier.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getIdentifier()
    {
        return $this->identifier;
    }
}
