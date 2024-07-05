<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TanentDevices extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        "sdk_response" => "array"
    ];
}
