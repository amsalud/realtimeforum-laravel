<?php

namespace App\Http\Controllers;

use App\Events\LikeEvent;
use App\Models\Like;
use App\Models\Reply;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LikeController extends Controller
{
    public function __construct()
    {
        $this->middleware('JWT');
    }

    public function likeReply(Reply $reply){
        $like = $reply->like()->create();

        broadcast(new LikeEvent($like, 1))->toOthers();
        return response($like, Response::HTTP_CREATED);
    }   
    
    public function unlikeReply(Reply $reply){
        $like = $reply->like()->where('user_id',auth()->id())->first();
        $likeData = $like->toArray();
        $like->delete();
        broadcast(new LikeEvent($likeData, 0))->toOthers();
    }
}
