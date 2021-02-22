import React from "react";
import { storageClass } from "./chat-storage";

interface IExternalReply {
  allReplies: JSX.Element[];
  addReply: (reply: JSX.Element, type: "b" | "cb") => void;
  storage: storageClass;
}

const ReplyContext = React.createContext<IExternalReply | undefined>(undefined);

export default ReplyContext;
