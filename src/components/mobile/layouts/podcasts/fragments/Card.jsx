import React from "react";

export const Card = () => {
  return (
    <div className="bg-[#454547] p-5 rounded-lg flex flex-col gap-4">
      <div>
        <div className="flex w-full justify-between">
          <h1 className="text-3xl font-semibold text-white">judul podcast</h1>
          <img
            src="image/icon/add.svg"
            alt=""
            className="border aspect-square h-10 border-white rounded-full"
          />
        </div>
        <span>episode</span>
      </div>
      <div className="w-full flex justify-center">
        <img src="image/podcast.jpg" className="aspect-square w-[50%] rounded-lg" alt="" />
      </div>
      <div>
        <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi quidem, iste minima qui architecto quas iure rem ipsum magnam minus recusandae sed debitis vero reiciendis necessitatibus eveniet, ab temporibus.</p>
      </div>
      <div className="flex justify-between">
        <button className="bg-[#222222] flex text-sm px-3 py-2 rounded-full">
            <img src="image/icon/volume.svg" alt="" />
            pratinjau episode</button>

            <div className="flex">
                <img src="image/icon/more.svg" className="rotate-90" alt="" />
                <button><img src="image/icon/play.svg" className="h-10" alt="" /></button>
            </div>
      </div>
    </div>
  );
};
