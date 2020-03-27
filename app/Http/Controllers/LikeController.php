<?php

namespace App\Http\Controllers;

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
        return response($like, Response::HTTP_CREATED);
    }   
    
    public function unlikeReply(Reply $reply){
        $reply->like()->where('user_id',auth()->id())->first()->delete();
    }
}
