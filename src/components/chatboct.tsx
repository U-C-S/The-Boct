import React from "react";
import { svg1 } from "../lib/svg-render";
import "../styles/chatboct.css";

class ChatBoct extends React.Component<{}, { chatstore: JSX.Element[] }> {
  chatInputElem: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.state = {
      chatstore: [],
    };
    this.chatInputElem = React.createRef();
    this.OnChatSubmit = this.OnChatSubmit.bind(this);
  }

  OnChatSubmit(e: any) {
    e.preventDefault();
    let temp_chatstore = this.state.chatstore;
    let x = this.chatInputElem.current?.value;
    let newchat = (
      <div key={temp_chatstore.length} className="human_talk">
        <p>{x}</p>
      </div>
    );

    temp_chatstore.push(newchat);
    this.setState({ chatstore: temp_chatstore });
  }

  render() {
    return (
      <div id="Chatter">
        <div className="talk_box" id="chatspace">
          {this.state.chatstore}
        </div>
        <div className="type_box">
          <form className="type_box-inner" onSubmit={this.OnChatSubmit}>
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
