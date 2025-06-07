@extends("backend.layouts.parent")

@section("title","Create Product")
@section("content")
   <div class="container-fluid">
   <div class="col-12 ">
    @if ($errors->any())

    <div class="alert alert-danger">

        <ul>

            @foreach ($errors->all() as $error)

                <li>{{ $error }}</li>

            @endforeach

        </ul>

    </div>

@endif
@include('backend.includes.message')

   </div>
    <form action="{{route('products.store')}}" method="POST" enctype="multipart/form-data">
        @csrf
    
        <div class="row g-3">
            <div class="col-md-6">
                <label for="name_en" class="form-label">Name (EN)</label>
                <input type="text" name="name_en" class="form-control" required value="{{old('name_en')}}">
            </div>
    
            <div class="col-md-6">
                <label for="name_ar" class="form-label">Name (AR)</label>
                <input type="text" name="name_ar" class="form-control" value="{{old('name_ar')}}" required>
            </div>
    
            <div class="col-md-6">
                <label for="price" class="form-label">Price</label>
                <input type="number" step="0.01" name="price" class="form-control" required value="{{old('price')}}">
            </div>
    
            <div class="col-md-6">
                <label for="code" class="form-label">Product Code</label>
                <input type="text" name="code" class="form-control" required value="{{old('code')}}">
            </div>
    
            <div class="col-md-6">
                <label for="image" class="form-label">Image</label>
                <input type="file" name="image" class="form-control" accept="image/*">
            </div>
    
            <div class="col-md-6">
                <label for="quantity" class="form-label">Quantity</label>
                <input type="number" name="quantity" value="{{old('quantity')}}" class="form-control" required>
            </div>
    
            <div class="col-md-12">
                <label for="desc_en" class="form-label">Description (EN)</label>
                <textarea name="desc_en" class="form-control" rows="3"  required>{{old('desc_en')}}</textarea>
            </div>
    
            <div class="col-md-12">
                <label for="desc_ar" class="form-label">Description (AR)</label>
                <textarea name="desc_ar" class="form-control" rows="3" required>{{old('name_ar')}}</textarea>
            </div>
    
            <div class="col-md-6">
                <label for="status" class="form-label">Status</label>
                <select name="status" class="form-select" required>
                    <option {{old('status') == 1 ? "selected":""}} value="1">Active</option>
                    <option {{old('status') == 0 ? "selected":""}} value="0">Inactive</option>
                </select>
            </div>
    
            <div class="col-md-6">
                <label for="subcategory_id" class="form-label">Subcategory</label>
                <select name="subcategory_id" class="form-select" required>
                    @foreach($subcategories as $subcategory)
                        <option {{old('subcategory_id') == $subcategory->id ? "selected":""}} value="{{ $subcategory->id }}">{{ $subcategory->name_en }}</option>
                    @endforeach
                </select>
            </div>
    
            <div class="col-md-6">
                <label for="brand_id" class="form-label">Brand</label>
                <select name="brand_id" class="form-select" required>
                    @foreach($brands as $brand)
                        <option {{old('brand_id') == $brand->id ? "selected":""}} value="{{ $brand->id }}">{{ $brand->name_en }}</option>
                    @endforeach
                </select>
            </div>
    
            <div class="col-12 mt-3">
                <button type="submit" class="btn btn-primary" name='page'  value="index">Create</button>
            </div>
            <div class="col-12 mt-3">
                <button type="submit" class="btn btn-primary" name='page' value="back">Create & return</button>
            </div>
        </div>
    </form>
    
   </div>

@endsection

