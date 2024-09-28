// 
// File Name: index.js
// Student's Name: Chi Wo Chan, Luke
// Student ID: 301369595
// Date: 28/9/2024
// 

// Section: Importing Assets and Icons
import mypicture from "../assets/Luke.jpg"
import lukeresume from "../assets/lukeresume.pdf";
import { FaCode, FaJava, FaJs, FaCss3Alt, FaHtml5, FaReact, FaDatabase } from 'react-icons/fa';

// Section: Functional Component
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
              <a href={lukeresume} target="_blank" rel="noopener noreferrer" className="btn">
                View Resume
              </a>
              
            </div>
            <div className="skills">
            <h3>Skills</h3>
            <ul className="skills-list">
              <li>
                <FaCode className="skill-icon" /> .NET
              </li>
              <li>
                <FaJava className="skill-icon" /> Java
              </li>
              <li>
                <FaJs className="skill-icon" /> JavaScript
              </li>
              <li>
                <FaCss3Alt className="skill-icon" /> CSS
              </li>
              <li>
                <FaHtml5 className="skill-icon" /> HTML
              </li>
              <li>
                <FaReact className="skill-icon" /> React
              </li>
              <li>
                <FaDatabase className="skill-icon" /> Oracle DB
              </li>
            </ul>
          </div>
          </div>
          
        </div>
    );
};

// Section: Export
export default About;