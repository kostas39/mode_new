import React from "react";
import "./CompanyInfo.scss";
import logo2 from "../../assets/CompanyInfo_logo.jpg";

const CompanyInfo = () => {
  const email = "admin@modeconstruction.co.uk";

  return (
    <div className="company-info">
      <div className="company-info-logo">
        <img src={logo2} alt="Logo" className="logo2" />
        <div className="founder-description">
          <h3>Founder's Description</h3>
          <p>
           I will replace this one
          </p>
        </div>
      </div>
      <div className="contact-details">
        <h3>Contact Details</h3>
        <p>Address: 19 Wickliffe Avenue, London N3 3EL</p>
        <p>Phone: +44 7768765771</p>
        <p>
          Email:{" "}
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            {email}
          </a>
        </p>
      </div>
    </div>
  );
};

export default CompanyInfo;
