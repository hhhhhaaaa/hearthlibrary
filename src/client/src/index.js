/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//Added but not sure if this is actually needed
render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById("root"));

/* If you want to start measuring performance in your app, pass a function
   to log results (for example: reportWebVitals(console.log))
   or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals */
reportWebVitals();
