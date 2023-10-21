<?php

namespace Database\Seeders;

use App\Models\Satwa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class SatwaSeeder extends Seeder
{
    public function run(): void
    {
        for ($i = 1; $i <= 20; $i++) {
            Satwa::create([
                'jenis_satwa_id' => fake()->numberBetween(1, 3),
                'kategori_satwa_id' => fake()->numberBetween(1, 3),
                'nama' => 'Nama Satwa Ke-' . $i,
                'jenis_kelamin' => fake()->randomElement(['jantan', 'betina']),
                'ras' => 'Ras Satwa Yang Ke-' . $i,
                'berat' => fake()->numberBetween(50, 200),
                'tanggal_lahir' => now(),
                'bangsa' => 'Bangsa Satwa Ke-' . $i,
                'habitat' => fake()->randomElement(['Savanna', 'Air', 'Salju']),
                'makanan_favorit' => fake()->randomElement(['rumput', 'daging']),
                'ciri_khas' => 'Bulu berwarna kecoklatan, janggut lebat, dan cakar tajam.',
                'foto' => 'foto-satwa/mC2E7nKpVqOzTYbjMGWsrqXOIdWgYRintOYMpIug.jpg',
            ]);
        }
    }
}
