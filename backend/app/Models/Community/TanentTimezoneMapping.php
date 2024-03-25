<?php

namespace App\Models\Community;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TanentTimezoneMapping extends Model
{
    use HasFactory;

    protected $table = "tanent_timezone_mapping";

    protected $guarded = [];
}
