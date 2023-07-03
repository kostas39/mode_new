import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/mode_logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
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
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <a href="/construction">CONSTRUCTION</a>
          </li>
          <li>
            <Link to="/about-us">ABOUT US</Link>
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
