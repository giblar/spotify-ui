import React from "react";
import { Artist1 } from "../../../../elements/Artist1";

export const Artist = () => {
  return (
    <div className="w-full overflow-x-auto mt-2">
       
      <div className="flex space-x-4">
        <Artist1 />
        <Artist1 />
        <Artist1 />
        <Artist1 />
        <Artist1 />
      </div>
    </div>
  );
};
