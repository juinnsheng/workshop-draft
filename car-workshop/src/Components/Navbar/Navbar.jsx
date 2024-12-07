import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="text">Kou Sing Workshop Sdn Bhd</div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#why-us">Why Us?</a></li>
          <li><a href="#our-services">Our Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#towing-section">Towing</a></li>
          <li><a href="#quote">Get A Quote</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
