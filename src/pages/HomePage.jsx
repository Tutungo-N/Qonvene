import React from "react";
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import EventCarousel from "../components/EventCarousel";
import Testimonials from "../components/Testimonials";

const HomePage = () => {

    return(
        <main className="bg-teal-500 left-0 w-screen mx-0 p-0">
        <div className="container mx-auto py-0 pt-16 relative overflow-x-hidden">
            <Navbar />
        </div>
        <div className="py-0 left-0 w-screen h-screen">
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