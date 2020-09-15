<?php

namespace App\Model;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Custommer extends Authenticatable
{
    use Notifiable;
    protected $fillable = [
        'nama', 'email', 'password', 'gender', 'status', 'address'
    ];
    protected $hidden = [
        'password'
    ];
}
