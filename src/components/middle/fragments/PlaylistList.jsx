import React from 'react'
import Playlist from './Playlist'

export const PlaylistList = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
    </div>
  )
}
