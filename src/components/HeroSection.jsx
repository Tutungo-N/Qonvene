import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBackground from '../assets/imagev.jpg';
import '/src/index.css';

const HeroSection = ({ scrollToEventCarousel }) => {
    const [typedText, setTypedText] = useState(""); //State to hold the typed text
    const navigate = useNavigate(); // Initialize navigate hook
    const textToType = "Transform The Way You Connect!"; // Text to type out

    useEffect(() => {
        let index = 0;
    
        const typingInterval = setInterval(() => {
          // Ensure that the index is within bounds of the text
          if (index < textToType.length) {
            setTypedText(textToType.slice(0, index + 1)); // Slice directly from the text source
            index += 1;
          } else {
            clearInterval(typingInterval); // Stop the interval once we reach the end of the text
          }
        }, 50); // Typing speed
    
        return () => clearInterval(typingInterval); // Clear interval on component unmount
      }, []);
    
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
      <div className="relative z-10 max-w-2xl mx-auto md:px-32">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6"> 
            {typedText.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: index * 0.05,
                        ease: "easeInOut",
                    }}
                >
                    {char}
                </motion.span>
                
            ))}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    repeat: Infinity,
                    duration: 0.5,
                    repeatType: "reverse",
                }}
                className="text-teal-400"
            >
                |
            </motion.span>
        {/*<span className="text-teal-500">|</span> Blinking cursor */}
        {/*Transform the Way You Connect*/}</h1>
        <p className="text-lg sm:text-xl mb-8">Host, Attend, and Connect Virtually Like Never Before</p>
        <div className="flex space-x-8 flex-col sm:flex-row">
          <button 
            onClick={scrollToEventCarousel}
            className="bg-teal-500 hover:bg-teal-400 px-6 py-3 text-lg font-medium rounded-md transition duration-300"
            >
            Discover Events
          </button>
          <button 
            onClick={() => navigate("/signup")} // Navigate to Signup page
            className="bg-transparent border-2 border-teal-500 hover:bg-teal-500 px-6 py-3 text-lg font-medium rounded-md transition duration-300"
            >
            Get Started
          </button>
        </div>
      </div>
    </section>
    
  );
};

export default HeroSection;

