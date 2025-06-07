<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name_en' => ['required',"string","max:256","min:3"],
            'name_ar' => ['required',"string","max:256","min:3"],
            'price' => ['required',"numeric","max:99999.99","min:10"],
            'code' => ['required',"integer","digits:5","unique:products,code"],//$id,id
            "quantity" => ["nullable","numeric","max:100",],
            "desc_en"=>["required","string",],
            "desc_ar"=>["required","string",],
            "brand_id" => ["required","integer","digits:1"],
            "subcategory_id" => ["required","integer","exists:subcategories,id"],
            "image" => ["nullable","image","max:2000","mimes:png,jpg,jpeg"],
            "status"=>["required","integer","between:0,1"]
        ];
    }
}
