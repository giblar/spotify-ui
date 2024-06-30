import React, { useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { Header } from "../../head/Header";
import { List } from "./fragments/List";
import { Artist } from "./fragments/Artist";
import { Podcast } from "../podcasts/Podcast";
import { Sidebar } from "../sidebar/Sidebar";

export const Landing = () => {
  const [isPodcast, setIsPodcast] = useState(false);
  const [IsSideBar, setIsSideBar] = useState(false);

  const closeSidebar = () => {
    setIsSideBar(false);
  };

  return (
    <div className="h-screen overflow-y-auto">
      <div className={`${IsSideBar ? '' : 'hidden'}`}>
        <Sidebar closeSidebar={closeSidebar} />
      </div>
      <div className='py-5 px-3'>
        <Header setIsPodcast={setIsPodcast} setIsSideBar={setIsSideBar} />
      </div>
      {isPodcast && (
        <div className="pod text-white">
          <Podcast/>
        </div>
      )}
      <div className={`qt  w-full px-2 ${isPodcast ? 'hidden' : ''}`}>
        <List /> 
      </div>
      <div className={`qt  w-full px-2 ${isPodcast ? 'hidden' : ''}`}>
        <h1 className="text-white text-xl font-semibold">Artis Populer</h1>
        <Artist />
      </div>
      <div className='fixed w-full bottom-0'>
        <Navbar />
      </div>
    </div>
  );
};
