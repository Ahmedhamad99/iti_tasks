<?php

namespace Database\Seeders;
use Faker\Factory as Faker;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    
    // public function run(): void
    // {
    //     // \App\Models\User::factory(10)->create();
    //     \App\Models\User::factory(10)->create();

    //     $this->command->info('Users inserted!');

    //     // User::factory()->create([
    //     //     'name' => 'Test User',
    //     //     'email' => 'test@example.com',
    //     // ]);
    // }

    public function run(): void
    {
        $faker = Faker::create();

        \App\Models\User::factory(10)->create();

        // Example of using Faker
        \App\Models\User::create([
            // 'name' => $faker->name, // Ensure 'name' is being set correctly
            'email' => $faker->unique()->safeEmail(),
            'password' => bcrypt('password'),
            'phone' => $faker->phoneNumber(),
            'credit_card' => $faker->creditCardNumber(),
            'first_name' => $faker->firstName(),
            'last_name' => $faker->lastName(),
            'image' => $faker->imageUrl(),
            'age' => $faker->numberBetween(18, 99),
            'status' => $faker->boolean(),
            'gender' => $faker->randomElement(['male', 'female']),
            'code' => $faker->unique()->word(),
            'email_verified_at' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $this->command->info('✅ Users inserted!');
    }
}
