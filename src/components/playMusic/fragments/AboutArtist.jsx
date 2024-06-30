import React from "react";
import { Button } from "../../elements/Button";

export const AboutArtist = () => {
  return (
    <div className="bg-[#242424] text-white rounded-2xl">
      <div className="relative">
        <img src="image/personil.jpg" className="aspect-video w-full rounded-t-2xl brightness-50" alt="" />
        <h1 className="absolute top-4 left-4 text-2xl font-bold ">
          About the artist
        </h1>
      </div>
      <div className="px-5 py-3">
        <h1 className="text-xl font-semibold">My Chemical Romance</h1>
        <div className="flex justify-between items-center">
          <p className="text-xl text-white/60">12,333,543 monthly listeners</p>
          <Button></Button>
        </div>
        <p className="text-lg font-light mt-2">
          Formed in NJ, My Chemical Romance made its debut in 2002 with the
          independently released album I Brought You My Bullets.
        </p>
      </div>
    </div>
  );
};
