import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [countdown, setCountdown] = useState(null);

  // Event date
  const eventDate = new Date('2024-12-25T00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeRemaining = eventDate - now;
      
      if (timeRemaining <= 0) {
        clearInterval(interval);
        setCountdown(null);
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-teal-400 via-lavender-500 to-coral-500 bg-opacity-50 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-white font-bold text-xl">
          <img src="/logo1.png" alt="QonVene Logo" className="h-10 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Events', 'About', 'Contact', 'Sign Up'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-teal-200 transition duration-300 ease-in-out"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Countdown Widget */}
          {countdown && (
            <div className="hidden sm:flex items-center bg-white bg-opacity-10 text-white px-3 py-1 rounded-md text-sm">
              <span className="mr-1 font-medium">Event Countdown:</span>
              <span>{countdown.days}d</span>
              <span>{countdown.hours}h</span>
              <span>{countdown.minutes}m</span>
              <span>{countdown.seconds}s</span>
            </div>
          )}

          {/* Profile Icon */}
          <div className="ml-4 relative">
            <button className="flex items-center text-white focus:outline-none">
              <img
                className="h-8 w-8 rounded-full"
                src="https://via.placeholder.com/40"
                alt="Profile"
              />
              <svg
                className="ml-1 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.707a1 1 0 011.414 0L10 11.086l3.293-3.379a1 1 0 111.414 1.414l-4 4.1a1 1 0 01-1.414 0l-4-4.1a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {/* Dropdown menu could be added here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

