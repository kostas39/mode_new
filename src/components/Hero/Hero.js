import React, { useState, useEffect } from 'react';import "./Hero.css";
import heroImage1 from "../../assets/heroimage1.jpeg"; // Assuming you have a hero image file named "hero_image.jpg" in the assets folder
import heroImage2 from "../../assets/heroimage2.jpeg";
import heroImage3 from "../../assets/heroimage3.jpeg";


const Hero = () => {
  const images = [heroImage1, heroImage2, heroImage3];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="banner">
      <img src={images[currentImage]} alt="Banner" />
    </div>
  );
};




export default Hero;
