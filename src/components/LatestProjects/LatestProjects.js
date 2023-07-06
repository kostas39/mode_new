import React from 'react';
import './LatestProjects.scss';
import Image1 from '../../assets/companyPhoto.jpeg';
import Image2 from '../../assets/heroimage1.jpeg';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const LatestProjects = () => {
  const strArray = ['Our', ' Latest', ' Projects'];

  return (
    <div className="latest-projects">
      <h2>
        <AnimatedLetters letterClass="animated-letter" strArray={strArray} index={0} />
      </h2>
      <div className="project-cards">
        <div className="project-card">
          <img src={Image1} alt="Project 1" />
          <h4>Project 1</h4>
          <p>Description of Project 1</p>
        </div>
        <div className="project-card">
          <img src={Image2} alt="Project 2" />
          <h4>Project 2</h4>
          <p>Description of Project 2</p>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
