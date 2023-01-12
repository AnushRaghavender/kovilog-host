import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/AddTemple.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import emailjs from 'emailjs-com';

export default function TempleSuggestion() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_avwlsx4', 'template_gbdne7i', e.target, 'user_NxDtzWD8nk3IZmR4HInVv')
      .then((result) => {
         alert("Suggestion sent successfully.");
          window.location.reload()
      }, (error) => {
          console.log(error.text);
          alert("Suggestion failed to send. Please try again later.");
      });
  }

  return (
    <>
    <Header />
    <Navbar />
      <div className="bucketlist-body-container">
        <h1 className="bucket-list-heading"><u>Temple Suggestions</u></h1>
        <form className="temple-suggestion-form" onSubmit={sendEmail}>
          <br /><input className="input-fields" type="text" name="user_name" autoComplete="off" required placeholder='Enter Your Name'/><br /><br />
          <input className="input-fields" type="email" name="user_email" autoComplete="off" required placeholder='Enter Your Email'/><br /><br />
          <input className="input-fields" type="text" name="temple_name" autoComplete="off" required placeholder='Enter Temple Name'/><br /><br />
          <input className="input-fields" type="text" name="deity" autoComplete="off" required placeholder='Enter Temple Deity'/><br /><br />
          <input className="input-fields" type="text" name="location" autoComplete="off" required placeholder='Enter Temple Location'/><br /><br />
          <button className="submit-temple-button" type="submit" value="Submit">Submit</button><br />
        </form>
      </div>
      <Footer />
    </>
  );
}
