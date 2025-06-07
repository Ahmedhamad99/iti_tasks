@extends("backend.layouts.parent")

@section("title","Edit Product")


@section("content")
   <div class="row">
    <div class="col-12">
        @include('backend.includes.message')
 
    </div>
    <div class="container-fluid col-12">
        <form action="{{route("products.update",$product->id)}}" method="post" enctype="multipart/form-data">
            @csrf
            @method("PUT")
            <div class="row g-3">
                <div class="col-md-6">
                    <label for="name_en" class="form-label">Name (EN)</label>
                    <input type="text" name="name_en" class="form-control" value="{{$product->name_en}}" required>
                    @error("name_en")
                        <div class="alert alert-danger">
                            {{$message}}
                        </div>
                    @enderror
                </div>
    
        
                <div class="col-md-6">
                    <label for="name_ar" class="form-label">Name (AR)</label>
                    <input type="text" name="name_ar" value="{{$product->name_ar}}" class="form-control" required>
                    @error("name_ar")
                    <div class="alert alert-danger">
                        {{$message}}
                    </div>
                @enderror
                </div>
        
                <div class="col-md-6">
                    <label for="price" class="form-label">Price</label>
                    <input type="number" step="0.01" name="price" value="{{$product->price}}" class="form-control" required>
                    @error("price")
                    <div class="alert alert-danger">
                        {{$message}}
                    </div>
                @enderror 
                </div>
        
                <div class="col-md-6">
                    <label for="code" class="form-label">Product Code</label>
                    <input type="text" name="code" class="form-control" value="{{$product->code}}" required>
                    @error("code")
                    <div class="alert alert-danger">
                        {{$message}}
                    </div>
                @enderror
                </div>
        
                <div class="col-md-6">
                    <label for="image" class="form-label">Image</label>
                    <input type="file" name="image" class="form-control"  accept="image/*">
                    @error("image")
                    <div class="alert alert-danger">
                        {{$message}}
                    </div>
                @enderror
                </div>
                <div class="col-md-6">
                    <img src="{{url('dist/img/products/'.$product->image)}}" alt="{{$product->name_en}}" class="w-50">
                </div>
        
                <div class="col-md-6">
                    <label for="quantity" class="form-label">Quantity</label>
                    <input type="number" name="quantity" value="{{$product->quantity}}" class="form-control" required>
                    @error("quantity")
                    <div class="alert alert-danger">
                        {{$message}}
                    </div>
                @enderror
                </div>
        
                <div class="col-md-12">
                    <label for="desc_en" class="form-label">Description (EN)</label>
                    <textarea name="desc_en" class="form-control"  rows="3" required>{{$product->desc_en}}</textarea>
                    @error("desc_en")
                    <div class="alert alert-danger">
                        {{$message}}
                    </div>
                @enderror
                </div>
        
                <div class="col-md-12">
                    <label for="desc_ar" class="form-label">Description (AR)</label>
                    <textarea name="desc_ar" class="form-control"  rows="3" required>{{$product->desc_ar}}</textarea>
                    @error("desc_ar")
                    <div class="alert alert-danger">
                        {{$message}}
                    </div>
                @enderror
                </div>
        
                <div class="col-md-6">
                    <label for="status" class="form-label">Status</label>
                    <select name="status" class="form-select" required>
                        <option {{$product->status == 1 ? "selected":""}} value="1">Active</option>
                        <option {{$product->status == 0 ? "selected":""}} value="0">Inactive</option>
                    </select>
                </div>
        
                <div class="col-md-6">
                    <label for="subcategory_id" class="form-label">Subcategory</label>
                    <select name="subcategory_id" class="form-select" required>
                        @foreach($subcategories as $subcategory)
                            <option {{$product->subcategory_id == $subcategory->id ? "selected":""}} value="{{$subcategory->id}}">{{ $subcategory->name_en }}</option>
                        @endforeach
                    </select>
                    
                </div>
        
                <div class="col-md-6">
                    <label for="brand_id" class="form-label">Brand</label>
                    <select name="brand_id" class="form-select" required>
                        @foreach($brands as $brand)
                        <option {{$product->brand_id == $brand->id ? "selected":""}} value={{$brand->id}} >{{ $brand->name_en }}</option>
                    @endforeach
                    </select>
                </div>
        
               
                    <div class="col-12 mt-3">
                        <button type="submit" class="btn btn-primary" name="page" value="index">Update</button>
                    </div>
                    <div class="col-12 mt-3">
                        <button type="submit" class="btn btn-primary" name="page" value="back">Update & Return</button>
                    </div>
            </div>
        </form>
        
       </div>
    
   </div>
@endsection
