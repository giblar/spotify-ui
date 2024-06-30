import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { Middle } from '../middle/Middle'
import { PlayMusic } from '../playMusic/PlayMusic'
import { OnPlay } from '../onPlay/OnPlay'

export const Dekstop = () => {
  return (
    <div className='bg-black h-screen p-3 flex flex-col flex-grow gap-2 justify-between overflow-hidden'>
    <div className='flex w-full gap-2 flex-grow'>
      <Navbar />
      <Middle />
      <PlayMusic />
    </div>
    <div className=''>
      <OnPlay />
    </div>
  </div>
  )
}
