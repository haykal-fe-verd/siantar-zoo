<?php

namespace Database\Seeders;

use App\Models\Obat;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ObatSeeder extends Seeder
{
    public function run(): void
    {

        for ($i = 1; $i <= 100; $i++) {
            Obat::create([
                'nama_obat' => "Nama Obat Ke - " . $i,
                'stok' => fake()->randomNumber(5, false)
            ]);
        }
    }
}
