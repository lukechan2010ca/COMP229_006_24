// 
// File Name: index.js
// Student's Name: Chi Wo Chan, Luke
// Student ID: 301369595
// Date: 28/9/2024
// 

// Section: services data Definition
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

// Section: Services component Definition
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

// Section: export component
export default Services;
