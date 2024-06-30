import React from 'react';

export const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="sidebar h-screen bg-[#222222] w-[80%] text-white opacity-100 transition-opacity duration-1000 ease-in-out">
      <div className="flex border-b border-gray-600 p-3 gap-2">
        <img src="image/bruno.jpg" className="h-12 rounded-full" alt="" />
        <div>
          <h2 className="font-semibold text-xl">bruno mars</h2>
          <p className="text-gray-300 text-sm">view profile</p>
        </div>
        <button
          onClick={closeSidebar}
          className="ml-auto text-gray-300 hover:text-white focus:outline-none"
        >
          {/* Icon close, misalnya menggunakan X */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-7 ml-3 text-[16px]">
        <h1>Whats new</h1>
        <h1>Listening history</h1>
        <h1>Settings and privacy</h1>
      </div>
    </div>
  );
};
