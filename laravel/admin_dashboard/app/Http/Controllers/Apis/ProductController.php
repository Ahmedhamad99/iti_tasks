<?php

namespace App\Http\Controllers\Apis;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\traits\media;
use App\Http\traits\ApiTrait;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use  App\Models\Product;
use  App\Models\Brand;
use  App\Models\Subcategory;
class ProductController extends Controller
{
    use media,ApiTrait;
    public function index() {
        $products = Product::all(); 
        return $this->Data(compact("products"),"ALL PRODUCTS");
     }
    public function create(){
        $brands = Brand::all();
        $subcategory = Subcategory::select("id","name_en")->get();
        return $this->Data(compact("brands","subcategory"));
    }
    public function edit($id) {
        // if($id){

        // }
        $product = Product::findOrFail($id);
        $brands = Brand::all();

        $subcategory = Subcategory::select("id","name_en")->get();

        // if($product){

        // }
        return $this->Data(compact("product","brands","subcategory"));
    }
    public function store(StoreProductRequest $request){
       
        
        $photoname = $this->uploadPhoto($request->image,"products");
        $data = $request->except('_token','image','page');
        $data['image'] = $photoname;
        $product = Product::create($data);        
        return $this->SuccessMessage("Product created successfully",201);
    }
    public function update(UpdateProductRequest $request,$id ){

        
        // dd($request);   
        // $request->validate($rules);
        $data = $request->except('_token','image','page',"_method");
        // dd($data);
        if($request->has('image')){
            $oldphotoname = DB::table("products")->select("image")->where("id",$id)->first()->image;
            $photopath = public_path("/dist/img/products/");
            $this->deletePhoto($photopath.$oldphotoname);
            $photoname = $this->uploadPhoto($request->image,"products");

            $data['image'] = $photoname;
        }
        Product::where("id",$id)->update($data);
        return $this->SuccessMessage("update success",201);
        
    }
    public function destroy($id){
     $product = Product::findOrFail($id);
     if($product){
        $oldphotoname = Product::find($id)->image;
        $photopath = public_path("/dist/img/products/");
        $this->deletePhoto($photopath.$oldphotoname);

        Product::where("id",$id)->delete();
        return $this->SuccessMessage("delete success",201);
     }
     else{
        return $this->ErrorMessage("product not found",404);

     }
    }

}
