import React from "react";
import ReactDOM from "react-dom";

import Loading from "./components/loadingScreen";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Loading />
  </React.StrictMode>,
  document.getElementById("root"),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
