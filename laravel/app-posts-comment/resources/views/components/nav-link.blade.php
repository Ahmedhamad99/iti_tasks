<nav class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
        <a href="/" class="text-lg font-bold">{{ config('app.name', 'Laravel') }}</a>
        <div class="space-x-4">
            <a href="/" class="hover:text-gray-300">Home</a>
            @auth
                <a href="/dashboard" class="hover:text-gray-300">Dashboard</a>
                <a href="{{route('posts.index')}}" class="hover:text-gray-300">Posts</a>
                <a href="{{route("users.index")}}" class="hover:text-gray-300">Users</a>
                <form action="/logout" method="POST" class="inline">
                    @csrf
                    <button type="submit" class="hover:text-gray-300">Logout</button>
                </form>
            @else
                <a href="/login" class="hover:text-gray-300">Login</a>
                <a href="/register" class="hover:text-gray-300">Register</a>
            @endauth
        </div>
    </div>
</nav>