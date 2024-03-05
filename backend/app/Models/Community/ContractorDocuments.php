<?php

namespace App\Models\Community;



use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContractorDocuments extends Model
{
    use HasFactory;
    protected $table = 'contractors_documents';
    protected $guarded = [];

    // public function getAttachmentAttribute($value)
    // {
    //     if (!$value) {
    //         return null;
    //     }
    //     return asset('documents/' . $this->employee_id . "/" . $value);
    // }




    protected $casts = [
        'created_at' => 'datetime:d-M-y',
    ];

    protected static function boot()
    {
        parent::boot();

        // Order by name ASC
        static::addGlobalScope('order', function (Builder $builder) {
            $builder->orderBy('id', 'desc');
        });
    }
}
