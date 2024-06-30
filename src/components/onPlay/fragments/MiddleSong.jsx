import React from "react";

export const MiddleSong = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center gap-4">
        <button>
          <img src="image/icon/shuffle.svg" className="w-8" alt="" />
        </button>
        <button>
          <img src="image/icon/skip.svg" className="w-8" alt="" />
        </button>
        <button>
          <img src="image/icon/play.svg" className="w-12" alt="" />
        </button>
        <button>
          <img src="image/icon/skip.svg" className="w-8" alt="" />
        </button>
        <button>
          <img src="image/icon/repeat.svg" className="w-8" alt="" />
        </button>
      </div>
      <div className="text-white flex w-full items-center gap-2">
        <p>20.22</p>
        <div className="w-full relative">
          <div className="bg-white h-1 absolute w-4 rounded-full mb-2"></div>
          <div className="bg-white/30 h-1 w-full rounded-full"></div>
        </div>

        <p>203.4</p>
      </div>
    </div>
  );
};
