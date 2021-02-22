import React from "react";
import { svg0 } from "../lib/svg-render";
import "../styles/bocthead.css";

class BoctHead extends React.Component<{ clickCapture: any }, {}> {
  constructor(props: any) {
    super(props);
    this.boctClicked = this.boctClicked.bind(this);
  }

  //BAD-PRACTICE HERE
  boctClicked(e: any) {
    e.preventDefault();
    this.props.clickCapture();
    let bi = document.getElementById("BOcT")?.style as CSSStyleDeclaration;
    bi.animation = "none";
  }

  render() {
    return (
      <div className="PageHead">
        <div id="heading_container">
          <h1 id="heading">The BOcT</h1>
        </div>
        <div className="bot-head">
          <button id="BOcT" title="The BOcT" onClick={this.boctClicked}>
            <svg viewBox="0 0 640 512">
              <path id="svg0" d={svg0} />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default BoctHead;
