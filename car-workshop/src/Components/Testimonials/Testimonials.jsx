import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: "Ahmad Faizal",
    language: "Bahasa Malaysia",
    rating: 5,
    review: "Perkhidmatan yang sangat memuaskan. Kualiti kerja yang luar biasa dan staf sangat mesra.",
  },
  {
    name: "Chong Wei",
    language: "English",
    rating: 5,
    review: "Great service, very professional. The team did an excellent job on my car repair, I highly recommend this workshop!",
  },
  {
    name: "Siti Aishah",
    language: "Bahasa Malaysia",
    rating: 5,
    review: "Sangat berpuas hati dengan hasil kerja. Proses yang lancar dan staf sangat membantu.",
  },
  {
    name: "Rajesh Kumar",
    language: "English",
    rating: 5,
    review: "Excellent service! My car looks brand new after the repair. Highly skilled and friendly staff.",
  },
  {
    name: "Lee Mei Ching",
    language: "Chinese",
    rating: 5,
    review: "服务很好，员工非常专业，修车质量一流。强烈推荐给大家！",
  },
  {
    name: "Chong Zhang Wei",
    language: "Mandarin",
    rating: 5,
    review: "这个车间的服务非常好，员工很专业，修理后的车看起来像新的一样。",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonialsData.length);
    }, 2000); // Changes every 2 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + testimonialsData.length) % testimonialsData.length);
  };

  const firstTestimonial = testimonialsData[currentIndex];
  const secondTestimonial = testimonialsData[(currentIndex + 1) % testimonialsData.length];

  return (
    <section id="testimonials" className="testimonials">
      <h2 className="section-title">What Our Customers Have to Say</h2>

      <div className="testimonials-container">
        {/* Display two testimonials at a time */}
        <div className="testimonial-card animated">
          <div className="testimonial-content">
            <h3 className="testimonial-name">{firstTestimonial.name}</h3>
            <p className="testimonial-language">{firstTestimonial.language}</p>
            <div className="rating">
              {[...Array(firstTestimonial.rating)].map((_, index) => (
                <span key={index} className="star">★</span>
              ))}
            </div>
            <p className="testimonial-text">{firstTestimonial.review}</p>
          </div>
        </div>

        <div className="testimonial-card animated">
          <div className="testimonial-content">
            <h3 className="testimonial-name">{secondTestimonial.name}</h3>
            <p className="testimonial-language">{secondTestimonial.language}</p>
            <div className="rating">
              {[...Array(secondTestimonial.rating)].map((_, index) => (
                <span key={index} className="star">★</span>
              ))}
            </div>
            <p className="testimonial-text">{secondTestimonial.review}</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
