<?php

namespace App\Http\traits;

trait media{

    public function uploadPhoto($image,$folder){
        $photoname = uniqid() . ".". $image->extension();
        $image->move(public_path('dist/img/'.$folder),$photoname);
        return $photoname;

    }
    public function deletePhoto($photopath){
        if(file_exists($photopath)){
            unlink($photopath);
            return true;
        }
        return false;

    }
}