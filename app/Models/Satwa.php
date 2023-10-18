<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Satwa extends Model
{
    use HasFactory;

    protected $table = "tb_satwa";
    protected $primaryKey = 'id';
    protected $guarded = [];
    protected $dates = ['tanggal_lahir'];

    public function jenis_satwa(): BelongsTo
    {
        return $this->belongsTo(JenisSatwa::class);
    }

    public function kategori_satwa(): BelongsTo
    {
        return $this->belongsTo(KategoriSatwa::class);
    }

    public function rekam_medis(): HasMany
    {
        return $this->hasMany(RekamMedis::class);
    }
}
