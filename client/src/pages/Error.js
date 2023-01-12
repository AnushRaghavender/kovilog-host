import '../styles/Error.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import temple from '../images/temple.png';

function Landing() {
  return (
    <div>
      <h1 className="error-heading">Error 404!</h1>
      <p className="error-text">Broken Link. Page Not Found.</p>
      <img className="temple" src={temple} alt="harihara"></img>
      <Link className="home-button" to={'/temples'}>Home</Link>
    </div>
  );
}

export default Landing;
