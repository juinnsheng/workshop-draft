import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us">
      <h2 className="why-us-title">Why Choose Kou Sing Workshop?</h2>
      <div className="why-us-content">
        <div className="reason-h1">
          <div className="reason-text-h1">
            <h3>Punctual and Reliable</h3>
            <p>
              Our team is dedicated to delivering on schedule, ensuring your car is ready when promised.
            </p>
          </div>
          <div className="reason-image-h1">
            <img
              src="/images/punctual.jpg"
              alt="Punctual and Reliable"
              className="reason-image"
            />
          </div>
        </div>
        <div className="reason-h2">
          <div className="reason-text-h2">
            <h3>Affordable Services</h3>
            <p>
              Premium quality at pocket-friendly prices. No hidden fees, just honest and transparent service.
            </p>
          </div>
          <div className="reason-image-h2">
            <img
              src="/images/piggybank.jpg"
              alt="Affordable Services"
              className="reason-image"
            />
          </div>
        </div>
        <div className="reason-h3">
          <div className="reason-text-h3">
            <h3>Experienced Staff Who Actually Cares</h3>
            <p>
              Our mechanics are highly experienced professionals who approach every job with care and humility.
            </p>
          </div>
          <div className="reason-image-h3">
            <img
              src="/images/staff.jpg"
              alt="Experienced Staff"
              className="reason-image"
            />
          </div>
        </div>
        <div className="reason-h4">
          <div className="reason-text-h4">
            <h3>State-of-the-Art Equipment</h3>
            <p>
              We use the latest tools and technology to ensure precision and excellence in every repair.
            </p>
          </div>
          <div className="reason-image-h4">
            <img
              src="/images/sota.jpg"
              alt="State-of-the-Art Equipment"
              className="reason-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
