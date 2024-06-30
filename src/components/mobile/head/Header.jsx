import React from 'react';
import { Recom } from './fragments/Recom';

export const Header = ({ setIsPodcast, setIsSideBar }) => {
  const handlePodcastClick = () => {
    setIsPodcast(prevState => !prevState);
  };

  const handleSidebarClick = () => {
    setIsSideBar(prevState => !prevState);
  };

  return (
    <div className='h-10 flex gap-3 items-center'>
      <div className="profile h-full">
        <img src="image/bruno.jpg" className='h-full rounded-full' alt="" onClick={handleSidebarClick} />
      </div>
      <div className='flex h-7 gap-2'>
        <Recom
          text="Semua"
          bgc="#1ED760"
          textC="black"
        />
        <Recom
          text="Musik"
        />
        <Recom
          text="Podcasts"
          onClick={handlePodcastClick}
        />
      </div>
    </div>
  );
};
