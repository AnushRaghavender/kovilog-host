import React from 'react';
import '../styles/Header.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <Link className="link" to={'/temples'}><h1 className="KOVILOG">KOVILOG</h1></Link>
    </div>
  );
}

export default Header;
