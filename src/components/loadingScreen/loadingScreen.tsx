import React from "react";
import "./loadingScreen.css";

class Loading extends React.Component {
  render() {
    return (
      <div id="loadScreen">
        <div className="load">
          <div id="load_barr"></div>
          <div id="load_text">BOcT Loading...</div>
        </div>
      </div>
    );
  }
}

export { Loading };
