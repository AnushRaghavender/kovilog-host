// eslint-disable-next-line
import React, {Fragment, useState} from 'react';
import Footer from '../components/Footer';
import '../styles/Information.css';
import ganapathi from '../images/ganapathi.svg';
import guru from '../images/guru.png';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Information() {
  return (
    <>
      <div className="Header">
        <Link className="link" to={'/'}><h1 className="KOVILOG">KOVILOG</h1></Link>
      </div>
      <div className="body-container">
        <h1 className="about-heading"><u>Information</u></h1>
        <img className="ganapathi" src={ganapathi} alt="ganapathi"></img>
        <h4 className="guru-heading">श्री गुरुभ्यो नमः</h4>
        <div className="about-box">
          <h4 className="acknowledgements-heading"><u>Acknowledgements</u></h4>
          <p className="about-contents">
            With the blessings of my Acharyals, Their Holiness - <a className="acharya-link" href="https://en.wikipedia.org/wiki/Gnanananda_Giri" target="_blank" rel="noopener noreferrer">Jagadguru Gnanananda Giri
            (Shankaracharya of Jyotir Math)</a>, <a className="acharya-link" href="https://en.wikipedia.org/wiki/Chandrashekarendra_Saraswati" target="_blank" rel="noopener noreferrer">Jagadguru Chandrashekarendra Saraswati
            (Shankaracharya of Kanchi Math)</a> & <a className="acharya-link" href="https://en.wikipedia.org/wiki/Abhinava_Vidyatirtha" target="_blank" rel="noopener noreferrer">Jagadguru Abhinava Vidyatirtha (Shankaracharya
            of Sringeri Math)</a>, I have developed this web-application as part of my final year project at The Indian Institute of Information Technology, Design and Manufacturing,
            Kancheepuram.
          </p>
          <p className="about-contents">
            First and foremost, I would like to thank Almighty God for giving me the strength, knowledge, ability, opportunity and responsibility to
            undertake this project. I thank everyone at IIITD&M Kancheepuram, especially my project guide, <a className="acharya-link" href="https://www.iiitdm.ac.in/People/displayProfileFaculty.php?sadagopan@iiitdm.ac.in" target="_blank" rel="noopener noreferrer">
            Dr. Sadagopan Narasimhan (Head of Computer Science & Engineering Department)</a> for providing me with the resources, motivation and guidance to do this project.
            Finally, I would like to thank my parents, family and friends for always supporting, encouraging and believing in me.
          </p>
          <h4 className="acknowledgements-heading"><u>About</u></h4>
          <p className="about-contents">
            This is a social-media web-application with the main focus being on ancient Temples of India. The main objective of this project is to promote Temple Tourism in India.
          </p>
          <p className="about-contents">
            I have used 2 main categories of temples as material. The temples are called 108 Divya Kshetrams and 276 Thevara Sthalams. These Vishnu and Shiva temples were praised and recorded
            in the books called Divyaprabandham and Thevaram by Tamil poet-saints called Azhwars and Nayanmars who lived between the 6th & 10th Century AD. These temples are revered
            pilgrimage sites having a great historical background.
          </p>
          <p className="about-contents">
            This project is mutually beneficial to the 2 main stakeholders - The Tourists & The Temples.
            The tourists get a well-designed platform with detailed information about the temples in English which will help them to overcome the language barrier and reduce
            dependence on tour guides, especially in remote areas. They will also have a platform & community to share their experiences.
            The temples get revenue due to the cash inflow from increased tourism. This will help them to obtain resources for restoration and maintenance.
          </p>
          <p className="about-contents">
            I chose this project because I wanted to utilize the knowledge I have gained over these 5 years and give something back to my community.
            This web-application is completely free and non-profit and will continue to remain so forever.
          </p>
          <h4 className="acknowledgements-heading"><u>Usage</u></h4>
          <p className="about-contents">
            To use the web-application, users need to have a registered account. New users can sign-up and exisiting users can sign-in to use the web-application.
            After sign-in/sign-up, users will be redirected to the temples page, where all the temples in the database will be displayed.<br /><br />
            If a user wants to visit a temple,
            they can add it to their bucket-list. If the user has already visited the temple, they can add it to their
            visited-list. Users can utilize the search bar where the matching keywords entered will filter
            the appropriate temples from the database. If a temple's picture is clicked on the temples page, users will be redirected to that specific temple's page
            where they can view the temple information, add comments and share the temple's link. There is also a recommendation system to view similar temples based on deity and location.
            <br /><br />Users can make use of the filter by deities (Shiva, Vishnu) and filter by locations (India, Nepal, Sri Lanka) functionality, which will display temples belonging to that particular category.
            Users can also make use of the bucket-list page and visited-list page to view all the temples they have added to their collection, and if needed, remove a temple
            from their collection. Users can also make new temple suggestions.
          </p>
          <h3 className="thanks-heading">Thanks & Enjoy</h3>
          <img className="guru" src={guru} alt="guru"></img>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Information;
