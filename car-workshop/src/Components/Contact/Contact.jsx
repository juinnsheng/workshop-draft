import React from "react";
import "./Contact.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      {/* Image Background */}
      <div className="contact-image">
        <img
          src="workshop-draft/images/background2.jpg"
          alt="Workshop Background"
        />
      </div>
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
