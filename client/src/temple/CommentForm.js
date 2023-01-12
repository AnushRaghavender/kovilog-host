// eslint-disable-next-line
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/CommentForm.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import {addComment} from '../actions/temple';

const CommentForm = ({addComment, templeId}) => {

  const [text, setText] = useState('');

  return (
    <div>
    <form className="add-comment-form" onSubmit={e => {e.preventDefault(); addComment(templeId, {text}); setText('');}}>
      <textarea className="comment-text-box" placeholder="Add Comment" value={text} onChange={e => setText(e.target.value)}/><br /><br />
      <input className="comment-button" type="submit" value="Comment" />
    </form>
    </div>
  );
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
}

export default connect(
  null,
  {addComment}
)(CommentForm);
