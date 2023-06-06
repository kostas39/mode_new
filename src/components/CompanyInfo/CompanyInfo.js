import React from "react";
import "./CompanyInfo.css";

const CompanyInfo = () => {
  return (
    <div className="company-info">
      <div className="founder-description">
        <h3>Founder's Description</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tristique massa, ut vestibulum odio accumsan eget.</p>
      </div>
      <div className="contact-details">
        <h3>Contact Details</h3>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Phone: +1 123-456-7890</p>
        <p>Email: info@company.com</p>
      </div>
      <div className="social-links">
        <h3>Follow Us</h3>
        <div className="icon-links">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="mailto:info@company.com"><i className="far fa-envelope"></i></a>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
