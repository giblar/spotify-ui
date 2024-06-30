import React from 'react'

import { Artist1 } from '../../../elements/Artist1'

export const Artist = () => {
  return (
    <div className=''>
        <h1 className='text-white text-4xl font-semibold '>Popular artist</h1>
        <div className='flex justify-between w-full'>
       <Artist1/>
       <Artist1/>
       <Artist1/>
       <Artist1/>
        </div>
    </div>
  )
}
