import React from 'react';

const projects = [
    {
      title: 'Project 1',
      image: '/path/to/project1-image.jpg',
      description: 'A brief description of Project 1 and your role in it.',
    },
    {
      title: 'Project 2',
      image: '/path/to/project2-image.jpg',
      description: 'A brief description of Project 2 and your role in it.',
    },
    {
      title: 'Project 3',
      image: '/path/to/project3-image.jpg',
      description: 'A brief description of Project 3 and your role in it.',
    },
];

const Projects = () => {
    return (
        <div>
          <h1 className="text-3xl font-bold mb-8">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Projects;