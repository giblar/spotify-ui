import React from "react";

export const Navbar = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-[#121212] flex flex-col w-[7rem] rounded-lg items-center justify-center py-2 gap-2">
        <img src="image/icon/home.svg" alt="" className="w-10" />
        <img src="image/icon/search.svg" alt="" className="w-10" />
      </div>
      <div className="kotak2 bg-[#121212] px-1 py-2 flex flex-col w-[7rem] items-center flex-grow rounded-lg gap-2 ">
        <img src="image/icon/list.svg" alt="" className="w-[70%] rounded-md" />
        <div className="w-[70%] aspect-square bg-gradient-to-br from-[#4407F3] to-[#AFD2D0] flex justify-center items-center rounded-md">
          <img src="image/icon/love.svg" alt="" className="w-5" />
        </div>
        <div className="flex flex-col overflow-y-auto h-[50vh] items-center justify-center custom-scrollbar gap-2">
        <img src="image/mcr.jpg" alt="" className="w-[70%] rounded-md" />
        <img src="image/mcr.jpg" alt="" className="w-[70%] rounded-md" />
        <img src="image/mcr.jpg" alt="" className="w-[70%] rounded-md" />
        <img src="image/mcr.jpg" alt="" className="w-[70%] rounded-md" />
        <img src="image/mcr.jpg" alt="" className="w-[70%] rounded-md" />
        <img src="image/mcr.jpg" alt="" className="w-[70%] rounded-md" />
        <img src="image/mcr.jpg" alt="" className="w-[70%] rounded-md" />
        <img src="image/mcr.jpg" alt="" className="w-[70%] rounded-md" />
        <img src="image/mcr.jpg" alt="" className="w-[70%] rounded-md" />
        <img src="image/mcr.jpg" alt="" className="w-[70%] rounded-md" />
        <img src="image/mcr.jpg" alt="" className="w-[70%] rounded-md" />
        <img src="image/mcr.jpg" alt="" className="w-[70%] rounded-md" />
        </div>
      </div>
    </div>
  );
};
