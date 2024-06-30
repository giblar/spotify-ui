import React from "react";
import { Button } from "../../elements/Button";

export const Credits = () => {
  return (
    <div className="bg-[#242424] text-white rounded-2xl p-4">
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl">Credits</h1>
        <h1 className="text-xl font-semibold text-white/70">show all</h1>
      </div>
      <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-xl">My Chemical Romance</h1>
          <p>Main Artist</p>
        </div>
        <Button></Button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-xl">Bob Bryar</h1>
          <p>producer</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-xl">Frank Lero</h1>
          <p>Producer</p>
        </div>
      </div>
      </div>
    </div>
  );
};
