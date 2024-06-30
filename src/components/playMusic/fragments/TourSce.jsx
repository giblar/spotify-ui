import React from 'react'

export const TourSce = () => {
  return (
    <div className='flex gap-3'>
      <div className='bg-[#1A1A1A] aspect-square w-[5rem] h-[5rem] flex flex-col items-center justify-center '>
        <div className='flex flex-col items-center justify-center'>
          <span className='font-semibold'>oct</span>
          <span className='text-4xl font-bold'>19</span>
        </div>
      </div>
      <div>
        <h1 className='text-xl font-semibold'>Las Vegas</h1>
        <h1 className='text-xl text-white/60 '>when we were young with my....</h1>
        <h1 className='text-xl text-white/60 '>sun 11:00 AM | Las Vegas Festival</h1>
      </div>
    </div>
  )
}
