<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use App\Http\Requests\StorePostRequest;
use App\Http\Resources\PostResource;
class PostsController extends Controller
{
    public function index(){
      
        $posts = Post::with('user')->paginate(10);
        return PostResource::collection($posts);
    }

    public function store(Request $request){
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $post = Post::create([
            'title' => $request->title,
            'body' => $request->body,
            'user_id' => auth()->id(),
        ]);
       
        return new PostResource($post->load('user'));
    }

    public function show($id){
        $post = Post::with('user')->findOrFail($id);
        
        return new PostResource($post);
    }
    public function update($id,Request $request){
        $post = Post::find($id);
        if (!$post) {
            return response()->json(['error' => 'Post not found'], 404);
        }
        $post->update($request->all());
        $post->save();
        return response()->json($post);
    }
    public function destroy($id){
        $post = Post::find($id);
        if (!$post) {   
            return response()->json(['error' => 'Post not found'], 404);
        }
        $post->delete();
        return response()->json(['success' => 'Post deleted successfully']);
    }

    
}

