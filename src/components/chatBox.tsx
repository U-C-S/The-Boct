import React from "react";
import { svg1 } from "../lib/svg-render";
import "../styles/chatBox.css";
import chat_process from "../lib/chat-evalutor";

class ChatBoct extends React.Component<{}, { chatstore: JSX.Element[] }> {
  chatInputElem: React.RefObject<HTMLInputElement>;
  theChats: Map<string, string>;
  recentTalk: string;

  constructor(props) {
    super(props);
    this.state = {
      chatstore: [],
    };
    this.chatInputElem = React.createRef();
    this.theChats = new Map();
    this.recentTalk = "";
    this.onChatSubmit = this.onChatSubmit.bind(this);
  }

  onChatSubmit(e: any) {
    e.preventDefault();
    let { chatstore } = this.state;
    let length = chatstore.length;
    let x = this.chatInputElem.current?.value as string;
    let newchat = (
      <div key={length} className="human_talk">
        <p>{x}</p>
      </div>
    );
    chatstore.push(newchat);
    this.recentTalk = "h";
    this.theChats.set(length.toString(), x);
    this.setState({ chatstore: chatstore });
  }

  componentDidUpdate() {
    let { chatstore } = this.state;
    let { theChats } = this;
    if (this.recentTalk === "h") {
      let length = chatstore.length;
      let input = theChats.get(`${length - 1}`) as string;
      let x = chat_process(input);
      let newchat = (
        <div key={length} className="boct_talk">
          <p>{x}</p>
        </div>
      );
      chatstore.push(newchat);
      this.recentTalk = "b";
      theChats.set(length.toString(), x);
      this.setState({ chatstore: chatstore });
    }
  }

  render() {
    return (
      <div id="Chatter">
        <div className="talk_box" id="chatspace">
          {this.state.chatstore}
        </div>
        <div className="type_box">
          <form className="type_box-inner" onSubmit={this.onChatSubmit}>
            <input ref={this.chatInputElem} id="typespace" type="text" placeholder="Wanna talk with BOcT? Then type here..!" autoComplete="off" maxLength={120} spellCheck={true} />
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
