<?php

namespace App\Models\Community;

use App\Models\Device;
use App\Models\Timezone;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TanentTimezoneMapping extends Model
{
    use HasFactory;

    protected $table = "tanent_timezone_mapping";

    protected $guarded = [];


    public function floor()
    {
        return $this->belongsTo(Floor::class);
    }

    public function tanent()
    {
        return $this->belongsTo(Tanent::class);
    }

    public function device()
    {
        return $this->belongsTo(Device::class, "device_id","device_id");
    }

    public function timezone()
    {
        return $this->belongsTo(Timezone::class, "timezone_id","timezone_id");
    }
}
