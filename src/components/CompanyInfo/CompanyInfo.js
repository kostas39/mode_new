import React from "react";
import "./CompanyInfo.css";
import logo2 from "../../assets/CompanyInfo_logo.jpg"

const CompanyInfo = () => {
  return (
    <div className="company-info">
      <div className="company-info-logo"> {/* Updated class name here */}
        <img src={logo2} alt="Logo" className="logo2" />
        <div className="founder-description">
          <h3>Founder's Description</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tristique massa,
            ut vestibulum odio accumsan eget.</p>
        </div>
      </div>
      <div className="contact-details">
        <h3>Contact Details</h3>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Phone: +1 123-456-7890</p>
        <p>Email: info@company.com</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
