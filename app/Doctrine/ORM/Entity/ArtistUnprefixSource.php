<?php

namespace App\Doctrine\ORM\Entity;

/**
 * ArtistUnprefixSource
 */
class ArtistUnprefixSource
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
     * @var bool|null
     */
    private $top100;

    /**
     * @var int
     */
    private $id;


    /**
     * Set name.
     *
     * @param string $name
     *
     * @return ArtistUnprefixSource
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
     * @return ArtistUnprefixSource
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
     * Set top100.
     *
     * @param bool|null $top100
     *
     * @return ArtistUnprefixSource
     */
    public function setTop100($top100 = null)
    {
        $this->top100 = $top100;

        return $this;
    }

    /**
     * Get top100.
     *
     * @return bool|null
     */
    public function getTop100()
    {
        return $this->top100;
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
