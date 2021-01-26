import React from "react";
import AboutPanel from "../components/aboutField";
import BoctHead from "../components/bocthead";
import ChatBoct from "../components/chatBox";

class TheBoct extends React.Component {
  render(): JSX.Element {
    let x: JSX.Element = (
      <>
        <BoctHead />
        <ChatBoct />
        <AboutPanel />
      </>
    );
    return x;
  }
}

export default TheBoct;
