import React from "react";
import {svg0} from "../lib/svg-render";
import "../styles/bocthead.css";

function BoctHead() {
  return (
    <div className="PageHead">
      <div id="heading_container">
        <h1 id="heading">The BOcT</h1>
      </div>
      <div className="bot-head">
        <button id="BOcT" title="The BOcT">
          <svg viewBox="0 0 640 512">
            <path id="svg0" d={svg0} />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default BoctHead;
