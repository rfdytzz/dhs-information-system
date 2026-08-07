<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'DHS Admin',
            "email" => 'admin@dhsis.sch.id',
            "phone_number" => "62-857-7559-0136",
            "role" => "admin",
            "writer" => true,
            "active" => true,
            "password" => "admindhsis"
        ]);
    }
}
