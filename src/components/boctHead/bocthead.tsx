import React from "react";
import { svg0 } from "../../lib/svg-render";
import "./bocthead.css";

class BoctHead extends React.Component<{ clickCapture: any }, { headAnim: string }> {
  boctBtn: React.RefObject<HTMLButtonElement>;

  constructor(props: any) {
    super(props);
    this.state = {
      headAnim: "beepbeep 2.5s ease-in-out 5s infinite",
    };
    this.boctBtn = React.createRef();
    this.boctClicked = this.boctClicked.bind(this);
  }

  //BAD-PRACTICE HERE
  boctClicked(e: any) {
    this.setState({
      headAnim: "none",
    });
    this.props.clickCapture();
  }

  render() {
    return (
      <div className="PageHead">
        <div id="heading_container">
          <h1 id="heading">The BOcT</h1>
        </div>
        <div className="bot-head">
          <button id="BOcT" style={{ animation: this.state.headAnim }} onClick={this.boctClicked} title="The BOcT">
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
