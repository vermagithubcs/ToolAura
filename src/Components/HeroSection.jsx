import React from "react";
import Navbar from "./Navbar";
import Productivity from "../assets/Producitivity.jpeg";
import Productivity2 from "../assets/Productive2.jpeg";
const HeroSection = () => {
  return (
    <>
      <div className="h-screen w-screen text-black border-b border-gray-400">
        {/* Navar page  */}
        <Navbar />
        <div className="main flex">
          <div className="left h-screen w-1/2 flex items-center">
            <div className="relative h-60 left-1/4 flex flex-col justify-around items-start">
              <h1 className="text-5xl">ToolAura </h1>
              <p className="text-3xl">Your Productivity, Your Aura🚀</p>
              <p className="text-2xl">
                Access our 100+ free tools and complete your <br /> tasks
                easily.
              </p>
              <button className="btn btn-primary w-40 h-10 text-xl text-nowrap">
                Explore Now
              </button>
            </div>
          </div>
          <div className="right h-screen w-1/2 flex items-center justify-around">
            <img
              className="h-80 rounded-xl absolute top-1/6 left-3/6 transition-transform duration-300 hover:scale-110"
              src={Productivity}
              alt="Image"
            />
            <img
              className="h-80 rounded-xl absolute bottom-0 top-1/2 left-3/4 transition-transform duration-300 hover:scale-110"
              src={Productivity2}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
