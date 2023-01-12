import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from "./types";
import setAuthToken from "../utilities/setAuthToken";
import { url } from "../Config";

//Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(url + "/api/authentication");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Register user
export const register =
  ({ name, email, password, age, gender, country }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      name,
      email,
      password,
      age,
      gender,
      country,
    });

    try {
      const res = await axios.post(url + "/api/users", body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
      alert("Registration Successful.");
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => alert(error.msg));
      }

      dispatch({
        type: REGISTER_FAILURE,
      });
      alert("Registration Failed.");
    }
  };

//Login user
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(url + "/api/authentication", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    alert("Login Successful.");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => alert(error.msg));
    }

    dispatch({
      type: LOGIN_FAILURE,
    });
    alert("Login Failed.");
  }
};

//Logout User
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
