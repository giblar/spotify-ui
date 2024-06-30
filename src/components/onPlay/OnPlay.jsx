import React from 'react'
import { Song } from './fragments/Song'
import { MiddleSong } from './fragments/MiddleSong'
import { RightC } from './fragments/RightC'

export const OnPlay = () => {
  return (
    <div className='w-full h-[6rem] flex justify-between bg-[#121212] px-3'>
        <Song />
        <div className='  w-[40%] '>
        <MiddleSong/>
        </div>
        <RightC/>
        
    </div>
  )
}
