import React from "react";
import ReactDOM from "react-dom";
import What from "./app/loading";
import "./styles/index.css";

const currentThemeCokie = localStorage.getItem("theme");
if (currentThemeCokie) document.documentElement.setAttribute("data-theme", currentThemeCokie);

ReactDOM.render(
  <React.StrictMode>
    <What />
  </React.StrictMode>,
  document.getElementById("Main")
);
