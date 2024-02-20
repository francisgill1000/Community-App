<?php

namespace App\Models\Community;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tanent extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $appends = [
        "profile_picture_name",
    ];

    protected $casts = [
        "floor_id" => "integer",
        "room_id" => "integer",
    ];

    /**
     * Get the user that owns the Room
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    /**
     * Get all of the members for the Tanent
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function members()
    {
        return $this->hasMany(Tanent::class,"parent_id");
    }

    public function tanent()
    {
        return $this->belongsTo(Tanent::class,"parent_id");
    }
    public function vehicles()
    {
        return $this->hasMany(Vehicle::class)->with("parking");
    }

    public function floor()
    {
        return $this->belongsTo(Floor::class);
    }

    public function room()
    {
        return $this->belongsTo(Room::class)->with("room_category:id,name");
    }

    public function getProfilePictureNameAttribute()
    {
       return explode("community/profile_picture/" , $this->profile_picture)[1] ?? "";
    }

    public function getProfilePictureAttribute($value)
    {
        if (!$value) return null;
        return asset('community/profile_picture/' . $value);
    }
    

    public static function ProcessDocument($file, $path)
    {
        $ext = $file->getClientOriginalExtension();
        $fileName = time() . '.' . $ext;
        $file->move(public_path($path), $fileName);
        return asset($path . '/' . $fileName);
    }

    public function processImage($folder): string
    {
        $base64Image = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', request('profile_picture')));
        $imageName = time() . ".png";
        $publicDirectory = public_path($folder);
        if (!file_exists($publicDirectory)) {
            mkdir($publicDirectory);
        }
        file_put_contents($publicDirectory . '/' . $imageName, $base64Image);
        return $imageName;
    }
}
