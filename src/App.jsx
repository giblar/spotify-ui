import { useState } from 'react'

import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Middle } from './components/middle/Middle'
import { PlayMusic } from './components/playMusic/PlayMusic'
import { OnPlay } from './components/onPlay/OnPlay'

function App() {
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

export default App
