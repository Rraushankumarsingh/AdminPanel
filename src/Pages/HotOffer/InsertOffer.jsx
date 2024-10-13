import React, { useState } from "react";
import './InsertOffer.css'

export const InsertOffer = () => {
  const [sliderName, setSliderName] = useState("");
  const [sliderUrl, setSliderUrl] = useState("");
  const [sliderImage, setSliderImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Slider Name:", sliderName);
    console.log("Slider URL:", sliderUrl);
    console.log("Slider Image:", sliderImage);
  };
  return (
    <div className="slider-form-container">
      <div className="slider-form-header">
        <h1>Offer</h1>
      </div>
      <form className="slider-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sliderName">Slider Name</label>
          <input
            type="text"
            id="sliderName"
            value={sliderName}
            onChange={(e) => setSliderName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sliderUrl">Slider URL</label>
          <input
            type="text"
            id="sliderUrl"
            value={sliderUrl}
            onChange={(e) => setSliderUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sliderImage">Slider Image</label>
          <input
            type="file"
            id="sliderImage"
            onChange={(e) => setSliderImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="submit-button01">
          Submit
        </button>
      </form>
    </div>
  );
};
