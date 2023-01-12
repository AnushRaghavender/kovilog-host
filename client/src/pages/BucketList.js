import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/BucketList.css";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeLike } from "../actions/temple";
import axios from "axios";
import { loadUser } from "../actions/auth";
import { url } from "../Config";

const BucketList = ({ loadUser, removeLike }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(url + "/api/authentication");
      setUser(data);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="bucketlist-body-container">
        <h1 className="bucket-list-heading">
          <u>Bucket List</u>
        </h1>
        {Array.isArray(user.likes) &&
          user.likes.map((u) => (
            <div key={u._id} className="Temple-card">
              <a
                href={`/temple/${u.temple}`}
                target="_blank"
                rel="noopener noreferrer">
                <img className="temple-image" src={u.image} alt="temple-img" />
              </a>
              <p className="temple-name">{u.name}</p>
              <button
                className="remove-button"
                onClick={(e) => removeLike(u.temple)}>
                Remove
              </button>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

BucketList.propTypes = {
  loadUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  removeLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { removeLike, loadUser })(BucketList);
