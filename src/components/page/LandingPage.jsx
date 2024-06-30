import React from 'react'
import { Dekstop } from './Dekstop'
import { Mobile } from './Mobile'

export const LandingPage = () => {
  return (
    <div>
        <div className='lg:block hidden '>
        <Dekstop/>
        </div>
        <div className='lg:hidden block'>
            <Mobile/>
        </div>
    </div>
  )
}
