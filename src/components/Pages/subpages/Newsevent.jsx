import React from "react";
import eventlogo from './aboutinsiImage/slider1.jpg';
import { FaArrowRight } from "react-icons/fa";

const Newsevent = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="container mx-auto p-4 shadow-lg hover:shadow-2xl transition-shadow duration-500">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Latest News</h1>

      {/* Main News Section */}
      <div className="flex flex-col gap-8 md:flex-row">

        {/* Image Section */}
        <div className="w-full md:w-1/3 relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <img src={eventlogo} alt="Event Logo" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Articles Section */}
        <div className="w-full md:w-2/3 flex flex-row gap-6">
          {/* First Article */}
          <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
            <button className="self-start bg-transparent text-orange-600 px-4 py-2 transition duration-300 hover:bg-red-700">
              Read More
            </button>
            <h5 className="text-xl font-semibold mt-4">
              Nominate a teacher who made a difference through Faral’s Greatest High School Teacher contest
            </h5>
            <div className="flex flex-row justify-between mt-2">
              <p className="text-sm text-gray-500">Date: {currentDate}</p>
              <p className="text-sm text-gray-500">Time: {currentTime}</p>
            </div>
            <button className="self-start mt-4 bg-green-500 text-white px-4 py-2 transition duration-300 hover:bg-green-700 flex items-center gap-2">
              Read Article <FaArrowRight />
            </button>
          </div>

          {/* Second Article */}
          <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
            <button className="self-start bg-transparent text-orange-600 px-4 py-2 transition duration-300 hover:text-red-500">
              Read More
            </button>
            <h5 className="text-xl font-semibold mt-4">
              Nominate a teacher who made a difference through Faral’s Greatest High School Teacher contest
            </h5>
            <div className="flex flex-row justify-between mt-2">
              <p className="text-sm text-gray-500">Date: {currentDate}</p>
              <p className="text-sm text-gray-500">Time: {currentTime}</p>
            </div>
            <button className="self-start mt-4 bg-green-500 text-white px-4 py-2 transition duration-300 hover:bg-green-700 flex items-center gap-2">
              Read Article <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Second Row of News Section */}
      <div className="flex flex-col gap-8 md:flex-row mt-8">

        {/* Image Section */}
        <div className="w-full md:w-1/3 relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <img src={eventlogo} alt="Event Logo" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Articles Section */}
        <div className="w-full md:w-2/3 flex flex-row gap-6">
          {/* First Article */}
          <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
            <button className="self-start text-orange-600 bg-transparent px-4 py-2 transition duration-300 hover:bg-orange-500">
              Read More
            </button>
            <h5 className="text-xl font-semibold mt-4">
              Nominate a teacher who made a difference through Faral’s Greatest High School Teacher contest
            </h5>
            <div className="flex flex-row justify-between mt-2">
              <p className="text-sm text-gray-500">Date: {currentDate}</p>
              <p className="text-sm text-gray-500">Time: {currentTime}</p>
            </div>
            <button className="self-start mt-4 bg-green-500 text-white px-4 py-2 transition duration-300 hover:bg-green-700 flex items-center gap-2">
              Read Article <FaArrowRight />
            </button>
          </div>

          {/* Second Article */}
          <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
            <button className="self-start bg-transparent text-orange-600 px-4 py-2 transition duration-300 hover:bg-red-700">
              Read More
            </button>
            <h5 className="text-xl font-semibold mt-4">
              Nominate a teacher who made a difference through Faral’s Greatest High School Teacher contest
            </h5>
            <div className="flex flex-row justify-between mt-2">
              <p className="text-sm text-gray-500">Date: {currentDate}</p>
              <p className="text-sm text-gray-500">Time: {currentTime}</p>
            </div>
            <button className="self-start mt-4 bg-green-500 text-white px-4 py-2 transition duration-300 hover:bg-green-700 flex items-center gap-2">
              Read Article <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsevent;
