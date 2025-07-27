import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import React from "react";

const CaseConvertor = () => {
  return (
    <>
      <div className="min-h-screen w-screen">
        <div>
          <Navbar />
        </div>
        <div className="maincontent">
        </div>
        <div className="absolute w-screen bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CaseConvertor;
