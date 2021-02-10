import React from "react";
import ReactDOM from "react-dom";
import App from "./app/";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./styles/index.css";

const currentThemeCokie = localStorage.getItem("theme");
if (currentThemeCokie) document.documentElement.setAttribute("data-theme", currentThemeCokie);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("Main")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
