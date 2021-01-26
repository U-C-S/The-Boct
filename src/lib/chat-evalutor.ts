import unit_convert from "./unit-converter";

function chat_process(sentence: string): string {
  const chat_TL: string = sentence.trim().toLowerCase();
  const chat_T: string = sentence.trim();

  if (chat_TL.slice(0, 4) === "conv") {
    return unit_convert(chat_T);
  }

  return "Hmm... Maybe";
}

export default chat_process;
