import React from "react";
import { CoverAlbum } from "./fragments/CoverAlbum";
import { AboutArtist } from "./fragments/AboutArtist";
import { Credits } from "./fragments/Credits";
import { OnTour } from "./fragments/OnTour";

export const PlayMusic = () => {
  return (
    <div className="bg-[#121212] w-full py-6 flex-grow  rounded-md px-5">
      <div className="flex justify-between">
        <h1 className="text-white text-xl font-semibold">The Black Parade</h1>
        <div>
          <button>
            <img src="image/icon/more.svg" alt="" />
          </button>
          <button>
            <img src="image/icon/close.svg" alt="" />
          </button>
        </div>
      </div>

      <div className="overflow-y-auto h-[74vh]  custom-scrollbar flex flex-col gap-2">
        <CoverAlbum />
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl text-white font-bold">Cancer</h1>
            <p className="text-gray-300">My Chemical Romance</p>
          </div>
          <div>
            <button className="border border-white rounded-full">
              <img src="image/icon/add2.svg" alt="" />
            </button>
          </div>
        </div>
        <AboutArtist />
        <Credits />
        <OnTour/>
      </div>
    </div>
  );
};
