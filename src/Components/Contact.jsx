import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="h-[70vh] py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact ToolAura</h2>
        <p className="text-lg text-gray-600 mb-8">
          Have feedback, found a bug, or want to share an idea? We'd love to hear from you!
        </p>

        <div className="bg-white p-6 rounded-xl shadow-md text-left">
          <p className="mb-4 font-semibold">Email Us:</p>
          <p className="text-blue-600 mb-6">
            <a href="mailto:toolaurasupport@example.com" className="underline">toolaurasupport@example.com</a>
          </p>

          <p className="mb-4 font-semibold">For:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>🔧 Bug Reports</li>
            <li>🌟 Feature Requests</li>
            <li>💬 General Feedback</li>
            <li>🤝 Collaborations</li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
