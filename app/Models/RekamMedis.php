<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RekamMedis extends Model
{
    use HasFactory;

    protected $table = "tb_rekam_medis";
    protected $primaryKey = 'id';
    protected $guarded = [];
    protected $dates = ['tanggal_rekam_medis'];

    public function satwa(): BelongsTo
    {
        return $this->belongsTo(Satwa::class);
    }

    public function obat(): BelongsTo
    {
        return $this->belongsTo(Obat::class);
    }
}
