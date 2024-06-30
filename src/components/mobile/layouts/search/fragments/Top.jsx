import React from 'react'

export const Top = () => {
  return (
    <div className='flex items-center justify-between p-5'>
       <div className='flex gap-5'>
       <img src="image/bruno.jpg" className='w-10 rounded-full' alt=""  />
       <h1 className='text-white text-2xl font-semibold'>Search</h1>
       </div>
       <div className='h-9'>
        <img src="image/icon/camera.svg" className='h-full' alt="" />
       </div>
    </div>
  )
}
