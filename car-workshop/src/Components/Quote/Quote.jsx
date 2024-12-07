import React, { useState } from "react";
import "./Quote.css";

export default function Quotation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Quotation request submitted!");
    console.log("Form Data:", formData);
    if (uploadedImage) {
      console.log("Uploaded Image:", uploadedImage.name);
    }
  };

  return (
    <div id="quote" div className="quotation-page">
      <div className="quotation-container">
        <h2>Get a Quote</h2>
        <form onSubmit={handleSubmit} className="quotation-form">
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="form-group">
            <label htmlFor="image">Upload Images:</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {uploadedImage && <p>Uploaded: {uploadedImage.name}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
