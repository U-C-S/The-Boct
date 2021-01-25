import React from "react";
import SVGs from "../lib/svg-render";
import "../styles/chatboct.css";

class ChatBoct extends React.Component {
  OnChatSubmit() {
    return false;
  }
  render() {
    return (
      <div id="Chatter">
        <div className="talk_box" id="chatspace"></div>
        <div className="type_box">
          <form className="type_box-inner" onSubmit={this.OnChatSubmit}>
            <input id="typespace" type="text" placeholder="Wanna talk with BOcT? Then type here..!" autoComplete="off" maxLength={120} spellCheck={true} />
            <button id="typespace-enter" type="submit">
              <svg viewBox="0 0 448 512">
                <path id="svg1" d={SVGs.svg1} />
              </svg>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ChatBoct;
