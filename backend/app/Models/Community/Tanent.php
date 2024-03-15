<?php

namespace App\Models\Community;

use App\Models\AttendanceLog;
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
        return $this->hasMany(Tanent::class, "parent_id")->whereIn("member_type", ["Family Member", "Maid", "Owner"]);
    }

    public function members_only()
    {
        return $this->hasMany(Tanent::class, "parent_id")->where("member_type", "Family Member");
    }

    public function maids()
    {
        return $this->hasManyThrough(Tanent::class, MaidRelationTenant::class, 'tanent_id', 'id', 'id', 'maid_id');
    }

    public function cards()
    {
        return $this->hasMany(Tanent::class, "parent_id")->where("member_type", "card");
    }

    public function tanent()
    {
        return $this->belongsTo(Tanent::class, "parent_id");
    }

    public function parent_member()
    {
        return $this->belongsTo(Tanent::class, "parent_id");
    }
    public function attendance_logs()
    {
        return $this->hasMany(AttendanceLog::class, "UserID", "system_user_id")->orderBy("LogTime", "asc")->with("device")->take(10);
    }
    public function tanent_for_maid()
    {
        return $this->hasOne(MaidRelationTenant::class, "maid_id")->orderBy("id", "desc")->with("tanent");
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
        return explode("community/profile_picture/", $this->profile_picture)[1] ?? "";
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
}
