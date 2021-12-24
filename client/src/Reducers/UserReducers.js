import * as actionTypes from "../Actions/ActionTypes";
import authlocalStorage from "../Auth";
const initialState = {
  user: authlocalStorage(),
  data: null,
  messageError: null,
  successRequest: false,
  isLoggedIn: authlocalStorage() ? true : false,
};

const userLogin = (state, action, status) => {
  // localStorage

  return status
    ? {
        ...state,
        isLoggedIn: true,
        data: action.payload,
        successRequest: true,
      }
    : {
        ...state,
        messageError: action.payload,
        successRequest: true,
        isLoggedIn: false,
      };
};

const userRegister = (state, action, status) => {
  return status
    ? {
        ...state,
        data: action.payload,
        successRequest: true,
        isLoggedIn: false,
      }
    : {
        ...state,
        messageError: action.payload,
        successRequest: true,
        isLoggedIn: false,
      };
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGN_IN:
      return userLogin(state, action, true);
    case actionTypes.USER_SIGN_IN_ERROR:
      return userLogin(state, action, false);
    case actionTypes.USER_REGISTER:
      return userRegister(state, action, true);
    case actionTypes.USER_REGISTER_ERROR:
      return userRegister(state, action, false);
    default:
      return state;
  }
};

export default userReducers;
