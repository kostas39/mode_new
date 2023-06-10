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
        {/* Render project items */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Projects;
