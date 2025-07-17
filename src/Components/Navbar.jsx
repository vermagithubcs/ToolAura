import React from "react";
import "../CSS/utility.css";

const Navbar = () => {
  return (
    <>
      <div className="h-16 fixed top-4 left-0 w-screen bg-transparent text-black flex items-center justify-between z-[999]">
        <h1
          className="relative left-4 border border-gray-400 w-40  h-16 flex items-center justify-center bg-white shadow-md text-2xl cursor-pointer rounded-xl"
        >
          <a href="#home">ToolAura 🚀</a>
        </h1>
        <ul className="flex items-center justify-center rounded-xl gap-8 text-xl relative right-16 border border-gray-400 bg-white shadow-md h-16 w-[40rem] font-sans font-semibold">
          <li className="cursor-pointer hover:text-[#6366f1]">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer hover:text-[#6366f1]">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer hover:text-[#6366f1]">
            <a href="#categories">Categories</a>
          </li>
          <li className="cursor-pointer hover:text-[#6366f1]">
            <a href="#contact">Contact</a>
          </li>
          <li className="cursor-pointer hover:text-[#6366f1]">Signup</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
