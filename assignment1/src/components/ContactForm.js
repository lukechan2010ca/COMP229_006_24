// 
// File Name: index.js
// Student's Name: Chi Wo Chan, Luke
// Student ID: 301369595
// Date: 28/9/2024
// 

// Section: import modules and components
import { useNavigate } from 'react-router-dom';

// Section: ContactForm component Definition
const ContactForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

  // Get the form data
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  
  // Log the form data
  console.log(data);

  // Redirect to the home page
  navigate('/');
}

// Return the form
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" required />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone (optional)</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows="4"></textarea>
      </div>
      <button type="submit" className="btn">
        Send Message
      </button>
    </form>
  );
};

// Section: export component
export default ContactForm;