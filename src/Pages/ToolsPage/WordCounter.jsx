import React, { useState } from "react";

const WordCounter = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charWithSpaces, setCharWithSpaces] = useState(0);

  const calculateWordCount = (inputText) => {
    const words = inputText.trim().split(/\s+/).filter(Boolean);
    return words.length;
  };

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setCharWithSpaces(newText.length);
    setWordCount(calculateWordCount(newText));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-100 px-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white text-slate-900 p-6 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-black mb-6">
          Character Counter
        </h1>

        <textarea
          value={text}
          onChange={handleChange}
          className="w-full bg-blue-100 p-4 text-xl font-sans border-2 border-dashed border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
          name="text"
          rows={8}
          placeholder="Type your text here..."
        ></textarea>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex flex-col items-center bg-gray-100 p-4 w-40 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-700">{wordCount}</h2>
            <p className="mt-2 text-sm font-medium text-blue-500">Word Count</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 w-40 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-700">{charWithSpaces}</h2>
            <p className="mt-2 text-sm font-medium text-blue-500">With Spaces</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordCounter;
