// make a index.js file for the src folder
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
