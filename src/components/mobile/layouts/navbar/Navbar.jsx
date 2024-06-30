import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex justify-between px-3  bg-gradient-to-t from-black to-black/70 pb-2'>
        <Link to="/">
        <div className='text-white flex flex-col items-center'>
            <img src="image/icon/home.svg" className='h-10' alt="" />
            <p className='text-xs'>home</p>
        </div></Link>
        <Link to="/search">
        <div className='text-white flex flex-col items-center'>
            <img src="image/icon/search.svg" className='h-10' alt="" />
            <p className='text-xs'>search</p>
        </div></Link>
        <div className='text-white flex flex-col items-center'>
            <img src="image/icon/list.svg" className='h-10' alt="" />
            <p className='text-xs'>library</p>
        </div>
    </div>
  )
}
