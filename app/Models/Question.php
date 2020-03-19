<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $guarded = [];

    public function getRouteKeyName(){
        return 'slug';
    }

    public function user(){
        $this->belongsTo('App\User');
    }

    public function replies(){
        return $this->hasMany('App\Models\Reply');
    }

    public function category(){
        return $this->belongsTo('App\Models\Category');
    }
}
