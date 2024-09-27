import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div>
          <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-4">
                Feel free to reach out to me for any inquiries or collaborations. I'm always excited
                to work on new projects and meet fellow developers.
              </p>
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                <p>Email: your.email@example.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Location: City, Country</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
    );
};

export default Contact;
