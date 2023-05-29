<?php

namespace App\ORM\Entity\InternetArchive;

/**
 * CreatorUnprefix
 */
class CreatorUnprefix
{
    /**
     * @var string
     */
    private $name;

    /**
     * @var string|null
     */
    private $nameUnprefix;

    /**
     * @var int
     */
    private $id;


    /**
     * Set name.
     *
     * @param string $name
     *
     * @return CreatorUnprefix
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
     * Set nameUnprefix.
     *
     * @param string|null $nameUnprefix
     *
     * @return CreatorUnprefix
     */
    public function setNameUnprefix($nameUnprefix = null)
    {
        $this->nameUnprefix = $nameUnprefix;

        return $this;
    }

    /**
     * Get nameUnprefix.
     *
     * @return string|null
     */
    public function getNameUnprefix()
    {
        return $this->nameUnprefix;
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
}
