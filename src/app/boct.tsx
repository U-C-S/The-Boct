import React from "react";
import { AboutPanel, BoctHead, ChatBoct } from "../components";
import { storageClass, Reply_Context } from "../util";

type AppState = {
  boctClicked: number;
  allReplies: JSX.Element[];
};

let chatStorage = new storageClass();

class Boct extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      boctClicked: 0,
      allReplies: chatStorage.onlyElems,
    };

    this.boctOnClick = this.boctOnClick.bind(this);
    this.setReply = this.setReply.bind(this);
  }

  boctOnClick() {
    this.setState((state) => {
      return { boctClicked: state.boctClicked + 1 };
    });
  }

  setReply(reply: JSX.Element, type: "h" | "b" | "cb", replyString?: string) {
    replyString = replyString ? replyString : "e01";
    chatStorage.pushit(reply, type, replyString);
    this.setState({ allReplies: chatStorage.onlyElems });
  }

  render() {
    if (this.state.boctClicked === 0) {
      return (
        <>
          <BoctHead clickCapture={this.boctOnClick} headAnim="beepbeep 2.5s ease-in-out 4s infinite" />
          <AboutPanel />
        </>
      );
    }

    let replyContextValue = {
      allReplies: this.state.allReplies,
      addReply: this.setReply,
      storage: chatStorage,
    };
    return (
      <>
        <Reply_Context.Provider value={replyContextValue}>
          <BoctHead clickCapture={this.boctOnClick} headAnim="none" />
          <ChatBoct />
          <AboutPanel />
        </Reply_Context.Provider>
      </>
    );
  }
}

export default Boct;
