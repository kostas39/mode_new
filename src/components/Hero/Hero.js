import React from "react";
import "./Hero.css";
import heroImage from "../../assets/hero_image.jpeg"; // Assuming you have a hero image file named "hero_image.jpg" in the assets folder

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="content">
        <h1>Welcome to Mode Construction Services Ltd</h1>
        <p>Your trusted partner in construction projects</p>
      </div>
    </div>
  );
};

export default Hero;
