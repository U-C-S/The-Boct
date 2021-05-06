import React from "react";
import { storageClass } from "./chat-storage";

interface IExternalReply {
  allReplies: JSX.Element[];
  addReply: (replyJSX: JSX.Element, replyBy: "h" | "b" | "cb", replyString?: string) => void;
  storage: storageClass;
}

let replyDefaultContext: IExternalReply = {
  allReplies: [],
  addReply: () => {},
  storage: new storageClass(),
};

const ReplyContext = React.createContext<IExternalReply>(replyDefaultContext);

export { ReplyContext };
