import React from "react";
import "./Header.css";
import logo from "../../assets/mode_logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header_list">
        <ul className="header_list">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/services">SERVICES</a>
          </li>
          <li>
            <a href="/projects">PROJECTS</a>
          </li>
          <li>
            <a href="/construction">CONSTRUCTION</a>
          </li>
          <li>
            <a href="/about">ABOUT US</a>
          </li>
          <li>
            <a href="/contact">CONTACT US</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
