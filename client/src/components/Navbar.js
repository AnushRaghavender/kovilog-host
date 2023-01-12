import React from 'react';
import '../styles/Navbar.css';
import temple from '../images/icons/temple.png';
import deity from '../images/icons/deity.png';
import location from '../images/icons/location.png';
import visited from '../images/icons/visited.png';
import bucket from '../images/icons/bucket.png';
import user from '../images/icons/user.png';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../actions/auth';

const Navbar = ({auth : {isAuthenticated, loading}, logout}) => {
  return (
    <div className="Navbar">
      <div className="Filter-Navbar">
        <a href='/deities'><img className="Deity" src={deity} alt="deity"></img></a>
        <a href='/locations'><img className="Location" src={location} alt="location"></img></a>
      </div>
      <div className="User-Navbar">
        <a href='/visitedlist'><img className="Flag" src={visited} alt="visited"></img></a>
        <a href='/bucketlist'><img className="Bucket" src={bucket} alt="bucket"></img></a>
        <a href='/templesuggestions'><img className="add-Temple" src={temple} alt="search"></img></a>
        <a onClick={logout} href='/'><img className="User" src={user} alt="user"></img></a>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {logout}
)(Navbar);
