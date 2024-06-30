import React from 'react'

export const Inp = () => {
  return (
    <div>
       <div className='flex bg-white mx-4 h-10 px-3 py-2 rounded-md'>
        <img src="image/icon/searchBlack.svg" alt="" />
       <input type="text"  className='flex flex-grow outline-none rounded-md placeholder:text-gray-400 placeholder:font-semibold' placeholder='What do you want to listen to?'/>

       </div>
    </div>
  )
}
