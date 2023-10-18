<?php

namespace Database\Seeders;

use App\Models\JenisSatwa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JenisSatwaSeeder extends Seeder
{
    public function run(): void
    {
        $jenisSatwa = [
            'Mamalia',
            'Reptil',
            'Amfibi',
            'Serangga',
            'Ikan',
            'Unggas'
        ];

        foreach ($jenisSatwa as $jenis) {
            JenisSatwa::create([
                'nama_jenis_satwa' => $jenis,
            ]);
        }
    }
}
