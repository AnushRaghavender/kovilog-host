// eslint-disable-next-line
import React, {Fragment, useState} from 'react';
import Footer from '../components/Footer';
import '../styles/Landing.css';
import harihara from '../images/harihara.svg';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <div className="Header">
        <Link className="link" to={'/'}><h1 className="KOVILOG">KOVILOG</h1></Link>
      </div>
      <div className="body-container">
        <img className="harihara" src={harihara} alt="harihara"></img>
        <div className="welcome-box">
          <h2 className="welcome-heading">Welcome to <Link className="Kovilog" to={'/information'}>KOVILOG</Link> !</h2>
          <p className="welcome-text">A new, unique & exciting platform for you to interact with the <br className="tagline-break"/> ancient temples of India.</p>
          <Link to={'/signin'}><button type="submit" className="signin-button">Sign In</button></Link>
          <Link to={'/signup'}><button type="submit" className="signup-button">Sign Up</button></Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
