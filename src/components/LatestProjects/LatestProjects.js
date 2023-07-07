import React from 'react';
import './LatestProjects.scss';
import { useEffect, useState } from 'react';
import Image1 from '../../assets/companyPhoto.jpeg';
import Image2 from '../../assets/heroimage1.jpeg';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './LatestProjects.scss';


const LatestProjects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="latest-projects">
      <h2>
      <AnimatedLetters
            letterClass={letterClass}
            strArray={['O', 'u', 'r', ' ', 'L', 'a', 't', 'e', 's', 't', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            index={30}
          />
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
