<?php

namespace App\Jobs;

use Doctrine\ORM\EntityManager;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class QueueAllInternetArchiveDates implements
    ShouldBeUnique,
    ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(
        private EntityManager $entityManager
    ) {
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $startAt = new \DateTime('2002-09-06');
        $now = new \DateTime();

        while ($startAt < $now) {
            FetchInternetArchiveDate::dispatch($startAt);
            $startAt->add(new \DateInterval('P1D'));
        }
    }
}
