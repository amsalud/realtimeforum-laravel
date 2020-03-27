<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function getNotifications(){
        return [
            'read' => auth()->user()->readNotifications()->get(),
            'unread' => auth()->user()->unreadNotifications()->get()
        ];
    }
}
