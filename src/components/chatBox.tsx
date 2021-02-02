import React from "react";
import InfoBoctReply from "./other_components";
import { svg1 } from "../lib/svg-render";
import chat_process from "../lib/chat-evalutor";

import "../styles/chatBox.css";

let isRecentReplyBoct: boolean;
class TemplateChat extends React.Component<{ attr: [string, string] }, {}> {
  render() {
    let [c, t] = this.props.attr;
    isRecentReplyBoct = c == "boct_talk";
    return (
      <div className={c}>
        <p>{t}</p>
      </div>
    );
  }
}

class ChatBoct extends React.Component<{ openThis: object }, { chatstore: JSX.Element[] }> {
  chatInputElem: React.RefObject<HTMLInputElement>;
  theChats: Map<string, string>;

  constructor(props) {
    super(props);
    this.state = {
      chatstore: [<InfoBoctReply />],
    };
    this.chatInputElem = React.createRef();
    this.theChats = new Map();
    this.onChatSubmit = this.onChatSubmit.bind(this);
  }

  onChatSubmit(e: any) {
    e.preventDefault();
    let { chatstore } = this.state;
    let clength = chatstore.length;
    let ctext = this.chatInputElem.current?.value as string;

    chatstore.push(<TemplateChat key={clength} attr={["human_talk", ctext]} />);
    this.theChats.set(clength.toString(), ctext);
    this.setState({ chatstore: chatstore });
  }

  componentDidUpdate() {
    let { chatstore } = this.state;
    let { theChats } = this;

    if (!isRecentReplyBoct) {
      let clength = chatstore.length;
      let input = theChats.get(`${clength - 1}`) as string;
      let ctext = chat_process(input);

      chatstore.push(<TemplateChat key={clength} attr={["boct_talk", ctext]} />);
      theChats.set(clength.toString(), ctext);
      this.setState({ chatstore: chatstore });
    }
  }

  render() {
    if (!false) {
      return (
        <div id="Chatter" style={this.props.openThis}>
          <div className="talk_box" id="chatspace">
            {this.state.chatstore}
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
}

export default ChatBoct;
