import React, {Fragment, useState} from 'react';
import Footer from '../components/Footer';
import '../styles/Signin.css';
import harihara from '../images/harihara.svg';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../actions/auth';

const Signin = ({login, isAuthenticated}) => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const {email, password} = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  }

  //Redirect if logged in
  if(isAuthenticated) {
    return <Redirect to={'/temples'} />
  }

  return(
    <Fragment>
      <div className="Header">
        <Link className="link" to={'/'}><h1 className="KOVILOG">KOVILOG</h1></Link>
      </div>
      <div className="body-container">
        <img className="harihara" src={harihara} alt="harihara"></img>
        <form className="signin-form" onSubmit={e => onSubmit(e)}>
        <h2 className="signin-heading">Sign In</h2>
          <div className="signin-form-group">
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder='Enter Email'
              value={email}
              onChange={e => onChange(e)}
              required
              className="input-fields"
            />
          </div>
          <div className="signin-form-group">
            <input
              type="password"
              name="password"
              autoComplete="off"
              placeholder='Enter Password'
              value={password}
              onChange={e => onChange(e)}
              required
              className="input-fields"
            />
          </div>
        <button type="submit" className="sign-up-button">Sign In</button>
        <div className="Exisiting-account-box">
          <p className="Exisiting-account">Dont have an Account yet?</p>
          <Link to={'/signup'}><button type="submit" className="signin-btn">Sign Up</button></Link>
        </div>
        </form>
      </div>
    <Footer />
    </Fragment>
);
}

Signin.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {login}
)(Signin);
