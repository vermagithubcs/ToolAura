import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import WordCounter from "./WordCounter";
const TextPage = () => {
  return (
    <>
      <div className="h-[150vh] flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <WordCounter />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TextPage;
