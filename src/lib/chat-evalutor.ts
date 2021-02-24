import { boct_general_reply, DOt_commands, unit_convert } from "./chat/";

function chatProcessor(sentence: string): string {
  if (sentence) {
    const chat_TL: string = sentence.trim().toLowerCase();
    const chat_T: string = sentence.trim();

    if (chat_TL.slice(0, 4) === "conv") {
      return unit_convert(chat_T);
    } else if (chat_TL[0] === "." || chat_TL[0] === "$") {
      return DOt_commands(chat_TL);
    } else {
      return boct_general_reply(chat_TL);
    }
  }

  return "Hmm... Maybe";
}

export { chatProcessor };
