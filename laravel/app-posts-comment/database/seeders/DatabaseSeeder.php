<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
       // Create a Faker instance
       $faker = Faker::create();

       // insert  users
       $users = [];
       for ($i = 0; $i < 50; $i++) {  
           $users[] = [
               'name' => $faker->name,
               'email' => $faker->unique()->safeEmail,
               'password' => Hash::make('password'),
               'created_at' => now(),
               'updated_at' => now(),
           ];
       }
       DB::table('users')->insert($users);

       // insert posts
       $posts = [];
       for ($i = 0; $i < 50; $i++) {  
           $posts[] = [
               'uid' => $faker->uuid,
               'title' => $faker->sentence,
               'content' => $faker->paragraph,
               'created_at' => now(),
               'updated_at' => now(),
           ];
       }
       DB::table('posts')->insert($posts);

    
    }
}
