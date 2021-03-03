import { dice, coin, boctAge } from "./index";

export function boct_general_reply(studycontent: string) {
  const readables = [intro, readage, readempty, readannoy, readNo, readok, readso, dice, coin];
  const readables2 = [searchStuff];
  let reply: string = "hmm...Maybe";

  for (let i = 0; i < readables.length; i++) {
    for (let j = 0; j < readables[i].words.length; j++) {
      if (studycontent === readables[i].words[j]) {
        //@ts-ignore
        reply = readables[i].reply();
      }
    }
  }
  for (let i = 0; i < readables2.length; i++) {
    for (let j = 0; j < readables2[i].words.length; j++) {
      if (studycontent.includes(readables2[i].words[j])) {
        reply = readables2[i].reply(studycontent) as string;
      }
    }
  }

  return reply;
}


class directReplies {
  words: string[];
  replyString: string;

  constructor(inWrds: string[], outsen: string) {
    this.words = inWrds;
    this.replyString = outsen;
  }

  reply() {
    return this.replyString;
  }
}

const intro = new directReplies(["hi", "hello", "hey"], "Hi to you too");

const readempty = new directReplies(["*empty*", ""], "Oh! Come on. Talk Something Sensible");

const readNo = new directReplies(["no", "nothing"], "You are basically NOTHING!!!");

const readok = new directReplies(["ok", "ohk", "ogk", "wow", "great", "excellent", "nice", "awesome"], "WoW");

const readso = new directReplies(["so", "what else"], "I am not so brilliant to say something!");

const readage = {
  words: ["what is your age", "whats your age", "your age"],
  reply: () => `My Creation began approx ${boctAge()} ago`,
};

const readannoy = {
  words: ["annoy me", "idiot", "dumb"],
  reply: () => {
    return "You're a IDIOT";
  },
};

const searchStuff = {
  words: ["google", "bing", "youtube", "duckduckgo"],
  reply: (sc: string) => {
    if (sc.slice(0, 6) === "google") {
      let ss = sc.slice(7);
      window.open("https://www.google.com/search?q=" + ss);
      return "Ok, Searching Google for " + ss;
    }
    if (sc.slice(0, 4) === "bing") {
      let ss = sc.slice(5);
      window.open("https://www.bing.com/search?q=" + ss);
      return "Ok, Searching Bing for " + ss;
    }
    if (sc.slice(0, 7) === "youtube") {
      let ss = sc.slice(8);
      window.open("https://www.youtube.com/results?search_query=" + ss);
      return "Ok, Searching YouTube for " + ss;
    }
    if (sc.slice(0, 10) === "duckduckgo") {
      let ss = sc.slice(11);
      window.open("https://duckduckgo.com/?q=" + ss);
      return "Ok, Searching DuckDuckGo for " + ss;
    }
  },
};
