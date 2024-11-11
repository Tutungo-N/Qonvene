import React, { useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 p-4 fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
    
          <Link to="/" className="text-xl">QonVene</Link>
          
           {/* Hamburger Icon for Mobile */}
           <button
                    className="text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                        />
                    </svg>
                </button>

                <ul className={`md:flex space-x-6 items-center ${isOpen ? 'block' : 'hidden'} md:block ml-auto`}>
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    </li>
                    <li>
                        <Link to="dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup" className="text-white hover:text-gray-300">Signup</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-gray-300">About Us</Link>
                    </li>
                </ul>
        </div>
    </nav>
  );
};

export default Navbar;
