import React from 'react'

const Choose = () => {
  return (
    <>
    <div className="min-h-screen w-screen flex flex-col items-center justify-evenly px-6 py-16 border-b border-gray-300">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 ">Why Choose ToolAura🚀?</h1>
        <p className="text-lg mb-10 text-black relative top-4">
          ToolAura🚀 offers 100+ free tools designed to boost your productivity
          without distractions. Here’s why users love it:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl">
        <div className="h-28 px-1 py-2 w-92 text-wrap bg-white text-black rounded-xl shadow">
          <h2 className="text-xl relative left-2 top-2 font-semibold mb-2">✅ Completely Free</h2>
          <p className='relative left-2 top-3'>No hidden charges. Every tool is available at zero cost.</p>
        </div>

        <div className="h-28 px-1 py-2 w-92 text-wrap bg-white text-black rounded-xl shadow">
          <h2 className="text-xl relative left-2 top-2 font-semibold mb-2">🧩 All-in-One Platform</h2>
          <p className='relative left-2 top-3'>Text, image, dev, SEO, and utility tools all in one place.</p>
        </div>

        <div className="h-28 px-1 py-2 w-92 text-wrap bg-white text-black rounded-xl shadow">
          <h2 className="text-xl relative left-2 top-2 font-semibold mb-2">⚡ Super Fast</h2>
          <p className='relative left-2 top-3'>All tools load instantly and run directly in your browser.</p>
        </div>

        <div className="h-28 px-1 py-2 w-92 text-wrap bg-white text-black rounded-xl shadow">
          <h2 className="text-xl relative left-2 top-2 font-semibold mb-2">🛡️ Privacy First</h2>
          <p className='relative left-2 top-3'>No tracking, no logins, no data collection. 100% privacy-focused.</p>
        </div>

        <div className="h-28 px-1 py-2 w-92 text-wrap bg-white text-black rounded-xl shadow">
          <h2 className="text-xl relative left-2 top-2 font-semibold mb-2">🌗 Dark Mode Ready</h2>
          <p className='relative left-2 top-3'>Comfortable viewing with dark/light theme <br /> toggle.</p>
        </div>

        <div className="h-28 px-1 py-2 w-92 text-wrap bg-white text-black rounded-xl shadow">
          <h2 className="text-xl relative left-2 top-2 font-semibold mb-2">📱 Fully Responsive</h2>
          <p className='relative left-2 top-3'>Use it on your phone, tablet, or laptop anytime,  anywhere.</p>
        </div>
      </div>
    </div>  
    </>
  )
}

export default Choose
