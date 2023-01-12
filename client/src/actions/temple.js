import axios from "axios";
import {
  GET_TEMPLES,
  GET_TEMPLE,
  TEMPLE_ERROR,
  UPDATE_LIKES,
  UPDATE_LYKES,
  ADD_COMMENT,
} from "./types";
import { url } from "../Config";

//Get temples
export const getTemples = () => async (dispatch) => {
  try {
    const res = await axios.get(url + "/api/temple");
    dispatch({
      type: GET_TEMPLES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TEMPLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get temple individual
export const getTemple = (id) => async (dispatch) => {
  try {
    const res = await axios.get(url + `/api/temple/${id}`);
    dispatch({
      type: GET_TEMPLE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TEMPLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(url + `/api/temple/like/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
    alert("Added to Bucket List.");
    window.location.reload();
  } catch (err) {
    alert("Added to Bucket List.");
    window.location.reload();
  }
};

//Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(url + `/api/temple/unlike/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
    alert("Removed from Bucket List.");
    window.location.reload();
  } catch (err) {
    dispatch({
      type: TEMPLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add like1
export const addLike1 = (id) => async (dispatch) => {
  try {
    const res = await axios.put(url + `/api/temple/like1/${id}`);
    dispatch({
      type: UPDATE_LYKES,
      payload: { id, likes: res.data },
    });
    alert("Added to Visited List.");
    window.location.reload();
  } catch (err) {
    alert("Added to Visited List.");
    window.location.reload();
  }
};

//Remove like1
export const removeLike1 = (id) => async (dispatch) => {
  try {
    const res = await axios.put(url + `/api/temple/unlike1/${id}`);
    dispatch({
      type: UPDATE_LYKES,
      payload: { id, likes: res.data },
    });
    alert("Removed from Visited List.");
    window.location.reload();
  } catch (err) {
    dispatch({
      type: TEMPLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add Comment
export const addComment = (templeId, formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      url + `/api/temple/comment/${templeId}`,
      formData,
      config
    );
    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
    alert("Comment Added.");
  } catch (err) {
    dispatch({
      type: TEMPLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
