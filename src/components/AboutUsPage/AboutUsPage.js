import React from "react";
import './AboutUsPage.scss'

const AboutUsPage = () => {
  const isAboutUsRoute = window.location.pathname === "/about-us";

  if (!isAboutUsRoute) {
    return null; // Render nothing if the current route is not "/about-us"
  }

  return (
    <div>
      <h1 className="about_script">MODE is a UK-based, construction services company which focuses mainly on residential and commercial building developments. The company has built reputation for providing reliable, dependable services for high-class quality buildings and provide solutions to complex requirements.
OUR MISSION
To deliver high-quality, cost-effective projects on schedule, employing and supporting motivated, flexible and focused teams to achieve the best results. At Mode, we value the importance of our relationships, and we will continue to remain fair in our dealings with all employees, clients and suppliers.
OUR VALUES
To be ethical and deliver the best services regarding our client`s expectations.
Mode values its "one stop" solution approach which means that our clients enjoy the benefits of reduced "gap" management.</h1>
    </div>
  );
};

export default AboutUsPage;
