<x-app-layout>
    <div class="container mx-auto p-8">
        <a href="{{ route('posts.create') }}" class="mb-5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-lg px-6 py-3 transition-all duration-300">
            Add New Post
        </a>
        <a href="{{ route('posts.trashed') }}"class="mb-5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-lg px-6 py-3 transition-all duration-300">View Deleted Posts</a>

        <div class="overflow-hidden bg-white shadow-md rounded-lg">
            <table class="min-w-full text-sm text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Title
                        </th>

                        <th scope="col" class="px-6 py-3">
                            Content
                        </th>
                        <th>
                            Created At
                        </th>
                        <th>
                            Image
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($posts as $post)
                    <tr class="border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900">
                            {{ $post->id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ $post->title }}
                        </td>
                        <td class="px-6 py-4 text-gray-700">
                          {{ $post->body }}
                        </td>
                        <td>
                            {{-- {{ $post->created_at }} --}}
                            {{ \Carbon\Carbon::parse($post->created_at)->format('Y d m') }}

                        </td>
                        <td>
                            <img src="{{ asset('storage/posts/'. $post->image) }}" alt="{{ $post->image }}" width="100px" height="100px">
                        </td>
                        <td class="px-6 py-4">
                            <a href="{{ route('posts.edit', $post->id) }}" class="inline-block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 transition-all duration-300">
                                Edit
                            </a>
                            <form action="{{ route('posts.destroy', $post->id) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this post?');" class="inline-block">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 transition-all duration-300">
                                    Delete
                                </button>
                            </form>
                            <a href="{{ route('posts.show', $post->id) }}" class="inline-block text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 transition-all duration-300">
                                View
                            </a>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        <div class="mt-4">
            <div class="mt-4">
                {{ $posts->links() }}
            </div>
        </div>
    </div>
</x-app-layout>