import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/Deities.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import shiva from '../images/shiva.png';
import vishnu from '../images/vishnu.png';

const Deities = () => {

  return(
    <div>
    <Header />
    <Navbar />
    <div className="bucketlist-body-container">
      <h1 className="bucket-list-heading"><u>Deities</u></h1>
      <div className="Deities-box">
        <a href={'/shiva'}><img className="shiva-deity" src={shiva} alt="shiva"></img></a>
        <a href={'/vishnu'}><img className="vishnu-deity" src={vishnu} alt="vishnu"></img></a>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Deities;
