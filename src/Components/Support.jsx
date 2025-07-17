import React from "react";

const Support = () => {
  return (
    <>
      <section className="h-[60vh] w-screen border-b border-gray-300">
        <div className="relative top-6 text-center px-4">
          <h2 className="text-4xl text-center font-bold">Support ToolAura</h2>
          <p className="text-lg relative top-2">
            ToolAura is free for everyone. If our tools help you, support us
            with a small donation to keep it growing.
          </p>

          <ul className="text-start relative top-6 text-xl flex flex-col items-center justify-center list-disc list-inside text-gray-800 w-auto h-40">
            <li>1. Maintaining our server and tool performance</li>
            <li>2. Developing new features and tools</li>
            <li>3. Keeping the platform 100% free for everyone</li>
          </ul>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://www.buymeacoffee.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning w-40 text-nowrap cursor-pointer hover:scale-110"
            >
              ☕ Buy Me a Coffee
            </a>
          </div>
          <p className="relative top-12 text-xl text-gray-700">
            Every small contribution helps. Thank you for supporting{" "}
            <span className="font-semibold">ToolAura</span> 💖
          </p>
        </div>
      </section>
    </>
  );
};

export default Support;
