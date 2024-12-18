import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage"; 
import WhyUs from "./Components/WhyUs/WhyUs";
import OurServices from "./Components/OurServices/OurServices";
import Testimonials from "./Components/Testimonials/Testimonials";
import Towing from "./Components/Towing/Towing";
import Quote from "./Components/Quote/Quote";
import Contact from "./Components/Contact/Contact";

const App = () => {
  const [showLanding, setShowLanding] = useState(true);

  const handleComplete = () => {
    setShowLanding(false); 
  };

  return (
    <div className="App">
      {showLanding ? (
        <LandingPage onComplete={handleComplete} />
      ) : (
        <>
          <Navbar />
          <section className="background-section">
            <div className="overlay-text">
              From Bumps and Bruises to Showroom Shine<br />
              Let Us Heal Your Ride
            </div>
          </section>

          {/* Sections below the background */}
          <WhyUs />
          <OurServices />
          <Testimonials />
          <Towing />
          <Quote />
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;
