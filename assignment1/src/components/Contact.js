import ContactForm from './ContactForm.js';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Keep in Touch</h2>
          <p>
            Feel free to reach out to me for any inquiries or collaborations.<br />I'm always excited
            to work on new projects and meet fellow developers.
          </p>
          <div className="card">
            <h3>Contact Information</h3>
            <p>Email: cchan314@my.centennialcollege.ca</p>
            <p>Phone: (123) 456-7890</p>
            <p>Location: City, Country</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Me a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;