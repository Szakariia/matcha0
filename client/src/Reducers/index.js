import { combineReducers } from "redux";
import userReducers from "./UserReducers";

const allReducers = combineReducers({
  userReducers: userReducers,
});

export default allReducers;
