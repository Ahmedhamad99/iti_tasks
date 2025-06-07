<?php

namespace App\Http\Controllers;
use App\Models\Post;
use App\Models\User;
use App\Models\Comment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StorePostRequest;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;

class PostsController extends Controller
{
    public function index(){
        $posts = Post::paginate(3);
        // dd($posts);
     
        
        return view('posts.index',['posts' => $posts]);
    }

 
    public function destroy($id){
        $post = Post::find($id);
        if ($post->image && Storage::disk('public')->exists('posts/' . $post->image)) {
            Storage::disk('public')->delete('posts/' . $post->image);
        }
        $post->delete();
        return redirect()->route('posts.index');
    }
    public function store(StorePostRequest $request){
        
        if ($request->hasFile('image')) {
            
            $image = $request->file('image');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            
            $path = $image->storeAs('posts', $filename, 'public');
            
        }

        
        // dd($request);
        $post = Post::create($request->all());
        $post['image'] = $filename;
        $post->user_id = auth()->user()->id;
        $post->save();
        return redirect()->route('posts.index');
    }


    public function create(){
        $users = User::all();
        return view('posts.create',['users' => $users]);
    }
    public function update($id,StorePostRequest $request){
        $post = Post::find($id);
        if ($request->hasFile('image')) {
            if ($post->image) {
                Storage::disk('public')->delete($post->image);
            }
    
            $image = $request->file('image');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            $path = $image->storeAs('posts', $filename, 'public');
            $data['image'] = $path;
        }
        $post->update($request->all( ));
        $post->save();
        
        return redirect()->route('posts.index');
    }
    public function edit($id){
        // $post = Post::find($id);
        $post = Post::findOrFail($id);
        // $users = User::all();
        return view('posts.edit',['id' => $id, 'post' => $post]);
    }
    public function show($id){
        // $post = Post::find($id);
        $post = Post::findOrFail($id);
        $user = User::find($post->user_id);

        $comments = Comment::where('post_id', $post->id)->get();
        // dd($comments);


       return view('posts.show',['post' => $post, 'user' => $user, 'comments' => $comments]);
    }

    public function trashed(){
        $trashedPosts = Post::onlyTrashed()->get();
        return view('posts.trashed',['posts' => $trashedPosts]);
    } 
    // public function restore($id){
    //     $post = Post::onlyTrashed()->find($id);
    //     $post->restore();
    //     return redirect()->route('posts.trashed');
    // }
    public function restore($id)
{
    $post = Post::onlyTrashed()->find($id);

    if ($post) {
        $post->restore();
    }

    return redirect()->route('posts.trashed')->with('success', 'Post restored successfully!');
}

    
}
