import { boctAge, coin } from "./index";
import { RandomOf } from "../small-functions";

export function DOt_commands(word: string): string {
  let comm = word.slice(1, 5);
  switch (comm) {
    case "":
      return "Type a Dot-Command";
    case "name":
      return "BOcT";
    case "age":
      return boctAge();
    case "god":
      return "U-C-S / Chanakya";
    case "v":
      //return `${ElemList.Version.innerHTML}`;
      return "v4.0";
    case "url":
      return "https://the-boct.github.io/";
    case "code":
      return "https://github.com/The-BOcT/";
    case "meow":
      return "MeooW!.....MeeeeeeWww!";
    case "dice":
      return `${RandomOf(1, 6)}`;
    case "coin":
      coin.reply();
      break;
    default:
      return "INVALID DOt COMMAND";
  }
  return "hmm...Maube";
}
