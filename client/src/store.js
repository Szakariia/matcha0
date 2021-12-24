// redux SET UP

// Store - Is what holds all the data your application uses.
// Reducer - is what manipulates that data when it recieves an action.
// Action - is what tells reducer to manipulate the store data, it carries the name and (not required) some data.

import allReducers from "./Reducers";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(
  allReducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(...middleware)
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
