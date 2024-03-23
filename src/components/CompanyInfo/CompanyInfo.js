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
           I am a highly experienced and skilled professional with over 20 years of experience in the construction industry. I have worked on a wide range of projects, from small residential properties to large commercial buildings. I am passionate about delivering high-quality work and providing excellent customer service. I am committed to ensuring that every project is completed on time and within budget. I take great pride in my work and strive to exceed my clients' expectations. I look forward to working with you on your next project.
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
