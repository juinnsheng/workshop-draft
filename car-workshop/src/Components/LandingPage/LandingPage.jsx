import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./LandingPage.css";

const LandingPage = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to(".landing-page", {
        opacity: 0,
        duration: 1,
        onComplete, 
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="landing-page">
      <video className="landing-video" autoPlay muted loop>
        <source src="video/0.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="landing-overlay">
        <h1>Welcome to Kou Sing Workshop Sdn Bhd!</h1>
      </div>
    </div>
  );
};

export default LandingPage;
