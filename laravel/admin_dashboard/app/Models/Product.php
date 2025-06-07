<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Product extends Model
{
         use HasFactory;
         protected $guarded = [];
        // protected $fillable = [
        //     'name_en',
        //     'name_ar',
        //     'price',
        //     'code',
        //     'quantity',
        //     'desc_en',
        //     'desc_ar',
        //     'brand_id',
        //     'subcategory_id',
        //     'image',
        //     'status',
        // ];
}
