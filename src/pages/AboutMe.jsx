// src/pages/AboutMe.jsx
import React from 'react';

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">About QonVene</h1>
        
        <p className="text-lg text-gray-100 text-center mb-8 leading-relaxed">
          QonVene is designed to bring people together in virtual spaces that feel as real as they are engaging.
          With intuitive tools and custom virtual rooms, QonVene empowers you to create, connect, and celebrate no matter the distance.
        </p>
        
        <div className="space-y-6">
          <div className="p-4 bg-purple-800 bg-opacity-75 rounded-lg hover:bg-opacity-90 transition duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-white">Our Mission</h2>
            <p className="text-gray-200">
              To redefine virtual events by providing a seamless, interactive, and memorable experience for everyone involved.
            </p>
          </div>

          <div className="p-4 bg-indigo-800 bg-opacity-75 rounded-lg hover:bg-opacity-90 transition duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-white">Our Vision</h2>
            <p className="text-gray-200">
              To be the leading platform for virtual events, where communities, teams, and families gather to create unforgettable memories.
            </p>
          </div>

          <div className="p-4 bg-pink-800 bg-opacity-75 rounded-lg hover:bg-opacity-90 transition duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-white">Core Values</h2>
            <ul className="text-gray-200 list-disc list-inside mt-2">
              <li>Connection</li>
              <li>Innovation</li>
              <li>Inclusivity</li>
              <li>Memorability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

