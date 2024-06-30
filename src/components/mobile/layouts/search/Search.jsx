import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { Top } from './fragments/Top'
import { Inp } from './fragments/Inp'
import { Jelajahi } from './fragments/jelajahi/Jelajahi'

export const Search = () => {
  return (
    <div className='bg-[#121212] h-screen '>
       <div>
       <Top/>
       <Inp/>
       <Jelajahi/>
       </div>

       <div className='fixed bottom-0 w-full'>
       <Navbar/>
       </div>
    </div>
  )
}
