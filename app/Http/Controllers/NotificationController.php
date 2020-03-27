<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index(){
        return [
            'read' => auth()->user()->readNotifications()->get(),
            'unread' => auth()->user()->unreadNotifications()->get()
        ];
    }

    public function markAsRead(Request $request){
       return auth()->user()->notifications->where('id', $request->id)->markAsRead();
    }
}
