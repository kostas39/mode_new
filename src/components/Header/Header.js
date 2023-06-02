import React from "react";
import "./Header.css";
import logo from "../../assets/mode_logo.png"; // Assuming you have a logo image file named "logo.png" in the same directory

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Mode Constructions Services Ltd</h1>
    </div>
  );
};

export default Header;
