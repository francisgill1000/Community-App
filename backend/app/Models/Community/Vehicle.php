<?php

namespace App\Models\Community;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * Get the parking that owns the Vehicle
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function parking()
    {
        return $this->belongsTo(Parking::class)->withDefault([
            "category" => "---",
            "parking_number" => "---",
            "floor" => [
                "floor_number" => "---"
            ]
        ])->with("floor");
    }

    /**
     * Get the user that owns the Vehicle
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function tanent()
    {
        return $this->belongsTo(Tanent::class)->withDefault([
            "full_name" => "---",
            "phone_number" => "---",
            "email" => "---",
            "start_date" => "---",
            "end_date" => "---",
            "status" => "---",
            "room" => [
                "room_number" => "---"
            ]
        ])->with("room");
    }
}
