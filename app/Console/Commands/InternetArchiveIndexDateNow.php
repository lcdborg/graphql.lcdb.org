<?php

namespace App\Console\Commands;

use App\Jobs\InternetArchiveIndexDate;
use Illuminate\Console\Command;

class InternetArchiveIndexDateNow extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'internet-archive:index:now {date}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        InternetArchiveIndexDate::dispatchSync($this->argument('date'));

        return Command::SUCCESS;
    }
}
