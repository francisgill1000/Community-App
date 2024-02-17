<?php

namespace App\Models\Community;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    public static $member_types = [
        'Primary',
        'Family Member',
        'Relative',
        'Maid',
        'Visitor',
    ];
}
