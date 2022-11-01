<?php

namespace App\Jobs;

use App\ORM\Entity\Artist;
use App\ORM\Entity\InternetArchive\Collection;
use App\ORM\Entity\InternetArchive\Creator;
use App\ORM\Entity\InternetArchive\File;
use App\ORM\Entity\InternetArchive\Identifier;
use App\ORM\Entity\Source;
use Doctrine\ORM\EntityManager;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;

class InternetArchiveIndexDate implements
    ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private \DateTime $dateTime;

    private array $fields = [
        'creator',
        'identifier',
        'collection',
        'date',
        'server',
        'addeddate',
        'title',
        'description',
        'uploader',
        'venue',
        'coverage',
        'year',
        'notes',
        'taper',
        'lineage',
        'source',
        'md5s',
    ];

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(string $date)
    {
        $this->dateTime = \DateTime::CreateFromFormat('Y-m-d', $date);
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(EntityManager $entityManager)
    {
        $identifierRepository = $entityManager
            ->getRepository(Identifier::class);
        $collectionRepository = $entityManager
            ->getRepository(Collection::class);
        $creatorRepository = $entityManager
            ->getRepository(Creator::class);
        $artistRepository = $entityManager
            ->getRepository(Artist::class);

        $params = [
            'q'      => 'addeddate:"' . $this->dateTime->format('Y-m-d') . '"'
                        . ' AND ( collection:"etree" OR collection:"GratefulDead" ) ',
            'sorts'  => 'creator,date',
            'fields' => implode(',', $this->fields),
        ];

        $response = Http::accept('application/json')
            ->get('https://archive.org/services/search/v1/scrape', $params);

        $data = $response->json();

        foreach ((array)$data['items'] as $detail) {
            $identifier = $identifierRepository->findOneBy([
                'archiveIdentifier' => $detail['identifier'],
            ]);

            if (! $identifier) {
                $identifier = new Identifier();
                $entityManager->persist($identifier);
            }

            foreach (array_unique($detail['collection']) as $name) {
                $collection = $collectionRepository->findOneBy([
                    'name' => $name,
                ]);

                if (! $collection) {
                    $collection = new Collection();
                    $collection->setName($name);
                    $entityManager->persist($collection);
                }

                if (! $identifier->getCollections()->contains($collection)) {
                    $identifier->addCollection($collection);
                    $collection->addIdentifier($identifier);
                }
            }

            if (isset($detail['creator'])) {
                // Match creator by exact name in Creator entity
                $creator = $creatorRepository->findOneBy([
                    'name' => $detail['creator'],
                ]);

                // Creator not found;
                if (! $creator) {
                    $creator = new Creator();
                    $creator->setName($detail['creator']);
                    $entityManager->persist($creator);
                }

                // Match creator to artist by name
                $artist = $artistRepository->findOneBy([
                    'name' => $creator->getName(),
                ]);

                $creator->setArtist($artist);
                $identifier->setCreator($creator);
            }

            $identifier->setArchiveIdentifier($detail['identifier']);
            $source = $entityManager->getRepository(Source::class)
                ->findOneBy([
                    'archiveIdentifier' => $detail['identifier'],
                ]);
            $identifier->setSource($source);

            if (isset($detail['server'])) {
                $identifier->setServer($detail['server']);
            }
            if (isset($detail['date'])) {
                $identifier->setPerformanceDate(substr($detail['date'], 0, 10));
            }
            if (isset($detail['addeddate'])) {
                $identifier->setAddedAt(new \DateTime($detail['addeddate']));
            }
            if (isset($detail['title'])) {
                $identifier->setTitle($detail['title']);
            }
            if (isset($detail['description'])) {
                $identifier->setDescription($detail['description']);
            }
            if (isset($detail['uploader'])) {
                $identifier->setUploader($detail['uploader']);
            }
            if (isset($detail['venue'])) {
                $identifier->setVenue($detail['venue']);
            }
            if (isset($detail['coverage'])) {
                $identifier->setCoverage($detail['coverage']);
            }
            if (isset($detail['year'])) {
                $identifier->setYear($detail['year']);
            }
            if (isset($detail['notes'])) {
                $identifier->setNotes($detail['notes']);
            }
            if (isset($detail['taper'])) {
                $identifier->setTaper($detail['taper']);
            }
            if (isset($detail['lineage'])) {
                $identifier->setLineage($detail['lineage']);
            }
            if (isset($detail['source'])) {
                $identifier->setArchiveSource($detail['source']);
            }
            if (isset($detail['md5s'])) {
                $identifier->setMd5s($detail['md5s']);
            }

            $entityManager->flush();

            $this->saveFiles($entityManager, $identifier);

            $entityManager->clear();
        }
    }

    private function saveFiles(EntityManager $entityManager, Identifier $identifier)
    {
        $fileRepository = $entityManager->getRepository(File::class);
        $url = 'https://archive.org/compress/' . $identifier->getArchiveIdentifier() . '/formats=TEXT,METADATA';

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); // Must be set to true so that PHP follows any "Location:" header
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $a = curl_exec($ch); // $a will contain all headers

        $newUrl = curl_getinfo($ch, CURLINFO_EFFECTIVE_URL); // This is what you need, it will return you the last effective URL
        curl_close($ch);

        $newUrl = str_replace('zip_dir.php?path=/', '', $newUrl);
        $newUrl = str_replace('.zip&formats=TEXT,METADATA', '', $newUrl);

        $tempDir = sys_get_temp_dir() . '/files-' . uniqid();
        `rm -rf $tempDir`;
        @rmdir($tempDir);

        `mkdir $tempDir && cd $tempDir && wget -nH -A txt,ffp,md5,st5,cfv -r --cut-dirs=5 $newUrl`;

        $dir = new \DirectoryIterator($tempDir);
        foreach ($dir as $fileinfo) {
            if (! $fileinfo->isDot()) {
                $file = $fileRepository->findOneBy([
                    'identifier' => $identifier,
                    'name' => $fileinfo->getFilename(),
                ]);

                if (! $file) {
                    $file = new File();
                    $file->setIdentifier($identifier);

                    $entityManager->persist($file);
                }

                $file->setName($fileinfo->getFilename());
                $body = file_get_contents($tempDir . '/' . $fileinfo->getFilename());
                if ($body) {
                    $file->setBody($body);
                }

                try {
                    $entityManager->flush();
                } catch (\Exception $e) {
                    `rm -rf $tempDir`;
                    @rmdir($tempDir);
                    throw $e;
                }
            }
        }

        `rm -rf $tempDir`;
        @rmdir($tempDir);
    }
}
