import React from "react";
import { AboutPanel, BoctHead } from "../components/";
const ChatBoct = React.lazy(() => import("../components/chatBox"));

class TheBoct extends React.Component<{}, { chatbox: JSX.Element }> {
  constructor(props: any) {
    super(props);
    this.state = {
      chatbox: <></>,
    };
    this.boctOnClick = this.boctOnClick.bind(this);
  }

  boctOnClick() {
    let loadbox = (
      <React.Suspense fallback={<p>Loading...</p>}>
        <ChatBoct />
      </React.Suspense>
    );
    this.setState({ chatbox: loadbox });
  }

  render() {
    let x: JSX.Element = (
      <>
        <BoctHead clickCapture={this.boctOnClick} />
        {React.cloneElement(this.state.chatbox)}
        <AboutPanel />
      </>
    );
    return x;
  }
}

export default TheBoct;
