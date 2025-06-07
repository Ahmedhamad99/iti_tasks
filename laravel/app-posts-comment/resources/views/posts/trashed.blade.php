<x-app-layout>


    <div class="container mx-auto p-8">
    <h1>Trashed posts</h1>
    <a href="{{ route('posts.index') }}"class="mb-5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-lg px-6 py-3 transition-all duration-300">All Posts</a>

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
                        <td class="px-6 py-4">
                            <form action="{{ route('posts.restore', $post->id) }}" method="POST" style="display: inline;">
                                @csrf
                                <button type="submit" class="btn btn-success btn-sm">Restore</button>
                            </form>
                            
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        {{-- <div class="mt-4">
            <div class="mt-4">
                {{ $posts->links() }}
            </div>
        </div> --}}
    </div>
</x-app-layout>
