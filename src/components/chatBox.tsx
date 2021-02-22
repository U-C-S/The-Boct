import React from "react";
import { svg1 } from "../lib/svg-render";
import { storageClass } from "../lib/";
import chat_process from "../lib/chat-evalutor";
import "../styles/chatBox.css";
import ReplyContext from "../lib/contexts";

//for default chat-reply templates. for custom boct replies see other_components.tsx
class TemplateChat extends React.Component<{ attr: [string, string] }, {}> {
  render() {
    let [c, t] = this.props.attr;
    return (
      <div className={c}>
        <p>{t}</p>
      </div>
    );
  }
}


let chatStorage = new storageClass();

class ChatBoct extends React.Component<{}, { chatstore: JSX.Element[] }> {
  static contextType = ReplyContext;
  chatInputElem: React.RefObject<HTMLInputElement>;
  lifeCycle: "a" | "b" | "c";

  constructor(props: any) {
    super(props);
    this.state = {
      chatstore: chatStorage.onlyElems,
    };

    this.lifeCycle = "a";
    this.chatInputElem = React.createRef();
    this.onChatSubmit = this.onChatSubmit.bind(this);
    this.OnHumanReply = this.OnHumanReply.bind(this);
  }

  onChatSubmit(e: any) {
    e.preventDefault();
    let cText = this.chatInputElem.current?.value as string;
    let cElem = <TemplateChat key={chatStorage.numOfReplies} attr={["human_talk", cText]} />;

    chatStorage.pushit(cElem, "h", cText);
    this.setState({ chatstore: chatStorage.onlyElems });

    setTimeout(this.OnHumanReply, 600);
  }

  OnHumanReply() {
    if (chatStorage.isRecentReplyHuman) {
      let humanReplies = chatStorage.onlyHumanReplies;
      let cLength = humanReplies.length;
      let input = humanReplies[cLength - 1]?.replyString as string;
      let cText = chat_process(input);
      let cElem = <TemplateChat key={cLength} attr={["boct_talk", cText]} />;

      chatStorage.pushit(cElem, "b", cText);
      this.setState({ chatstore: chatStorage.onlyElems });
    }
  }

  render() {
    return (
      <div id="Chatter">
        <div className="talk_box" id="chatspace">
          <ReplyContext.Consumer>
            {(replyTech) => {
              return replyTech?.allReplies;
            }}
          </ReplyContext.Consumer>
        </div>
        <div className="type_box">
          <form className="type_box-inner" onSubmit={this.onChatSubmit}>
            <input ref={this.chatInputElem} id="typespace" type="text" placeholder="Wanna talk with BOcT? Then type here..!" autoComplete="off" maxLength={120} />
            <button id="typespace-enter" type="submit">
              <svg viewBox="0 0 448 512">
                <path id="svg1" d={svg1} />
              </svg>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ChatBoct;
//this.state.chatstore
