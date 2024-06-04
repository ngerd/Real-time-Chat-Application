import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'

const Sidebar = () => {
  return (
    <div className='border-r bg-base-100 p-4 flex flex-col'>
        <p
          class="text-2xl lg:text-xl px-2 font-bold bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-relaxed mb-4">
          Chat Application
        </p>
      <SearchInput />
      <Conversations/>
      <LogoutButton/>
    </div>
  )
}

export default Sidebar