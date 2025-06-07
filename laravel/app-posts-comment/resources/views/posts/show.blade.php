
<x-app-layout>
     
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
       
        <div class="px-6 py-4 bg-gray-800 text-white">
          <div class="font-bold text-xl mb-2">Post info</div>
          
        </div>
        
       
        <div class="px-6 py-4">
          <h3 class="font-bold text-xl mb-2">Post title: {{ $post->title }} </h3>

          <p class="text-gray-700 text-base">
            {{ $post->content }}

          </p>
        </div>
      </div>

      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
       
        <div class="px-6 py-4 bg-gray-800 text-white">
          <div class="font-bold text-xl mb-2">Post creator info</div>
          
        </div>
        
       
        <div class="px-6 py-4">
          <h3 class="font-bold text-xl mb-2">Name: {{ $user->name }} </h3>
          <h4 class="font-bold text-xl mb-2">Email: {{ $user->email }} </h4>
          <h5  class="font-bold text-xl mb-2">Created at: {{ $post->created_at }} </h5>

       
        </div>
      </div> 

      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
       
        <div class="px-6 py-4 bg-gray-800 text-white">
          <div class="font-bold text-xl mb-2">Comments</div>
          
        </div>
        
       
        <div class="px-6 py-4">
         @foreach ($comments as $comment)
          <h3 class="font-bold text-xl mb-2">{{$comment->body}}</h3>
          
       
        @endforeach

       
        </div>
      </div> 
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <form action="{{ route('comments.store', ['postId' => $post->id]) }}" method="POST">
          @csrf

          <textarea name="body" rows="3" placeholder="Add a comment" required></textarea>
          <button type="submit">Post Comment</button>
        </form>
      </div>
      
</x-app-layout>