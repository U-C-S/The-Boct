import React from "react";
import { AboutPanel, BoctHead, ChatBoct } from "../components/";
import CustomReplies from "../components/other_components";
import ReplyContext from "../lib/contexts";
import { storageClass } from "../lib/chat-storage";

let chatStorage = new storageClass();

class TheBoct extends React.Component<{}, { boctClicked: number; allReplies: JSX.Element[] }> {
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
    if (this.state.boctClicked == 0) {
      return (
        <>
          <BoctHead clickCapture={this.boctOnClick} />
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
        <ReplyContext.Provider value={replyContextValue}>
          <BoctHead clickCapture={this.boctOnClick} />
          <ChatBoct />
          <AboutPanel />
        </ReplyContext.Provider>
      </>
    );
  }
}

export default TheBoct;

/*



  boctReply(replyType: "b" | "cb", reply: JSX.Element | string) {
    if (replyType == "cb") {
      this.OnGetReply(reply as JSX.Element, replyType, null);
    } else if (replyType == "b") {
      let replyX = <CustomReplies.boctReply text={reply} />;
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

  ExternalReply: {
    cElem: JSX.Element;
    replyBy: "cb" | "b" | "e";
    cText: string | null;
  };

      this.ExternalReply = {
      cElem: <></>,
      replyBy: "e",
      cText: null,
      //nValue: this.state.justStateUpdate,
    };
*/
