import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// redux set up

import { Provider } from "react-redux";
import store from "./store.js";

// define the ENV file

require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
