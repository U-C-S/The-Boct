import React from "react";
import { svg1 } from "../../lib/svg-render";
import { chatProcessor, Reply_Context } from "../../lib/";

import "./chatBox.css";

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

class ChatBoct extends React.Component {
  chatInputElem: React.RefObject<HTMLInputElement>;
  //context!: React.ContextType<typeof ReplyContext>;

  constructor(props: any) {
    super(props);
    this.chatInputElem = React.createRef();
  }

  render() {
    return (
      <Reply_Context.Consumer>
        {(replyTech) => {
          let onChatSubmit = (e: any) => {
            e.preventDefault();
            let cText = this.chatInputElem.current?.value as string;
            let cElem = <TemplateChat attr={["human_talk", cText]} key={replyTech.storage.numOfReplies} />;

            replyTech.addReply(cElem, "h", cText);
            setTimeout(replyBasedOnHumanReply, 600);
          };

          let replyBasedOnHumanReply = () => {
            if (replyTech.storage.isRecentReplyHuman) {
              let humanReplies = replyTech.storage.onlyHumanReplies;
              let cLength = humanReplies.length;
              let input = humanReplies[cLength - 1]?.replyString as string;
              let cText = chatProcessor(input);
              let cElem = <TemplateChat key={cLength} attr={["boct_talk", cText]} />;

              replyTech.addReply(cElem, "b");
            }
          };

          return (
            <div id="Chatter">
              <TalkBox />
              <div className="type_box">
                <form className="type_box-inner" onSubmit={onChatSubmit}>
                  <input
                    ref={this.chatInputElem}
                    id="typespace"
                    type="text"
                    placeholder="Wanna talk with BOcT? Then type here..!"
                    autoComplete="off"
                    maxLength={120}
                  />
                  <button id="typespace-enter" type="submit">
                    <svg viewBox="0 0 448 512">
                      <path id="svg1" d={svg1} />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Reply_Context.Consumer>
    );
  }
}

class TalkBox extends React.Component {
  talkBox: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.talkBox = React.createRef();
  }

  componentDidUpdate() {
    let { talkBox } = this; //@ts-ignore
    talkBox.current.scrollTop = talkBox.current.scrollHeight;
  }

  render() {
    return (
      <Reply_Context.Consumer>
        {(replyTech) => (
          <div ref={this.talkBox} className="talk_box" id="chatspace">
            {replyTech?.allReplies}
          </div>
        )}
      </Reply_Context.Consumer>
    );
  }
}

export { ChatBoct };
//this.state.chatstore

/*
  onChatSubmit(e: any) {
    e.preventDefault();
    let cText = this.chatInputElem.current?.value as string;
    let cElem = <TemplateChat key={chatStorage.numOfReplies} attr={["human_talk", cText]} />;

    chatStorage.pushit(cElem, "h", cText);
    this.setState({ chatstore: chatStorage.onlyElems });

    setTimeout(this.OnHumanReply, 600);
  }



  let onChatSubmit = (e: any) => {
            e.preventDefault();
            let cText = this.chatInputElem.current?.value as string;
            let cElem = <TemplateChat attr={["human_talk", cText]} key={replyTech?.storage.numOfReplies} />;
            replyTech?.addReply(cElem, "h");

            //setTimeout(this.OnHumanReply, 600);
          };


    "@types/node": "^12.19.16",
    "@types/react": "^16.14.3",
    "@types/react-dom": "^16.9.10",



      OnHumanReply() {
    let replyTech = this.context;
    let chatStorage = replyTech.storage;

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
*/
