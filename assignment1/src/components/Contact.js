// 
// File Name: index.js
// Student's Name: Chi Wo Chan, Luke
// Student ID: 301369595
// Date: 28/9/2024
// 

// Section: import components
import ContactForm from './ContactForm.js';


// Section: Contact component Definition
const Contact = () => {
  return (
    <div className="contact">
      <h1>My Contact</h1>
      <div className="contact-content">
        <div className="contact-info">
          <p>
            Feel free to contact for any inquiries or collaborations.<br />
            I'm always excited to work on new projects and meet fellow developers.
          </p>
          <div className="card">
            <h2>Contact Information</h2>
            <p>Email: cchan314@my.centennialcollege.ca</p>
            <p>Phone: (123) 456-7890</p>
            <p>Location: Ontario, Canada</p>
          </div>
        </div>
        <div className="contact-form-outter">
          <h3>Leave a Message</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

// Section: export component
export default Contact;