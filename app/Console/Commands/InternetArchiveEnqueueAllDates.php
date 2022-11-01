<?php

namespace App\Console\Commands;

use App\Jobs\InternetArchiveIndexDate;
use DateInterval;
use DateTime;
use Illuminate\Console\Command;

class InternetArchiveEnqueueAllDates extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'internet-archive:enqueue:all';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Enqueue all dates to be indexed.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $startAt = new DateTime('2002-09-06');
        $now = new DateTime();

        while ($startAt < $now) {
            InternetArchiveIndexDate::dispatch($startAt->format('Y-m-d'))->onQueue('default');

            echo "enqueued " . $startAt->format('Y-m-d') . "\n";
            $startAt->add(new DateInterval('P1D'));
        }

        return self::SUCCESS;
    }
}
