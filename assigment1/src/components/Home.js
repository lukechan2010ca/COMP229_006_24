import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl mb-8">I'm a passionate developer creating innovative solutions.</p>
      <div className="mb-8">
        <h2>- Mission -</h2>
        <p>"My mission is to make a better world through innovative solutions and dedicated service."</p>
      </div>
      <Link to="/about" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Learn More About Me
      </Link>
    </div>
  );
};

export default Home;
