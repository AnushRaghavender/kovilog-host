import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/Locations.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import india from '../images/india.png';
import nepal from '../images/nepal.png';
import srilanka from '../images/srilanka.png';

const Locations = () => {

  return(
    <div>
    <Header />
    <Navbar />
    <div className="bucketlist-body-container">
      <h1 className="bucket-list-heading"><u>Locations</u></h1>
      <div className="Locations-box">
        <a href={'/nepal'}><img className="location-nepal" src={nepal} alt="nepal"></img></a>
        <a href={'/india'}><img className="location-india" src={india} alt="india"></img></a>
        <a href={'/srilanka'}><img className="location-srilanka" src={srilanka} alt="srilanka"></img></a>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Locations;
