import React from "react";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-gradient-to-br from-gray-800 
    via-gray-900 to-black text-white flex flex-col items-center justify-between">
      
      {/* Title Section */}
      <div className="mt-12 text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mt-20">
          Data Fetching Assignment
        </h1>
        <p className="text-lg text-gray-300 mt-20">
          Explore data fetching techniques on Client-Side Rendering and Server-Side Rendering with Next.js.
        </p>
      </div>

      {/* Button Section */}
      <div className="mt-16 flex gap-6">
        <a
          href="/Client-Side"
          className="transform transition-transform hover:scale-110 bg-purple-600 hover:bg-purple-800 text-white py-3 px-6 rounded-lg shadow-lg text-lg font-bold"
        >
          Client-Side Rendering
        </a>
        <a
          href="/Server-Side"
          className="transform transition-transform hover:scale-110 bg-red-600 hover:bg-red-800 text-white py-3 px-6 rounded-lg shadow-lg text-lg font-bold"
        >
          Server-Side Rendering
        </a>
      </div>

      
      <div className="w-full mt-16 py-12 bg-gray-900 text-center space-y-8 ">
        <div>
          <h2 className="text-3xl font-semibold text-gray-100">Data Fetching Explore</h2>
          <p className="text-gray-200 max-w-2xl mx-auto mt-12 text-[20px]">
            Learn how data fetching works using techniques like Client-Side 
            Rendering and Server-Side Rendering in Next.js. These methods enhance user experience and optimize performance.
          </p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

