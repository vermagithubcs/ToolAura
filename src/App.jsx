import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import ToolSection from "./Components/ToolSection";
import Choose from "./Components/Choose";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Support from "./Components/Support";
import Contact from "./Components/Contact";

import TextPage from "./Pages/ToolsPage/WordCounterPage";
import CaseConvertor from "./Pages/ToolsPage/CaseConverterPage";

const Home = () => {
  return (
    <>
      <div className="min-h-screen w-screen">
        <section id="home">
          {/* HeroSection Page  */}
          <HeroSection />
        </section>
        <section id="about">
          {/* About Page  */}
          <About />
        </section>
        <section id="categories">
          {/* ToolSection page  */}
          <ToolSection />
        </section>
        {/* Why choost Page  */}
        <Choose />
        {/* Supoort Page  */}
        <Support />
        <section id="contact">
          {/* Contact page  */}
          <Contact />
        </section>
        {/* Footer page  */}
        <Footer />
      </div>
    </>
  );
};
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/text-tools" element={<TextPage />} />
          <Route path="/case-converter" element={<CaseConvertor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
