<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Schema::table('posts', function (Blueprint $table) {
        //  $table->foreignId('user_id')->refrences('id')->on('users')->cascadeOnDelete();

        
        // });

        if (!Schema::hasColumn('posts', 'user_id')) {
            Schema::table('posts', function (Blueprint $table) {
                $table->unsignedBigInteger('user_id')->nullable()->default(null);
                $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            //
        });
    }
};
