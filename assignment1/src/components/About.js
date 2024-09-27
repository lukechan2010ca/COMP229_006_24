import React from 'react';
import mypicture from "../assets/Luke.jpg"

const About = () =>{
    return (
        <div className="about">
          <h1>About Me</h1>
          <div className="about-content">
            <img src={mypicture} alt="Your Name" className="profile-image" />
            <div className="about-text">
              <h2>Chi Wo Chan, Luke</h2>
              <p>
                I'm a passionate developer with expertise in web and mobile application development.
                With a strong foundation in computer science and a keen eye for design, I strive to
                create elegant and efficient solutions to complex problems.
              </p>
              <a href="/path/to/your-resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
                Download Resume
              </a>
            </div>
          </div>
        </div>
    );
};

export default About;