import React from "react";
import { storageClass } from "./chat-storage";

interface IExternalReply {
  allReplies: JSX.Element[];
  addReply: (reply: JSX.Element, type: "h" | "b" | "cb", replyString?: string) => void;
  storage: storageClass;
}
let replyDefaultContext: IExternalReply = {
  allReplies: [],
  addReply: () => {},
  storage: new storageClass(),
};

const ReplyContext = React.createContext<IExternalReply>(replyDefaultContext);

export default ReplyContext;
