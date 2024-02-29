<?php

namespace App\Models\Community;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MaidRelationTenant extends Model
{
    use HasFactory;

    protected $table = "maid_relation_tanent";

    /**
     * Get the user that owns the MaidRelationTenant
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function tanent()
    {
        return $this->belongsTo(Tanent::class);
    }
}
