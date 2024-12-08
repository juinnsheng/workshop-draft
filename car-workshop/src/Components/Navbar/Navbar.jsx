import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsScrollingUp(false); // User is scrolling down
      } else {
        setIsScrollingUp(true); // User is scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isScrollingUp ? "show" : "hide"}`}>
      <div className="text">Kou Sing Workshop Sdn Bhd</div>
      <button className="nav-toggle" onClick={toggleNav} aria-label="Toggle Navigation">
        &#9776; {/* Hamburger icon */}
      </button>
      <nav className={`nav ${isNavOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><a href="#why-us" onClick={toggleNav}>Why Us?</a></li>
          <li><a href="#our-services" onClick={toggleNav}>Our Services</a></li>
          <li><a href="#testimonials" onClick={toggleNav}>Testimonials</a></li>
          <li><a href="#towing-section" onClick={toggleNav}>Towing</a></li>
          <li><a href="#quote" onClick={toggleNav}>Get A Quote</a></li>
          <li><a href="#contact" onClick={toggleNav}>Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
