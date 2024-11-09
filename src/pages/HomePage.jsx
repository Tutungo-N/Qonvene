import React from "react";
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

const HomePage = () => {

    return(
        <main>
        <div className="container mx-auto p-4 pt-20 relative overflow-x-hidden">
            <Navbar />
        </div>
        <div className="container mx-0 p-0 left-0 fixed top-0">
            <HeroSection />
        </div>
        </main>
    );
};

export default HomePage;