import React from "react";
import "./Contact.css";

const ContactSection = () => {
  return (
    <section id="contact" section className="contact-section">
      <h2>Contact Us</h2>
      {/* Video Background */}
      <video className="contact-video" autoPlay muted loop>
        <source src="/video/3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay */}
      <div className="contact-overlay">
        <p>Your 24/7 Solution for Your Car Needs</p>
      </div>
      {/* Contact Information */}
      <div className="contact-info">
        <div className="contact-phone">
          <i className="call-icon">&#9742;</i> {/* Phone Icon */}
          <span className="phone-number">+6016-9519388</span>
        </div>
        <p>Feel free to contact us for inquiries or appointments.</p>
      </div>
    </section>
  );
};

export default ContactSection;
