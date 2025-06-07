<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
// use App\Http\Requests\StoreCommentRequest;
// use App\Http\Requests\UpdateCommentRequest;
use App\Models\Post;
use App\Models\User;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $postId)
    {
        // Validate the incoming request
        $request->validate([
            'body' => 'required|string|max:255',
        ]);

        // Find the post the comment is related to
        $post = Post::findOrFail($postId);

        // Create the comment and associate it with the post and user
        $post->comments()->create([
            'body' => $request->body,
            "post_id"=>$post->id
            
        ]);

        // Redirect back to the post's page with the new comment
        return redirect()->route('posts.show', $postId);
    }

    /**
     * Display the specified resource.
     */
    // public function show($id)
    // {
    //     $post = Post::findOrFail($id);
    //     $comments = $post->comments()->with('user')->get(); // Retrieve all comments for this post
    
    //     return view('posts.show', compact('post', 'comments'));
    // }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCommentRequest $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
