import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="home">
        <h1>Welcome to my Portfolio </h1>
        <p className="lead">I'm a passionate developer creating innovative solutions.</p>
        <div className="mission">
          <h3>My Mission</h3>
          <p>
            My mission is to create a better world through innovative solutions and dedicated service.
          </p>
        </div>
        <Link to="/about" className="btn">Learn More About Me</Link>
      </div>
    );
};

export default Home;
