import React from 'react'

export const RightC = () => {
  return (
    <div className='flex full justify-center gap-3'>
        <img src="image/icon/display.svg" alt="" className='w-7' />
        <img src="image/icon/mic.svg" alt=""  className='w-7'/>
        <img src="image/icon/queue.svg" alt=""  className='w-7'/>
        <img src="image/icon/device.svg" alt="" className='w-7' />
        <div className='flex items-center'>
        <img src="image/icon/volume.svg" alt="" className='w-9' />
        <input type="range" id="points" name="points" min="0" max="10" className='h-1 accent-[#1ED760]'/>
        </div>
        <img src="image/icon/minize.svg" alt="" className='w-7' />
        <img src="image/icon/open.svg" alt=""  className='w-7'/>
        
    </div>
  )
}
