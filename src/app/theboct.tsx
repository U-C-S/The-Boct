import React from "react";
import AboutPanel from "../components/aboutField";
import BoctHead from "../components/bocthead";
import ChatBoct from "../components/chatBox";

class TheBoct extends React.Component<{}, { boctClicked: object }> {
  constructor(props) {
    super(props);
    this.state = {
      boctClicked: { display: "none" },
    };
    this.boctOnClick = this.boctOnClick.bind(this);
  }

  boctOnClick(x: boolean) {
    if (x) {
      this.setState({ boctClicked: { display: "block" } });
    }
  }

  render() {
    let x: JSX.Element = (
      <>
        <BoctHead clickCapture={this.boctOnClick} />
        <ChatBoct openThis={this.state.boctClicked} />
        <AboutPanel />
      </>
    );
    return x;
  }
}

export default TheBoct;
