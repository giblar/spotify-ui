import React from "react";

export const Artist1 = () => {
  return (
    <div className="max-w-[14rem] min-w-[12rem] hover:bg-white/20 p-2 rounded-md">
      <img src="image/bruno.jpg" alt="" className="rounded-full w-full" />
      <div className="">
        <h1 className="text-white font-bold">Bruno Mars</h1>
        <p className="text-gray-200">artist</p>
      </div>
    </div>
  );
};
