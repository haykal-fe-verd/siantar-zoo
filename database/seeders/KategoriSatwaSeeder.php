<?php

namespace Database\Seeders;

use App\Models\KategoriSatwa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KategoriSatwaSeeder extends Seeder
{
    public function run(): void
    {
        $kategoriSatwa = [
            'Herbivora',
            'Karvnivora',
            'Omnivora',
            'Akuatik',
            'Terrestial',
            'Reptilia',
            'Amphibia',
            'Invertebrata',
            'Vertebrata'
        ];

        foreach ($kategoriSatwa as $kategori) {
            KategoriSatwa::create([
                'nama_kategori_satwa' => $kategori,
            ]);
        }
    }
}
