import React from "react";
import "./CompanyIntroduction.css"
import companyPhoto from "..//..//assets/companyPhoto.jpeg"

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
          <button className="about-us-button">About Us</button>
        </div>
      </div>
      <div className="right-half">
        <img src={companyPhoto} alt="Company" />
      </div>
    </div>
  );
};


export default CompanyIntroduction;
