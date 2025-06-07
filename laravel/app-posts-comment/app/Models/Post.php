<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
class Post extends Model
{
    use Notifiable, HasFactory,SoftDeletes;
    protected $fillable = [
        'title',
        'body',
        'user_id',
        'user'
    ];
    function user() {
        return $this->belongsTo(User::class);
    }
    function comments() {
        return $this->hasMany(Comment::class);
    }
}
