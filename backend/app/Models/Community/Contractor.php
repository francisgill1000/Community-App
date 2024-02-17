<?php

namespace App\Models\Community;

use App\Models\Company;
use App\Models\Device;
use App\Models\Employee;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contractor extends Model
{
    use HasFactory;

    protected $table = "company_branches";


    protected $guarded = [];

    protected $casts = [
        'expiry' => 'date:Y/m/d',
        'created_date' => 'datetime:d-M-Y',

    ];

    protected $appends = [];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function employees()
    {
        return $this->hasMany(Employee::class, "branch_id", "id");
    }
    
    public function devices()
    {
        return $this->hasMany(Device::class, "branch_id", "id");
    }

    public function getLogoAttribute($value)
    {
        if (!$value) {
            return null;
        }
        return asset('upload/' . $value);
    }
}
