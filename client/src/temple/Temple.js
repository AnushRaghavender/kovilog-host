// eslint-disable-next-line
import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTemple } from "../actions/temple";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Temple.css";
import shankaranarayana from "../images/shankaranarayana.svg";
// eslint-disable-next-line
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import CommentForm from "./CommentForm";
import axios from "axios";
import { url } from "../Config";

const Temple = ({ getTemple, temple: { temple, loading }, match }) => {
  useEffect(() => {
    getTemple(match.params.id);
    // eslint-disable-next-line
  }, [getTemple]);

  // eslint-disable-next-line
  const [temples, setTemples] = useState([]);
  useEffect(() => {
    const fetchTemples = async () => {
      const { data } = await axios.get(url + "/api/temple");
      setTemples(data);
    };
    fetchTemples();
  }, []);

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      alert("Link Copied!");
    } catch (err) {
      console.log(err);
      alert("Error. Try again later.");
    }
  };

  const location = temple.location;
  const name = temple.temple_name;

  var Perumal = " ";
  var Thayar = " ";
  var Pushkarani = " ";
  var Vimanam = " ";

  if (temple.deity === "Vishnu") {
    Perumal = "Perumal";
    Thayar = "Thayar";
    Pushkarani = "Pushkarani";
    Vimanam = "Vimanam";
  }

  if (temple.deity === "Shiva") {
    Perumal = "Eswaran";
    Thayar = "Ambal";
    Pushkarani = "Theertham";
    Vimanam = "Vriksham";
  }

  return (
    <div>
      <Header />
      <Navbar />
      <div className="temple-body-container">
        <img className="t-image" src={temple.image} alt="temple-img" />

        <div className="Table-1">
          <p className="t-name">
            Temple Number &nbsp; : &nbsp; {temple.temple_number}
          </p>
          <p className="t-name">
            Temple Name &nbsp; : &nbsp; {temple.temple_name}
          </p>
          <p className="t-name">Deity &nbsp; : &nbsp; {temple.deity}</p>
          <p className="t-name">Location &nbsp; : &nbsp; {temple.location}</p>
          <p className="t-name">Timings &nbsp; : &nbsp; {temple.timings}</p>
          <p className="t-name">
            Auspicious Day &nbsp; : &nbsp; {temple.auspicious_day}
          </p>
          <p className="t-name">Address &nbsp; : &nbsp; {temple.address}</p>
        </div>
        <div className="Table-2">
          <p className="t-name">
            {Perumal} &nbsp; : &nbsp; {temple.perumal}
          </p>
          <p className="t-name">
            {Thayar} &nbsp; : &nbsp; {temple.thayar}
          </p>
          <p className="t-name">
            Temple Category &nbsp; : &nbsp; {temple.temple_category}
          </p>
          <p className="t-name">Mantra &nbsp; : &nbsp; {temple.mantra}</p>
          <p className="t-name">
            Architecture Style &nbsp; : &nbsp; {temple.architecture_style}
          </p>
          <p className="t-name">Built By &nbsp; : &nbsp; {temple.built_by}</p>
          <p className="t-name">Built In &nbsp; : &nbsp; {temple.built_in}</p>
          <p className="t-name">
            {Pushkarani} &nbsp; : &nbsp; {temple.pushkarani}
          </p>
          <p className="t-name">
            {Vimanam} &nbsp; : &nbsp; {temple.vimanam}
          </p>
          <p className="t-name">
            Saints Associated &nbsp; : &nbsp; {temple.saints_associated}
          </p>
          <p className="t-name">
            Sthala Puranam &nbsp; : &nbsp; {temple.sthala_puranam}
          </p>
        </div>

        <div className="Comments-Box">
          <h3 className="Comments-Heading">
            <u>
              {Array.isArray(temple.comments) && temple.comments.length}{" "}
              Comments
            </u>
          </h3>
          {Array.isArray(temple.comments) &&
            temple.comments
              .map((comment) => (
                <div className="Comments" key={comment._id}>
                  <p className="Comment-name">{comment.name}</p>
                  <p className="Comment-text">{comment.text}</p>
                  <p className="Comment-date">({comment.date})</p>
                </div>
              ))
              .slice(0, 5)}
        </div>
        <CommentForm templeId={temple._id} />

        <div className="Recommendation-System">
          <h3 className="Recommendation-Heading">
            <u>You May Also Like These Temples</u>
          </h3>
          {(() => {
            if (temple.deity === "Vishnu") {
              return (
                <div className="Rec-Temples">
                  {temples
                    .filter(
                      (temple) =>
                        temple.deity === "Vishnu" && temple.temple_name !== name
                    )
                    .map((temple) => (
                      <div className="Rec-Temple-card">
                        <a
                          href={`/temple/${temple._id}`}
                          target="_blank"
                          rel="noopener noreferrer">
                          <img
                            className="Rec-temple-image"
                            src={temple.image}
                            alt="temple-img"
                          />
                        </a>
                        <p className="Rec-temple-name">{temple.temple_name}</p>
                      </div>
                    ))
                    .sort(() => Math.random() - Math.random())
                    .slice(0, 2)}
                  {temples
                    .filter(
                      (temple) =>
                        temple.deity === "Shiva" && temple.location === location
                    )
                    .map((temple) => (
                      <div className="Rec-Temple-card">
                        <a
                          href={`/temple/${temple._id}`}
                          target="_blank"
                          rel="noopener noreferrer">
                          <img
                            className="Rec-temple-image"
                            src={temple.image}
                            alt="temple-img"
                          />
                        </a>
                        <p className="Rec-temple-name">{temple.temple_name}</p>
                      </div>
                    ))
                    .sort(() => Math.random() - Math.random())
                    .slice(0, 2)}
                </div>
              );
            } else {
              return (
                <div className="Rec-Temples">
                  {temples
                    .filter(
                      (temple) =>
                        temple.deity === "Shiva" && temple.temple_name !== name
                    )
                    .map((temple) => (
                      <div className="Rec-Temple-card">
                        <a
                          href={`/temple/${temple._id}`}
                          target="_blank"
                          rel="noopener noreferrer">
                          <img
                            className="Rec-temple-image"
                            src={temple.image}
                            alt="temple-img"
                          />
                        </a>
                        <p className="Rec-temple-name">{temple.temple_name}</p>
                      </div>
                    ))
                    .sort(() => Math.random() - Math.random())
                    .slice(0, 2)}
                  {temples
                    .filter(
                      (temple) =>
                        temple.deity === "Vishnu" &&
                        temple.location === location
                    )
                    .map((temple) => (
                      <div className="Rec-Temple-card">
                        <a
                          href={`/temple/${temple._id}`}
                          target="_blank"
                          rel="noopener noreferrer">
                          <img
                            className="Rec-temple-image"
                            src={temple.image}
                            alt="temple-img"
                          />
                        </a>
                        <p className="Rec-temple-name">{temple.temple_name}</p>
                      </div>
                    ))
                    .sort(() => Math.random() - Math.random())
                    .slice(0, 2)}
                </div>
              );
            }
          })()}
        </div>

        <button
          className="share-button"
          onClick={() => copyToClipBoard(window.location.href)}>
          Share Temple
        </button>

        <img
          className="shankaranarayana"
          src={shankaranarayana}
          alt="shankaranarayana"></img>
      </div>
      <Footer />
    </div>
  );
};

Temple.propTypes = {
  getTemple: PropTypes.func.isRequired,
  temple: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  temple: state.temple,
});

export default connect(mapStateToProps, { getTemple })(Temple);
