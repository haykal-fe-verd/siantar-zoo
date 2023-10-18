<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RekamMedis extends Model
{
    use HasFactory;

    protected $table = "tb_rekam_medis";
    protected $primaryKey = 'id';
    protected $guarded = [];
    protected $dates = ['tanggal_rekam_medis'];
}
