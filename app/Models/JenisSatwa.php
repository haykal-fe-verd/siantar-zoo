<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class JenisSatwa extends Model
{
    use HasFactory;

    protected $table = "tb_jenis_satwa";
    protected $primaryKey = 'id';
    protected $guarded = [];

    public function satwa(): HasMany
    {
        return $this->hasMany(Satwa::class);
    }
}
