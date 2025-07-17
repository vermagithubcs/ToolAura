import React from "react";
import '../CSS/utility.css';
import { useNavigate } from "react-router-dom";

const ToolSection = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-screen text-black relative top-10 border-b border-gray-300">
      <h1 className="text-center text-4xl">Productivity Section</h1>
      <div className="flex items-center justify-around h-[60vh] w-screen">
        {/* Text & Language Tools  */}
        <section className="bg-[#ffffff] text-slate-900 rounded-2xl p-5 w-full sm:w-96 shadow-md transition-transform duation-600 hover:scale-110">
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
              <li onClick={()=> navigate("/text-tools")} className="cursor-pointer hover:text-[#6366f1] w-36">📝Word Counter</li>
              <li className="cursor-pointer hover:text-[#6366f1] w-36">🔠Case Converter</li>
              <li className="cursor-pointer hover:text-[#6366f1] w-36">🗣️Text to Speech</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-medium mb-1">How To Use:</h2>
            <p className="text-sm">
              Enter your words, case convert them, and convert to speech in any
              language!
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
        </section>
        {/* Image Tools  */}
        <section className="bg-[#ffffff] text-slate-900 h-[24rem] rounded-2xl p-5 w-full sm:w-96 shadow-md transition-transform duation-600 hover:scale-110">
          <h1 className="text-xl font-sans text-center mb-4 flex items-center justify-center gap-2">
            <span className="text-2xl">🖼️</span>
            <strong>Image Tools</strong>
          </h1>

          <h2 className="font-medium">Features:</h2>
          <ul className="list-disc list-inside text-[sm] mb-4 text-nowrap">
            <li className="cursor-pointer hover:text-[#6366f1] w-36">🖼️Image Compressor</li>
          </ul>

          <h2 className="font-medium">How To Use:</h2>
          <p className="text-sm mb-4">
            Upload your image and it will compress automatically.
          </p>

          <h2 className="font-medium">Key Features and Benefits:</h2>
          <ul className="list-decimal list-inside text-sm">
            <li>Reduces image size without losing quality.</li>
            <li>Speeds up website performance.</li>
            <li>Drag-and-drop functionality.</li>
          </ul>
        </section>
        {/* Developer Tools  */}
        <section className="bg-[#ffffff] text-slate-900 rounded-2xl p-5 w-full sm:w-96 shadow-md transition-transform duation-600 hover:scale-110">
          <h1 className="text-2xl font-semibold text-center mb-4">
            💻 Developer Tools
          </h1>

          <h2 className="text-lg font-medium mb-1">Features:</h2>
          <ul className="list-disc list-inside text-[sm] mb-4 text-nowrap">
            <li className="cursor-pointer hover:text-[#6366f1] w-36">📄JSON Formatter</li>
            <li className="cursor-pointer hover:text-[#6366f1] w-36">🎨CSS Minifier</li>
          </ul>

          <h2 className="text-lg font-medium mb-1">How to Use:</h2>
          <p className="text-sm mb-4">
            Paste your code into the editor and click "Format" or "Minify" to
            get the result instantly.
          </p>

          <h2 className="text-lg font-medium mb-1">Key Features & Benefits:</h2>
          <ul className="list-decimal list-inside text-sm space-y-1">
            <li>Makes messy code readable</li>
            <li>Reduces file size</li>
            <li>Improves development speed</li>
          </ul>
        </section>
      </div>
      <div className="flex items-center justify-around h-[60vh] w-screen">
        {/* Seo Tools  */}
        <section className="bg-[#ffffff] text-slate-900 rounded-2xl p-5 w-full sm:w-96 shadow-md transition-transform duation-600 hover:scale-110">
          <h1 className="text-2xl font-semibold text-center mb-4">
            🔍 SEO Tools
          </h1>

          <h2 className="text-lg font-medium mb-1">Features:</h2>
          <ul className="list-disc list-inside text-[sm] mb-4 text-nowrap">
            <li className="cursor-pointer hover:text-[#6366f1] w-36">🏷️Meta Tag Generator</li>
          </ul>

          <h2 className="text-lg font-medium mb-1">How to Use:</h2>
          <p className="text-sm mb-4">
            Enter your page title, description, and keywords, then generate
            SEO-friendly meta tags.
          </p>

          <h2 className="text-lg font-medium mb-1">Key Features & Benefits:</h2>
          <ul className="list-decimal list-inside text-sm space-y-1">
            <li>Improves website visibility</li>
            <li>Boosts Google search ranking</li>
            <li>Easy to use without coding</li>
          </ul>
        </section>
        {/* Utility Tools  */}
        <section className="bg-[#ffffff] text-slate-900 rounded-2xl p-5 w-full sm:w-96 shadow-md transition-transform duation-600 hover:scale-110">
          <h1 className="text-2xl font-semibold text-center mb-4">
            🛠️ Utility Tools
          </h1>

          <h2 className="text-lg font-medium mb-1">Features:</h2>
          <ul className="list-disc list-inside text-[sm] mb-4 text-nowrap">
            <li className="cursor-pointer hover:text-[#6366f1] w-36">🔐Password Generator</li>
            <li className="cursor-pointer hover:text-[#6366f1] w-36">📷QR Code Generator</li>
          </ul>

          <h2 className="text-lg font-medium mb-1">How to Use:</h2>
          <p className="text-sm mb-4">
            Choose desired options and click "Generate" to get a secure password
            or scannable QR code.
          </p>

          <h2 className="text-lg font-medium mb-1">Key Features & Benefits:</h2>
          <ul className="list-decimal list-inside text-sm space-y-1">
            <li>Enhances data security</li>
            <li>Quick and easy tools</li>
            <li>Useful for daily tech tasks</li>
          </ul>
        </section>

        {/* Finance Tools */}
        <section className="bg-[#ffffff] text-slate-900 rounded-2xl p-5 w-full sm:w-96 shadow-md transition-transform duation-600 hover:scale-110">
          <h1 className="text-2xl font-semibold text-center mb-4">
            💰 Finance Tools
          </h1>

          <h2 className="text-lg font-medium mb-1">Features:</h2>
          <ul className="list-disc list-inside text-[sm] mb-4 text-nowrap">
            <li className="cursor-pointer hover:text-[#6366f1] w-36">🧮GST Calculator</li>
          </ul>

          <h2 className="text-lg font-medium mb-1">How to Use:</h2>
          <p className="text-sm mb-4">
            Enter the amount and select the GST percentage to get inclusive and
            exclusive GST values.
          </p>

          <h2 className="text-lg font-medium mb-1">Key Features & Benefits:</h2>
          <ul className="list-decimal list-inside text-sm space-y-1">
            <li>Instant GST calculations</li>
            <li>No manual math required</li>
            <li>Useful for business and personal use</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ToolSection;
