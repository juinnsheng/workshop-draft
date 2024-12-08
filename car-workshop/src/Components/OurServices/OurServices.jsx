import React from "react";
import "./OurServices.css";

const OurServices = () => {
  const services = [
    {
      title: "Insurance Claims",
      description: "We simplify the insurance claims process for you.",
      image: "workshop-draft/images/insuranceclaim.jpg",
    },
    {
      title: "Auto Body Repair",
      description: "Restoring your vehicle to its original condition.",
      image: "workshop-draft/images/autobodyrepair.jpg",
    },
    {
      title: "Paintless Dent Repair",
      description: "Efficiently remove dents without damaging the paint.",
      image: "workshop-draft/images/paintless.png",
    },
    {
      title: "Collision Repair",
      description: "Comprehensive repair services after an accident.",
      image: "workshop-draft/images/collisionrepair.jpg",
    },
    {
      title: "Automotive Refinishing",
      description: "High-quality paint jobs to make your car shine.",
      image: "workshop-draft/images/finishing.jpg",
    },
  ];

  return (
    <section id="our-services" className="our-services">
      <h2 className="section-title">Our Repair and Refinishing Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="insurance-panel">
        <h3 className="insurance-title">Our Insurance Panel</h3>
        <p className="insurance-description">
          We work with major insurance providers to make your claims process seamless. Trust us to handle your repairs with precision and care.
        </p>
        <div className="insurance-images">
          <div className="insurance-image">
            <img src="workshop-draft/images/amassurance.png" alt="Insurance Partner 1" />
            <p>Partner 1</p>
          </div>
          <div className="insurance-image">
            <img src="workshop-draft/images/etiqa.png" alt="Insurance Partner 2" />
            <p>Partner 2</p>
          </div>
          <div className="insurance-image">
            <img src="workshop-draft/images/zurich.jpg" alt="Insurance Partner 3" />
            <p>Partner 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
