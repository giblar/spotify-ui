import React from 'react'
import { TourSce } from './TourSce'

export const OnTour = () => {
  return (
    <div className='bg-[#242424] rounded-2xl text-white p-6 flex flex-col gap-3'>
        <h1 className="font-semibold text-2xl">On Tour</h1>
        <TourSce/>
        <TourSce/>
    </div>
  )
}
