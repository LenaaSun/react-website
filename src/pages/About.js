import React from 'react';
import './About.css';
import me from '../assets/me.jpeg';


function About() {
  return (
    <div className="about">
      <div className="about-container">
        <img src={me} alt="Portrait" className="profile-pic" />
        <h1>About Me</h1>
        <p>
          Hi! I’m a Computer Science and Economics student passionate about understanding
          how technology, data, and human behavior intersect. I am currently attending Queen's University
          and enjoy building software, analyzing systems, and exploring how computational thinking can solve
          problems.
        </p>
      </div>
    </div>
  );
}

export default About;
