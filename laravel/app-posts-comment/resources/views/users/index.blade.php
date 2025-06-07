<x-app-layout>
<div>
    <a href="{{route('users.create')}}"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Add user</a>

</div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50">
                    Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            @foreach ($users as $user)
            <tr class="border-b border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
              {{ $user->id }}
                </th>
                <td class="px-6 py-4">
                    {{ $user->name }}
                </td>
                <td class="px-6 py-4 bg-gray-50">
                    {{ $user->email }}
                </td>
                <td class="px-6 py-4">
                    <a href="/"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Edit</a>
                    <form action="/" method="user" onsubmit="return confirm('Are you sure you want to delete this user?');" style="display: inline;">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                            Delete
                        </button>
                    </form>
                    <a href="/" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">View</a>
                    
                  
                    <a href="/" >Update</a>
                </td>
            </tr>
            @endforeach
           
         
        </tbody>
    </table>
</div>
    
</x-app-layout>