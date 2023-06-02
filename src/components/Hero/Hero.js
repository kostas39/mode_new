import React from "react";
import "./Hero.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import heroImage1 from "../../assets/heroimage1.jpeg"; // Assuming you have a hero image file named "hero_image.jpg" in the assets folder
import heroImage2 from "../../assets/heroimage2.jpeg";
import heroImage3 from "../../assets/heroimage3.jpeg";


const Hero = () => {
  return (
    <div className="hero">
      <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000} transitionTime={500}>
        <div className="slide">
          <img src={heroImage1} alt="Hero" />
          <div className="content">
            <h1>Welcome to Mode Construction Services Ltd</h1>
            <p>Your trusted partner in construction projects</p>
          </div>
        </div>
        <div className="slide">
          <img src={heroImage2} alt="Hero" />
          <div className="content">
            <h1>Another Slide</h1>
            <p>Description of the second slide</p>
          </div>
        </div>
        <div className="slide">
          <img src={heroImage3} alt="Hero" />
          <div className="content">
            <h1>Third Slide</h1>
            <p>Description of the third slide</p>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  );
};




export default Hero;
