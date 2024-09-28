// 
// File Name: index.js
// Student's Name: Chi Wo Chan, Luke
// Student ID: 301369595
// Date: 28/9/2024
// 

// Section: import components
import project1Image from '../assets/project1-image.jpg';
import project2Image from '../assets/project2-image.jpg';
import project3Image from '../assets/project3-image.jpg';

// Section: Projects data Definition
const projects = [
  {
    title: 'Investment Mobile App',
    image: project1Image,
    description: 'This mobile app allows users to view real-time stock information and execute trades directly from their devices. The app features a user-friendly interface, personalized dashboards, and advanced charting tools, empowering users to make informed investment decisions on the go. The app was successful, resulting in high user engagement and positive feedback.',
    myRole: 'Project Manager',
  },
  {
    title: 'Cooking Guide Web and Mobile App',
    image: project2Image,
    description: 'A comprehensive cooking guide app that enables users to search for a wide variety of recipes. The app features detailed cooking instructions, video tutorials, and social media integration for sharing recipes. Users can create shopping lists and meal plans based on their dietary preferences. Currently in the design stage, focusing on user experience and functionality of the recipe search and video features.',
    myRole: 'Designer and Developer',
  },
  {
    title: 'Workout App',
    image: project3Image,
    description: 'This workout application helps users create personalized workout schedules and access a library of exercises. The app includes features for tracking workout progress and calculating nutritional intake to meet specific weight goals. Currently in the design stage, developing the Content, UI and ensuring an intuitive user experience.',
    myRole: 'Designer and Developer',
  },
];

// Section: Projects component Definition
const Projects = () => {
    return (
        <div className="projects">
          <h1>My Projects</h1>
          <div className="grid">
            {projects.map((project, index) => (
              <div key={index} className="card">
                <img src={project.image} alt={project.title} className="project-image" />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p><strong>My Role:</strong> {project.myRole}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

// Section: export component
export default Projects;