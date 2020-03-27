<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $guarded = [];

    protected static function boot(){
        parent::boot();

        static::creating(function($like){
            $like->user_id = auth()->id();
        });
    }
}
