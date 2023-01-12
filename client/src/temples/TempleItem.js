import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import {addLike, removeLike, addLike1, removeLike1} from '../actions/temple';
import '../styles/TempleItem.css';
import bucket from '../images/icons/bucket.png';
import visited from '../images/icons/visited.png';
// eslint-disable-next-line
import comment from '../images/icons/comment.png';

const TempleItem = ({addLike1, removeLike1, addLike, removeLike, auth, temple: {_id, temple_name, temple_number, deity, image, likes, likes1, comments}}) =>
(
  <div className="Temple-card1">
    <Link to={`/temple/${_id}`} target="_blank"><img className="temple-image1" src={image} alt="temple-img"/></Link>
    <p className="temple-bucket-visited"><img className="bkt" src={bucket} alt="bkt"></img> : {likes.length} &nbsp;&nbsp; <img className="vst" src={visited} alt="vst"></img> : {likes1.length}</p>
    <p className="temple-name1">{temple_name}</p>
    <div className="social-buttons">
      <button className="add-bkt-button" onClick={ e => addLike(_id) }>Add To Bucket List &nbsp;<img className="bkt" src={bucket} alt="bkt"></img></button>
      <button className="add-vst-button" onClick={ e => addLike1(_id) }>Add To Visited List &nbsp;<img className="vst" src={visited} alt="vst"></img></button>
    </div>
  </div>
);

TempleItem.propTypes = {
  temple: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  addLike1: PropTypes.func.isRequired,
  removeLike1: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {addLike, removeLike, addLike1, removeLike1}
)(TempleItem);
