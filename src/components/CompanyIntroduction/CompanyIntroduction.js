// CompanyIntroduction.js
import React from "react";
import "./CompanyIntroduction.scss";
import companyPhoto from "..//..//assets/companyPhoto.jpeg";
import { Link } from "react-router-dom";

const CompanyIntroduction = () => {
  return (
    <div className="company-introduction">
      <div className="heading-container">
        <h2 className="heading">About Our Company</h2>
      </div>
      <div className="left-half">
        <div className="left-half-content">
          <p>
            We are MODE CONSTRUCTION SERVICES LTD. A Construction Company who have been Established since 2007.
            Based in North London we have a huge outreach all over the capital and are ready to undertake
            any Construction Project large or small. Being at the forefront of modern Construction practices
            we have seen the changes in architecture over the years.

            With the recent advancement of technology and Construction methods, the way we build has never been
            more efficient or safe. We make sure that our Clients, Staff, and Contractors are all protected
            throughout this process.
          </p>
          <Link to="/about-us" className="about-us-button">About Us</Link>
        </div>
      </div>
      <div className="right-half">
        <img src={companyPhoto} alt="Company" />
      </div>
    </div>
  );
};

export default CompanyIntroduction;
