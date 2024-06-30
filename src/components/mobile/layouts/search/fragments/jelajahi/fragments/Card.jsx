import React from 'react';

export const Card = () => {
  return (
    <div className='bg-purple-800 h-[4rem] rounded-md text-white pl-2 flex justify-between overflow-hidden relative'>
        <h1 className='font-semibold'>music</h1>
        <img src="image/podcast.jpg" className='h-12 absolute -bottom-2 -right-1 rounded-md rotate-12' alt="" />
    </div>
  );
};
