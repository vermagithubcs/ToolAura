import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="h-16 fixed top-0 left-0 w-screen bg-gray-200 text-black flex items-center justify-between z-[999]">
        <h1 className="relative left-4 text-2xl cursor-pointer">ToolAura 🚀</h1>
        <ul className="flex gap-8 text-xl relative right-2 font-sans font-semibold">
          <li className="cursor-pointer hover:text-[#6366f1]">Home</li>
          <li className="cursor-pointer hover:text-[#6366f1]">About</li>
          <li className="cursor-pointer hover:text-[#6366f1]">Categories</li>
          <li className="cursor-pointer hover:text-[#6366f1]">Contact</li>
          <li className="cursor-pointer hover:text-[#6366f1]">Login / Signup</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
