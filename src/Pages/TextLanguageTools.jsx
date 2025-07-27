import React from "react";
import { useNavigate } from "react-router-dom";

const TextLanguageTools = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <section className="bg-[#ffffff] text-slate-900 rounded-2xl p-5 w-full sm:w-96 shadow-md transition-transform duration-600 hover:scale-105 border-2 border-black h-[55vh]">
          {/* Actual Content */}
          <div className="relative z-0">
            <div className="flex items-center justify-center gap-2 mb-4">
              <h1 className="text-2xl font-semibold flex items-center gap-2">
                <span role="img" aria-label="text">
                  📑
                </span>{" "}
                Text & Language Tools
              </h1> 
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-medium mb-1">Features:</h2>
              <ul className="list-disc list-inside space-y-1 font-sans text-[sm] text-nowrap">
                <li
                  onClick={() => navigate("/text-tools")}
                  className="cursor-pointer hover:text-[#6366f1] w-36"
                >
                  📝Word Counter
                </li>
                <li
                  onClick={() => navigate("/case-converter")}
                  className="cursor-pointer hover:text-[#6366f1] w-36"
                >
                  🔠Case Converter
                </li>
                <li className="cursor-pointer hover:text-[#6366f1] w-36">
                  🗣️Text to Speech
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-medium mb-1">How To Use:</h2>
              <p className="text-sm">
                Enter your words, case convert them, and convert to speech in
                any language!
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-1">
                Key Features and Benefits:
              </h2>
              <ul className="list-decimal list-inside text-[sm] space-y-1">
                <li>All-in-one tools website</li>
                <li>Simple to use</li>
                <li>Easy to understand and fast working</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TextLanguageTools;
