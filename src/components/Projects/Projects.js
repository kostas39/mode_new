import React, { useState, useEffect } from "react";
import "./Projects.css";

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className={`project-list ${windowWidth < 768 ? "mobile" : "desktop"}`}>
      <iframe src="https://my.matterport.com/show/?m=Rmnr8V6DseJ" width="100%" height="600px" frameborder="0" allowfullscreen allow="xr-spatial-tracking"></iframe>

        {/* Render project items */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Projects;
