import React from 'react'

const Conversation = () => {
  return <>
  <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 cursor-pointer'>
    <div className='avatar online '>
      <div className="w-11 rounded-full">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>

    <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
            <p className='font-bold text-violet-500'>John Doe</p>
            <span className='text-xl'></span>
        </div>
    </div>
  </div>
  </>
}

export default Conversation