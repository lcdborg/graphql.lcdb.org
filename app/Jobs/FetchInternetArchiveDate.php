<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class FetchInternetArchiveDate implements
    ShouldBeUnique,
    ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(private \DateTime $dateTime)
    {
        parent::__construct();
    }

    public function uniqueId() {
        $this->dateTime->format('Y-m-d');
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        die('queue run ' . $this->uniqueId());
    }
}
