import axios from "axios";
import * as actionTypes from "./ActionTypes.js";
import AuthService from "../services/authService";

// AUTH : update state after login and getting the Auth from local storage

// POST :  User Login
export const loginAction = (inputValue) => (dispatch) => {
  console.log("start LOGIN");
  AuthService.login(inputValue)
    .then((res) => {
      dispatch({
        type: actionTypes.USER_SIGN_IN,
        payload: res,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.USER_SIGN_IN_ERROR,
        payload: error.response.data,
      });
    });
};
// export const loginAction = (inputValue) => (dispatch) => {
//   axios
//     .post(process.env.REACT_APP_API_URL + "login", inputValue)
//     .then((res) => {
//       dispatch({
//         type: actionTypes.USER_SIGN_IN,
//         payload: res,
//       });
//     })
//     .catch((error) => {
//       dispatch({
//         type: actionTypes.USER_SIGN_IN_ERROR,
//         payload: error.response.data,
//       });
//     });
// };

// POST : User Register

export const registerAction = (inputValue) => (dispatch) => {
  axios
    .post(process.env.REACT_APP_API_URL + "register", inputValue)
    .then((res) => {
      dispatch({
        type: actionTypes.USER_REGISTER,
        payload: res,
      });
      // return Promise.resolve();
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.USER_REGISTER_ERROR,
        payload: error.response.data,
      });
      // return Promise.reject();
    });
};
