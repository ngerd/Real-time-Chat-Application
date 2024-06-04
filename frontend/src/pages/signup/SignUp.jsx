const SignUp = () => {
  return <div className='flex felx-col items-center justify-center min-w-96 mx-auto'>
  <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-3xl text-center font-semibold leading-tight tracking-tight text-gray-900 dark:text-white">
              Signup <span className="text-indigo-700">ChatApp</span>
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
              <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                  <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ngoc Truong Nguyen" required=""/>
              </div>
              <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                  <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ngoktrunne" required=""/>
              </div>
              <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
              </div>
              <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                  <input type="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
              </div>
              <p class='text-sm font-light leading-tight'>
                  Already have account? <a href="#" class="text-primary-600 text-indigo-400 hover:underline hover:text-indigo-700 dark:text-primary-500">Log in</a>
              </p>
              <button type="submit" class="w-full text-white bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Account</button>
          </form>
      </div>
  </div>
</div>
}

export default SignUp
