import React from "react";
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import EventCarousel from "../components/EventCarousel";
import Testimonials from "../components/Testimonials";

const HomePage = () => {

    return(
        <main className="bg-teal-500 left-0 w-screen">
        <div className="container mx-auto p-4 pt-20 relative overflow-x-hidden">
            <Navbar />
        </div>
        <div className="container mx-0 p-0 left-0 w-full h-screen">
            <HeroSection />
        </div>
        <div className="w-full px-0 py-0">
            <EventCarousel />
        </div>
        <div className="w-full px-0 py-0">
            <Testimonials />
        </div>

        </main>
    );
};

export default HomePage;