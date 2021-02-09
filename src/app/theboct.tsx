import React from "react";
import { AboutPanel, BoctHead } from "../components/";
const ChatBoct = React.lazy(() => import("../components/chatBox"));

class TheBoct extends React.Component<{}, { chatbox: JSX.Element | null }> {
  constructor(props: any) {
    super(props);
    this.state = {
      chatbox: null,
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
        {this.state.chatbox}
        <AboutPanel />
      </>
    );
    return x;
  }
}

export default TheBoct;
