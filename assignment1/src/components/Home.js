// 
// File Name: index.js
// Student's Name: Chi Wo Chan, Luke
// Student ID: 301369595
// Date: 28/9/2024
// 

// Section: import components
import { Link } from 'react-router-dom';


// Section: Home component Definition
const Home = () => {
    return (
      <div className="home">
        <h1>Welcome to <span className="brand">Luke Chan</span> profile</h1>
        <div className="mission">
          <h3>Mission</h3>
          <p>
            I'm a passionate developer creating innovative solutions.<br />
            My dream is to create a better world through innovative solutions and dedicated service.
          </p>
        </div>
        <div className="quote">
          <p>"Stay hungry. Stay foolish."<br />- Steve Jobs</p>
        </div>
        <Link to="/about" className="btn">About Me</Link>
      </div>
    );
};

// Section: export component
export default Home;
