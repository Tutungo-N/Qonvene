import React, { useRef } from "react";
import { motion } from 'framer-motion';
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import EventCarousel from "../components/EventCarousel";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
const eventCarouselRef = useRef(null);

const scrollToEventCarousel = () => {
    if (eventCarouselRef.current) {
        console.log("Scrolling to EventCarousel");
        eventCarouselRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
        console.error("EventCarousel ref not found.");
    }
    
};

    return(
        <motion.main
         initial={{ opacity: 0, x: 50 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: -50 }}
         transition={{ duration: 0.5 }}
        className="bg-teal-500 left-0 w-screen mx-0 p-0"
        >

        {/*<main className="bg-teal-500 left-0 w-screen mx-0 p-0">*/}
        <div className="container mx-auto py-0 pt-16 relative overflow-x-hidden">
            <Navbar />
        </div>
        <div className="py-0 left-0 w-screen h-screen">
            <HeroSection scrollToEventCarousel={scrollToEventCarousel} />
        </div>
        <div ref={eventCarouselRef} className="w-full px-0 py-0">
            <EventCarousel />
        </div>
        <div className="w-full px-0 py-0">
            <Testimonials />
        </div>

        
        </motion.main>

    );
};

export default HomePage;