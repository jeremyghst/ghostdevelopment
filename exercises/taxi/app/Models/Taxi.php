<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Taxi extends Model
{
    use HasFactory;
    protected $table = 'taxi';
    public $timestamps = false;

    public static function getAll(){
        $taxis = Taxi::get();
        return $taxis;
    }
}
