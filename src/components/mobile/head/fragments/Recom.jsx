import React from 'react';

export const Recom = (props) => {
  const { text, bgc = "#2A2A2A", textC = "white", onClick } = props;
  return (
    <button
      className={`flex justify-center items-center text-${textC} px-3 font-bold py-1 rounded-full text-xs`}
      style={{ backgroundColor: bgc }}
      onClick={onClick}
    >
      <h1>{text}</h1>
    </button>
  );
};
