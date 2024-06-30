import React from 'react'
import { Card } from './fragments/Card'

export const Jelajahi = () => {
  return (
    <div className='flex flex-col gap-6 mt-5 '>
        <h1 className='text-md text-white font-semibold mx-3'>Mulai Jelajahi</h1>
        <div className='grid grid-cols-2 gap-3 mx-2'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </div>
  )
}
