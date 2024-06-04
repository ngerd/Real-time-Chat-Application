import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <form class="flex items-center max-w-sm mx-auto">   
      <div class="relative w-full">
          <input type="text" 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-2.5 pr-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search your friends..." required />
          <button type="submit" 
          class="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 ms-2 text-sm font-medium text-white bg-violet-500 rounded-lg border-violet-500 hover:bg-indigo-800">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          </button>
      </div>
    </form>
  )
}

export default SearchInput