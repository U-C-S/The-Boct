import React from "react";
import { AboutPanel, BoctHead, ChatBoct } from "../components/";

class TheBoct extends React.Component<{}, { boctClicked: number; justStateUpdate: number }> {
  ExternalReply: {
    cElem: JSX.Element;
    replyBy: "cb" | "b" | "e";
    cText: string | null;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      boctClicked: 0,
      justStateUpdate: 0,
    };

    this.ExternalReply = {
      cElem: <></>,
      replyBy: "e",
      cText: null,
    };

    this.boctOnClick = this.boctOnClick.bind(this);
    this.boctReply = this.boctReply.bind(this);
  }

  boctOnClick() {
    this.setState((state) => {
      return { boctClicked: state.boctClicked + 1 };
    });
  }

  boctReply(replyType: "b" | "cb", reply: JSX.Element | string) {
    if (replyType == "cb") {
      this.OnGetReply(reply as JSX.Element, replyType, null);
    }
    else if (replyType == "b") {
      let replyX = (
        <div className="boct_talk">
          <p>{reply}</p>
        </div>
      );
      this.OnGetReply(replyX, replyType, reply as string);
    }
  }

  OnGetReply(x: JSX.Element, y: "cb" | "b", z: string | null) {
    this.ExternalReply = {
      cElem: x,
      replyBy: y,
      cText: z,
    };
    this.setState((state) => {
      return { justStateUpdate: state.justStateUpdate + 1 };
    });
    this.ExternalReply.replyBy = "e";
    console.log(this.ExternalReply.replyBy);
  }

  render() {
    let { boctClicked } = this.state;
    if (boctClicked == 0) {
      return (
        <>
          <BoctHead clickCapture={this.boctOnClick} />
          <AboutPanel />
        </>
      );
    }
    return (
      <>
        <BoctHead clickCapture={this.boctOnClick} />
        <ChatBoct externalReplies={this.ExternalReply} />
        <AboutPanel clickInfo={this.boctReply} />
      </>
    );
  }
}

export default TheBoct;
