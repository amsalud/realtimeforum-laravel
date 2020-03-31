<?php

namespace App\Listeners;

use App\Events\QuestionEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class QuestionEventListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  QuestionEvent  $event
     * @return void
     */
    public function handle(QuestionEvent $event)
    {
        //
    }
}
