import React from "react";
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

const HomePage = () => {

    return(
        <main>
        <div className="container mx-auto p-4 pt-20 relative overflow-x-hidden">
            <Navbar />
            <HeroSection />
        </div>
        </main>
    );
};

export default HomePage;