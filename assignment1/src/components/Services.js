import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive and user-friendly websites using modern technologies.',
    icon: '🌐',
  },
  {
    title: 'Mobile App Development',
    description: 'Building native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually appealing user interfaces and experiences.',
    icon: '🎨',
  },
  {
    title: 'Database Design',
    description: 'Architecting efficient and scalable database solutions for various applications.',
    icon: '💾',
  },
];

const Services = () => {
    return (
      <div className="services">
        <h1>My Services</h1>
        <div className="grid">
          {services.map((service, index) => (
            <div key={index} className="card">
              <div className="service-icon"></div>
              <h2>{service.icon}{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Services;
