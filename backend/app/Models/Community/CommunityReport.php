<?php

namespace App\Models\Community;

use App\Models\AttendanceLog;
use App\Models\Employee;
use App\Models\Visitor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommunityReport extends Model
{
    use HasFactory;


    public function in_log()
    {
        return $this->belongsTo(AttendanceLog::class, "in_id")->with("device");
    }

    public function out_log()
    {
        return $this->belongsTo(AttendanceLog::class, "out_id")->with("device");
    }

    public function visitor()
    {
        return $this->belongsTo(Visitor::class, 'user_id')->where("visitor_type", "visitor")->with("tanent.room");
    }

    public function delivery()
    {
        return $this->belongsTo(Visitor::class, 'user_id')->where("visitor_type", "delivery")->with("tanent");
    }

    public function contractor()
    {
        return $this->belongsTo(Visitor::class, 'user_id')->where("visitor_type", "contractor")->with("tanent");
    }

    public function tanent()
    {
        return $this->belongsTo(Tanent::class, "user_id", "id")->where("member_type", "Primary")->with("room");
    }

    public function family_member()
    {
        return $this->belongsTo(Tanent::class, "user_id")->where("member_type", "Family Member")->with("room");
    }

    public function owner()
    {
        return $this->belongsTo(Tanent::class,   "user_id", "id")->where("member_type", "Owner")->with("room");
    }

    public function maid()
    {
        return $this->belongsTo(Tanent::class,     "user_id", "id")->where("member_type", "Maid")->with("room");
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class, "user_id", "id");
    }
}
