<?php

namespace App\Console\Commands;

use App\Jobs\InternetArchiveIndexDate;
use Doctrine\ORM\EntityManager;
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
    public function handle(EntityManager $entityManager)
    {
        $job = new InternetArchiveIndexDate($this->argument('date'));

        $job->handle($entityManager);

        return Command::SUCCESS;
    }
}
