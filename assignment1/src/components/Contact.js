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
      <h1>Contact Me</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Let's talk</h2>
          <p>
            Feel free to reach out to me for any inquiries or collaborations.<br />I'm always excited
            to work on new projects and meet fellow developers.
          </p>
          <div className="card">
            <h3>Contact Information</h3>
            <p>Email: cchan314@my.centennialcollege.ca</p>
            <p>Phone: (123) 456-7890</p>
            <p>Location: Ontario, Canada</p>
          </div>
        </div>
        <div className="contact-form-outter">
          <h2>Send Me a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

// Section: export component
export default Contact;