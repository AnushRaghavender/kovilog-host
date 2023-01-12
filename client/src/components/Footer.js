import React from 'react';
import '../styles/Footer.css';

function Footer() {
  var d = new Date();
  var year = d.getFullYear();
  return (
    <div className="Footer">
      <p className="Copyright">Jai Shri Ram &nbsp;|&nbsp; Copyright &copy; <a className="Anush-Raghavender" href="https://anush-raghavender.github.io/profile" target="_blank" rel="noopener noreferrer">Anush Raghavender</a> {year} &nbsp;|&nbsp; All Rights Reserved</p>
    </div>
  );
}

export default Footer;
