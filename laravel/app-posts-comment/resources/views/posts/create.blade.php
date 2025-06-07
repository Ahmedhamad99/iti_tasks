{{-- <x-app-layout>

<form class="max-w-sm mx-auto" method="post" action="{{ url('posts/store') }}">
    @csrf
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your Post Title</label>
      <input type="text" name="title" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
    </div>
    @error('title')

    <div class="alert alert-danger">{{ $message }}</div>

@enderror
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your Post contnet </label>
      <textarea type="text" name="body" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" >
      </textarea>
      </div>
@error('body')

    <div class="alert alert-danger">{{ $message }}</div>

@enderror

   
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Post</button>
  </form>
</x-app-layout> --}}




<x-app-layout>
    <div class="container mx-auto mt-4">
        <h2 class="text-2xl font-bold mb-4">Create a New Post</h2>

        @if (session('success'))
            <div class="bg-green-100 text-green-700 p-4 rounded mb-4">
                {{ session('success') }}
            </div>
        @endif

        <form class="max-w-sm mx-auto" method="POST" action="{{ route('posts.store') }}" enctype="multipart/form-data">
            @csrf

            <div class="mb-5">
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Your Post Title</label>
                <input type="text" name="title" id="title" value="{{ old('title') }}"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       placeholder="Post title" required />
                @error('title')
                    <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                @enderror
            </div>

            <div class="mb-5">
                <label for="body" class="block mb-2 text-sm font-medium text-gray-900">Your Post Content</label>
                <textarea name="body" id="body" rows="5"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">{{ old('body') }}</textarea>
                @error('body')
                    <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                @enderror
            </div>

            <div class="mb-5">
                <label for="image" class="block mb-2 text-sm font-medium text-gray-900">Upload Image (optional)</label>
                <input type="file" name="image" id="image"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                @error('image')
                    <div class="text-red-500 text-sm mt-1">{{ $message }}</div>
                @enderror
            </div>

            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Post
            </button>
        </form>
    </div>
</x-app-layout>
