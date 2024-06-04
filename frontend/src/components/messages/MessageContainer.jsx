import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div  className='md:min-w-[450px] flex flex-col'>
      {noChatSelected ? ( <NoChatSelected /> 
      ) : (
        <>
      <div className='flex items-center gap-x-2 px-4 py-2 mb-2 h-10'>
        <div className="avatar pt-2">
            <div className="w-7 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <span className='text-gray-900 font-bold pt-2'> John doe</span>
      </div>

      <div className='divider my-0 py-0 h-0'/>

      <Messages/>
      <MessageInput/>
      </>
      )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-lg text-black font-semibold flex flex-col items-center gap-2'>
        <p>Welcome John Doe</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3x1 md:text-6xl text-center' />
      </div>
    </div>
  )
}