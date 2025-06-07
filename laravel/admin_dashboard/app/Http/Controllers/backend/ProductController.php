<?php

namespace App\Http\Controllers\backend;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\traits\media;
class ProductController extends Controller
{
    use media;
    public function index(){

        $products  = DB::table('products')->select('*')->get();
        return view('backend.products.index',compact('products'));
    }
    public function create(){
        $brands = DB::table('brands')->select('*')->get();
        $subcategories = DB::table('subcategories')->select('id',"name_en")->get();
        return view('backend.products.create',compact('brands','subcategories'));
    }
    public function edit($id){
        $brands = DB::table('brands')->select('*')->get();
        $subcategories = DB::table('subcategories')->select('id',"name_en")->get();
        $product = DB::table("products")->where("id",$id)->first();
        return view('backend.products.edit',compact("product","brands","subcategories"));
    }
    public function update(UpdateProductRequest $request,$id ){

        
        
        $request->validate($rules);
        $data = $request->except('_token','image','page',"_method");
        // dd($data);
        if($request->has('image')){
            $oldphotoname = DB::table("products")->select("image")->where("id",$id)->first()->image;
            $photopath = public_path("/dist/img/products/");
            $this->deletePhoto($photopath.$oldphotoname);
            $photoname = $this->uploadPhoto($request->image,"products");

            $data['image'] = $photoname;
        }
        DB::table("products")->where("id",$id)->update($data);
        return $this->redirectAcordingToRequest($request);
        
    }
    public function destroy($id){
        $oldphotoname = DB::table("products")->select("image")->where("id",$id)->first()->image;
        $photopath = public_path("/dist/img/products/");
        // dd($oldphotoname);
        $this->deletePhoto($photopath.$oldphotoname);

        DB::table("products")->where("id",$id)->delete();
        return redirect()->back()->with("success", "Successfully Opteration ");
    }
    public function store(StoreProductRequest $request){
       
        
        $photoname = $this->uploadPhoto($request->image,"products");
        $data = $request->except('_token','image','page');
        $data['image'] = $photoname;
        
        DB::table('products')->insert($data);
        return $this->redirectAcordingToRequest($request);
    }

    public function redirectAcordingToRequest($request){
        if($request->page=="back"){
            return redirect()->back()->with("success", "Successfully Opteration ");
        }else
        {
            return redirect()->route('products.index')->with("success", "Successfully Opteration ");
        }

    }
}

