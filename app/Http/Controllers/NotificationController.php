<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use Illuminate\Http\Request;


class NotificationController extends Controller
{
    public function index(){
        return [
            'read' => NotificationResource::collection(auth()->user()->readNotifications()->get()),
            'unread' => NotificationResource::collection(auth()->user()->unreadNotifications()->get())
        ];
    }

    public function markAsRead(Request $request){
       return auth()->user()->notifications->where('id', $request->id)->markAsRead();
    }
}
