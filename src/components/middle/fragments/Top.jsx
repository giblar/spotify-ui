import React from "react";

export const Top = () => {
    return (
        <div className="w-full flex flex-col gap-10 ">
            <div className="flex justify-between w-full">
                <div className="flex h-10 gap-2">
                    <div className="bg-black rounded-full p-2">
                        <img src="image/icon/arrow.svg" alt="" className="rotate-180" />
                    </div>
                    <div className="bg-black rounded-full p-2">
                        <img src="image/icon/arrow.svg" alt="" className="" />
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="flex gap-3">
                        <button className="bg-white rounded-full font-semibold px-3 py-1">
                            Explore Premium
                        </button>
                        <button className="bg-black text-white rounded-full font-semibold px-3 py-1">
                            install app
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <button className="aspect-square bg-black rounded-full p-2">
                            <img src="image/icon/bells.svg" alt="" />
                        </button>
                        <button className="aspect-square bg-black rounded-full p-2">
                            <img src="image/icon/profile.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex gap-2">
                <button className="bg-white rounded-full px-5 py-1">all</button>
                <button className="bg-white/20 text-white rounded-full px-5 py-1 font-semibold">
                    music
                </button>
                <button className="bg-white/20 text-white rounded-full px-5 py-1 font-semibold">
                    podcast
                </button>
            </div>
        </div>
    );
};
