import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import logo from "../../assets/mode_logo.png"; // Assuming you have a logo image file named "logo.png" in the same directory

const Header = () => {
  return (
    <div className="header">
      <div className="social-icons">
        <a href="https://www.instagram.com/modeconstruction/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/mode-construction-services-ltd-a86753254/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      {/* <img src={logo} alt="Logo" className="logo" />
      <h1>Mode Construction Services Ltd</h1> */}
    </div>
  );
};

export default Header;
