import React from "react";

const WordCounter = () => {
  return (
    <>
      <div className=" relative top-26 left-1/4 h-[75vh] w-1/2 rounded-2xl bg-[#ffffff] text-slate-900 overflow-hidden p-6">
        <h1 className="text-center text-3xl font-sans text-black">Character Counter</h1>
        <div className="text relative top-6 left-1/6">
          <textarea className="bg-[#e0f2fe] p-2 font-sans text-xl border-2 rounded-2xl border-dashed" name="text" cols={40} rows={10}></textarea>
        </div>
        <div className="Characters relative top-12 left-1/4 bg-gray-200 flex items-center justify-around text-black w-80 h-32 rounded-xl p-2">
          <div className="withspace w-32 h-20 flex flex-col items-center justify-around">
            <h2 className="text-2xl font-bold">625</h2>
            <p className="flex items-center justify-center text-nowrap h-7 w-28 rounded-xl bg-white text-blue-500 px-1">
              With Spaces
            </p>
          </div>
          <div className="withoutspace w-32 h-20 flex flex-col items-center justify-around">
            <h2 className="text-2xl font-bold">625</h2>
            <p className="flex items-center justify-center text-nowrap h-7 w-28 rounded-xl bg-white text-blue-500 px-1">
              With Spaces
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordCounter;
