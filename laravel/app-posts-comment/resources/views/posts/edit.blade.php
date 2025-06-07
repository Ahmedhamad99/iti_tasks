<x-app-layout>
  
  <form class="max-w-sm mx-auto" method="post" action="{{ url('posts/' . $post->id) }}">
    @csrf
    @method('PUT')
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your Post Title</label>
      <input type="text" name="title"  value="{{$post->title}}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
    </div>
    @error('title')

    <div class="alert alert-danger">{{ $message }}</div>

   @enderror
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your Post contnet </label>
      <textarea type="text" name="body" value="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" >
        {{$post->body}}
      </textarea>
      </div>
      @error('body')

    <div class="alert alert-danger">{{ $message }}</div>

@enderror
    {{-- <div class="flex items-start mb-5">
 

      <select id="user" name="user_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        @foreach ($users as $user)
            <option value="{{ $user->id }}" {{ $user->id == $post->user_id ? 'selected' : '' }}>
                {{ $user->name }}
            </option>
        @endforeach
    </select> --}}
    
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Upadte</button>
  </form>
  
</x-app-layout>

