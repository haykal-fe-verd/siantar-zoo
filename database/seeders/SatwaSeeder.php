<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class SatwaSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            [
                'jenis_satwa_id' => 1,
                'kategori_satwa_id' => 1,
                'nama' => 'Singa',
                'jenis_kelamin' => 'jantan',
                'ras' => 'African Lion',
                'berat' => '200',
                'tanggal_lahir' => '2015-05-10',
                'bangsa' => 'Felidae',
                'habitat' => 'Savanna',
                'makanan_favorit' => 'Daging',
                'ciri_khas' => 'Bulu berwarna kecoklatan, janggut lebat, dan cakar tajam.',
                'foto' => 'singa.jpg',
            ],
            [
                'jenis_satwa_id' => 2,
                'kategori_satwa_id' => 1,
                'nama' => 'Harimau Bengal',
                'jenis_kelamin' => 'betina',
                'ras' => 'Panthera tigris tigris',
                'berat' => '150',
                'tanggal_lahir' => '2018-03-20',
                'bangsa' => 'Felidae',
                'habitat' => 'Hutan Hujan',
                'makanan_favorit' => 'Rusa, babi liar',
                'ciri_khas' => 'Bulu belang, tubuh besar, dan gigi taring panjang.',
                'foto' => 'harimau.jpg',
            ],
            // Tambahkan data dummy lainnya sesuai kebutuhan.
        ];

        DB::table('tb_satwa')->insert($data);
    }
}
