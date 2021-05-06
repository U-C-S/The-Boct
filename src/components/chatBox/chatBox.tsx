import React from "react";
import { svg1 } from "../../util/svg-draw";
import { chatProcessor } from "../../lib/";
import { ReplyContext } from "../../util";

import "./chatBox.scss";

/**
 * for default chat-reply templates. for custom boct replies see other_components.tsx
 */
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

/**
 * The box where all the chat shows up
 */
class TalkBox extends React.Component {
  talkBox: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.talkBox = React.createRef();
  }

  componentDidUpdate() {
    //Automatically scroll to recent reply on new reply
    let { talkBox } = this; //@ts-ignore
    talkBox.current.scrollTop = talkBox.current.scrollHeight;
  }

  render() {
    return (
      <ReplyContext.Consumer>
        {(replyTech) => (
          <div ref={this.talkBox} className="talk_box">
            {replyTech?.allReplies}
          </div>
        )}
      </ReplyContext.Consumer>
    );
  }
}

/**
 * The Component for the Chat-Box
 */
class ChatBox extends React.Component {
  chatInputElem: React.RefObject<HTMLInputElement>;
  context!: React.ContextType<typeof ReplyContext>;
  static contextType = ReplyContext;

  constructor(props: any) {
    super(props);
    this.chatInputElem = React.createRef();
  }

  render() {
    return (
      <ReplyContext.Consumer>
        {(replyTech) => {
          //On user submitting a text,
          //The following method will store it's JSX, type of reply, the string user submitted
          let onChatSubmit = (e: any) => {
            e.preventDefault();
            let cText = this.chatInputElem.current?.value as string;
            let cElem = <TemplateChat attr={["human_talk", cText]} key={replyTech.storage.numOfReplies} />;

            replyTech.addReply(cElem, "h", cText);
            setTimeout(replyBasedOnHumanReply, 600, cText);
          };

          //After a certain time, this method will process the string and outputs a chat text
          function replyBasedOnHumanReply(UserText: string) {
            let cText = chatProcessor(UserText);
            let cElem = <TemplateChat attr={["boct_talk", cText]} key={replyTech.storage.numOfReplies} />;
            replyTech.addReply(cElem, "b");
          }

          return (
            <div className="typeBox_container">
              <form className="typeBox" onSubmit={onChatSubmit}>
                <input
                  ref={this.chatInputElem}
                  id="typespace"
                  type="text"
                  placeholder="Wanna talk with BOcT? Then type here..!"
                  autoComplete="off"
                  maxLength={120}
                />
                <button id="typespace_submitBtn" type="submit">
                  <svg viewBox="0 0 448 512">
                    <path id="svg1" d={svg1} />
                  </svg>
                </button>
              </form>
            </div>
          );
        }}
      </ReplyContext.Consumer>
    );
  }
}

class ChatBoct extends React.Component {
  render() {
    return (
      <div id="Chatter">
        <TalkBox />
        <ChatBox />
      </div>
    );
  }
}

export { ChatBoct };
