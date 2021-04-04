import React from "react";
import { svg0 } from "../../util/svg-draw";
import "./bocthead.css";

class BoctHead extends React.Component<{ clickCapture: any; headAnim: string }, {}> {
  constructor(props: any) {
    super(props);
    this.boctClicked = this.boctClicked.bind(this);
  }

  boctClicked() {
    this.props.clickCapture();
  }

  render() {
    return (
      <div className="PageHead">
        <div id="heading_container">
          <h1 id="heading">The BOcT</h1>
        </div>
        <div className="bot-head">
          <button id="BOcT" style={{ animation: this.props.headAnim }} onClick={this.boctClicked} title="The BOcT">
            <svg viewBox="0 0 640 512">
              <path id="svg0" d={svg0} />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export { BoctHead };
