<?php

namespace App\Models\Community;

use App\Models\AttendanceLog;
use App\Models\Device;
use App\Models\Timezone;
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


    public function mappings()
    {
        return $this->hasMany(TanentTimezoneMapping::class)->with(["device", "timezone"]);
    }

    public function timezone()
    {
        return $this->hasManyThrough(Timezone::class, TanentTimezoneMapping::class, 'tanent_id', 'timezone_id', 'id', 'timezone_id');
    }

    public function devices()
    {
        return $this->hasManyThrough(Device::class, TanentTimezoneMapping::class, 'tanent_id', 'device_id', 'id', 'device_id');
    }

    public function members()
    {
        return $this->hasMany(Tanent::class, "parent_id")
            ->when(request()->filled("gender") && request("gender") != "All", fn($q) => $q->where("gender", request("gender")))
            ->whereIn("member_type", ["Family Member", "Maid", "Owner"]);
    }

    public function members_only()
    {
        return $this->hasMany(Tanent::class, "parent_id")
            ->when(request()->filled("gender") && request("gender") != "All", fn($q) => $q->where("gender", request("gender")))
            ->where("member_type", "Family Member");
    }

    public function maids()
    {
        return $this->hasManyThrough(Tanent::class, MaidRelationTenant::class, 'tanent_id', 'id', 'id', 'maid_id');
    }

    public function cards()
    {
        return $this->hasMany(Tanent::class, "parent_id")->where("member_type", "card");
    }

    public function get_last_member()
    {
        return $this->hasOne(Tanent::class, "parent_id")->latest();
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
        return $this->hasMany(AttendanceLog::class, "UserID", "system_user_id")
            ->where("company_id", request("company_id"))
            ->orderBy("LogTime", "desc")
            ->with("device")
            ->take(10);
    }
    public function tanent_for_maid()
    {
        return $this->hasOne(MaidRelationTenant::class, "maid_id")->orderBy("id", "desc")->with([
            "tanent" => fn($q) => $q->with("room")
        ]);
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
