import project1Image from '../assets/project1-image.jpg';
import project2Image from '../assets/project2-image.jpg';
import project3Image from '../assets/project3-image.jpg';

const projects = [
  {
    title: 'Project 1',
    image: project1Image,
    description: 'A brief description of Project 1 and your role in it.',
  },
  {
    title: 'Project 2',
    image: project2Image,
    description: 'A brief description of Project 2 and your role in it.',
  },
  {
    title: 'Project 3',
    image: project3Image,
    description: 'A brief description of Project 3 and your role in it.',
  },
];

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
              </div>
            ))}
          </div>
        </div>
      );
}
export default Projects;