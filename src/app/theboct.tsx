import React from "react";
import AboutPanel from "../components/aboutpanel";
import BoctHead from "../components/bocthead";
import ChatBoct from "../components/chatboct";

class TheBoct extends React.Component {
  render() {
    return (
      <>
        <BoctHead />
        <ChatBoct />
        <AboutPanel />
      </>
    );
  }
}

export default TheBoct;
