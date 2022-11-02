<?php

namespace App\Console\Commands\InternetArchive;

use App\Jobs\InternetArchive\IndexDate;
use DateInterval;
use DateTime;
use Illuminate\Console\Command;

class EnqueueDatesSince extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'internet-archive:enqueue:since {date}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Enqueue all dates since a given date to be indexed.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $startAt = new DateTime($this->argument('date'));
        $now = new DateTime();

        while ($startAt < $now) {
            IndexDate::dispatch($startAt->format('Y-m-d'))->onQueue('default');

            echo "enqueued " . $startAt->format('Y-m-d') . "\n";
            $startAt->add(new DateInterval('P1D'));
        }

        return self::SUCCESS;
    }
}
