import React from "react";
import './AboutUsPage.scss'

const AboutUsPage = () => {
  const isAboutUsRoute = window.location.pathname === "/about-us";

  if (!isAboutUsRoute) {
    return null; // Render nothing if the current route is not "/about-us"
  }

  return (
    <div>
      <h1 className="about_script">I will change this script</h1>
    </div>
  );
};

export default AboutUsPage;
