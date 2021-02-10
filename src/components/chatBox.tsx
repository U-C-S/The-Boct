import React from "react";
//import InfoBoctReply from "./other_components";
import { svg1 } from "../lib/svg-render";
import chat_process from "../lib/chat-evalutor";
import "../styles/chatBox.css";

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

type typesOfReplies = "h" | "b" | "cb";
interface IChatMeta {
  element: JSX.Element;
  replyBy: typesOfReplies;
  replyString: string | null;
}

class storageClass {
  private data: IChatMeta[];
  constructor() {
    this.data = [];
  }

  pushit(element: JSX.Element, replyBy: typesOfReplies, replyString: string | null = null) {
    this.data.push({
      element,
      replyBy,
      replyString,
    });
  }

  get read() {
    return this.data;
  }

  get recent() {
    return this.data[this.numOfReplies - 1];
  }

  get numOfReplies() {
    return this.data.length;
  }

  get onlyElems() {
    return this.data.map((x) => x.element);
  }

  get onlyHumanReplies() {
    let human = this.data.map((x) => {
      if (x.replyBy == "h") {
        return x;
      }
    });
    return human;
  }

  get isRecentReplyHuman() {
    let x = this.data[this.numOfReplies - 1].replyBy === "h";
    return x;
  }
}

let chatStorage = new storageClass();
class ChatBoct extends React.Component<{}, { chatstore: JSX.Element[] }> {
  chatInputElem: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.state = {
      chatstore: chatStorage.onlyElems,
    };
    this.chatInputElem = React.createRef();
    this.onChatSubmit = this.onChatSubmit.bind(this);
  }

  onChatSubmit(e: any) {
    e.preventDefault();
    let cText = this.chatInputElem.current?.value as string;
    let cElem = <TemplateChat key={chatStorage.numOfReplies} attr={["human_talk", cText]} />;

    chatStorage.pushit(cElem, "h", cText);
    this.setState({ chatstore: chatStorage.onlyElems });
  }

  componentDidUpdate() {
    console.log(chatStorage.isRecentReplyHuman);
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

export default ChatBoct;

/*
class ChatBoct extends React.Component<{}, { chatstore: JSX.Element[] }> {
  chatInputElem: React.RefObject<HTMLInputElement>;
  theChats: Map<string, string>;

  constructor(props: any) {
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
    return (
      <div id="Chatter">
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
*/
