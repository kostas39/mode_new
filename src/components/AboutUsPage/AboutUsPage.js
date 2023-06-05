import React from "react";

const AboutUsPage = () => {
  const isAboutUsRoute = window.location.pathname === "/about-us";

  if (!isAboutUsRoute) {
    return null; // Render nothing if the current route is not "/about-us"
  }

  return (
    <div>
      <h1>We are MODE CONSTRUCTION SERVICES LTD. A Construction Company who have been Established since 2007.
        Based in North London we have a huge outreach all over the capital and are ready to undertake any
        Construction Project large or small. Being at the forefront of modern Construction
        practices we have seen the changes in architecture over the years. With the recent advancement
        of technology and Construction methods, the way we build has never been more efficient or safe.
        We make sure that our Clients, Staff, and Contractors are all protected throughout this process.</h1>
      {/* Add the rest of your content */}
    </div>
  );
};

export default AboutUsPage;
