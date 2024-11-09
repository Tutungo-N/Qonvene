import React from 'react';
import heroBackground from '../assets/imagev.jpg';

const HeroSection = () => {
  return (
    
    <section className="relative w-screen h-screen flex items-center justify-center text-center text-white px-0 mx-0">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
  
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay Filter */}
      
      </div>

      {/* Tagline and Call-to-Action Buttons */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">Transform the Way You Connect</h1>
        <p className="text-lg sm:text-xl mb-8">Host, Attend, and Connect Virtually Like Never Before</p>
        <div className="flex space-x-8 flex-col sm:flex-row">
          <button className="bg-teal-500 hover:bg-teal-400 px-6 py-3 text-lg font-medium rounded-md transition duration-300">
            Discover Events
          </button>
          <button className="bg-transparent border-2 border-teal-500 hover:bg-teal-500 px-6 py-3 text-lg font-medium rounded-md transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
    
  );
};

export default HeroSection;

