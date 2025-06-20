<x-app-layout>
<form class="max-w-sm mx-auto" method="post" action="{{ url('users/store') }}">
    @csrf
    <div class="mb-5">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
        <input type="text" name="name" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
      </div>
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
      <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your Password </label>
      <input type="text" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
    </div>
    <div class="flex items-start mb-5">
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add User</button>
  </form>
  
</x-app-layout>