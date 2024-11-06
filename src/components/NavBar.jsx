// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4 fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link to="/">QonVene</Link>
        </div>
        <div className="space-x-4 flex">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
          <Link to="/signup" className="text-white hover:text-gray-300">Signup</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About Me</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
