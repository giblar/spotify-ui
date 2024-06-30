import React from "react";

export const Song = () => {
  return (
    <div className="h-full p-2">
      <div className="h-full flex gap-2 items-center">
        <img
          src="image/mcr.jpg"
          className="h-full rounded-lg"
          alt="album cover"
        />
        <div>
          <h1 className="text-xl font-semibold text-white">Cancer</h1>
          <p className="text-white/60 text-sm">My Chemical Romance</p>
        </div>
      </div>
    </div>
  );
};
