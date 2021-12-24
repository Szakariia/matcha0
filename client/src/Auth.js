import * as actionTypes from "./Actions/ActionTypes";

export default function authlocalStorage() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return user;
  } else {
    return 0;
  }
}
