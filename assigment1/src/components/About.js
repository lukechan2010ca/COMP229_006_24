import image_logo from "../../assets/myimage.jpg"

const About = () => {
    return (
        <div>
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
            <img
              src={myimage}
              alt="myphoto"
              className="w-64 h-64 object-cover rounded-full mb-4 md:mr-8"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Chi Wo Chan, Luke</h2>
              <p className="mb-4">
                I'm a passionate developer with expertise in web and mobile application development.
                With a strong foundation in computer science and a keen eye for design, I strive to
                create elegant and efficient solutions to complex problems.
              </p>
              <a
                href="/path/to/your-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
    );
};

export default About;