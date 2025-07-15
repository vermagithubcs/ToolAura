import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import ToolSection from "./Components/ToolSection";
import Choose from "./Components/Choose";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Support from "./Components/Support";
import Contact from "./Components/Contact";


import TextPage from "./Pages/ToolsPage/TextPage";
const Home = () => {
  return (
    <>
      <div className="min-h-screen w-screen bg-white text-black">
        {/* HeroSection Page  */}
        <HeroSection />
        {/* About Page  */}
        <About />
        {/* ToolSection page  */}
        <ToolSection />
        {/* Why choost Page  */}
        <Choose />
        {/* Supoort Page  */}
        <Support />
        {/* Contact page  */}
        <Contact />
        {/* Footer page  */}
        <Footer/>
      </div>
    </>
  );
};
const App = ()=>{
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/text-tools" element={<TextPage/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
