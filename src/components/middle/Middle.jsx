import React from 'react'
import { Top } from './fragments/Top'
import { PlaylistList } from './fragments/PlaylistList'
import { Artist } from './fragments/artist/Artist'

export const Middle = () => {
  return (
    <div className='bg-[#121212] flex gap-2 flex-grow flex-col w-full rounded-md p-2'>
        <div className='h-[80vh] overflow-y-auto custom-scrollbar flex flex-col w-full gap-4'>
        <div className=' sticky'>
        <Top/>
        </div>
        <PlaylistList />
        <Artist></Artist>
        
        </div>
    </div>
  )
}
