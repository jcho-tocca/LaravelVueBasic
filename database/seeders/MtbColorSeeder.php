<?php

namespace Database\Seeders;

use App\Models\MtbColor;
use Illuminate\Database\Seeder;

class MtbColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            '青',
            '赤',
            '緑'
        ];

        foreach ($data as $value) {
            MtbColor::create([
                'name' => $value
            ]);
        }
    }
}
