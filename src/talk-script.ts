function talk_div_boct(talkContent: any) {
  let div = document.createElement("div");
  div.className = "boct_talk";
  div.innerHTML = `<p>${talkContent}</p>`;
  ElemList.theChat.appendChild(div);
  scroll_update();
}

//User reply
ElemList.chat_replier.addEventListener("click", talk_div_hooman);
function talk_div_hooman() {
  const chat_boxx = <HTMLInputElement>ElemList.chat_boxx;

  let chat_content = chat_boxx.value ? chat_boxx.value : "*empty*";
  let div = document.createElement("div");
  div.className = "human_talk";
  div.innerHTML = `<p>${chat_content}</p>`;
  ElemList.theChat.appendChild(div);
  chat_boxx.value = "";

  chat_process(chat_content);
  scroll_update();
}

//scroll to bottom after a new message
function scroll_update() {
  ElemList.theChat.scrollTop = ElemList.theChat.scrollHeight;
}

//------------------------------------------------------------------
function chat_process(sentence: string) {
  const chat_TL: string = sentence.trim().toLowerCase();
  const chat_T: string = sentence.trim();

  setTimeout(boct_general_reply, 600, chat_TL);

  if (chat_TL.slice(0, 4) == "conv") {
    unit_convert(chat_T);
  }

  if (chat_TL[0] == "." || chat_TL[0] == "$") {
    DOt_commands(chat_TL);
  }
}

function boct_general_reply(studycontent: string) {
  const readables = [
    intro,
    readage,
    readempty,
    readannoy,
    readNo,
    readok,
    readso,
    dice,
    coin,
  ];
  const readables2 = [searchStuff];

  for (let i = 0; i < readables.length; i++) {
    loop1: for (let j = 0; j < readables[i].words.length; j++) {
      if (studycontent === readables[i].words[j]) {
        readables[i].reply();
        break loop1;
      }
    }
  }
  for (let i = 0; i < readables2.length; i++) {
    loop2: for (let j = 0; j < readables2[i].words.length; j++) {
      if (studycontent.includes(readables2[i].words[j])) {
        readables2[i].reply(studycontent);
        break loop2;
      }
    }
  }
}

function DOt_commands(word: string) {
  let comm = word.slice(1, 5);
  switch (comm) {
    case "":
      talk_div_boct("Type a Dot-Command");
      break;
    case "name":
      talk_div_boct("BOcT");
      break;
    case "age":
      talk_div_boct(boctAge());
      break;
    case "god":
      talk_div_boct("U-C-S / Chanakya");
      break;
    case "v":
      talk_div_boct(`${ElemList.Version.innerHTML}`);
      break;
    case "url":
      talk_div_boct("https://the-boct.github.io/");
      break;
    case "code":
      talk_div_boct("https://github.com/The-BOcT/");
      break;
    case "meow":
      talk_div_boct("MeooW!.....MeeeeeeWww!");
      break;
    case "dice":
      talk_div_boct(rdmZ(1, 6));
      break;
    case "coin":
      coin.reply();
      break;
    default:
      talk_div_boct("INVALID DOt COMMAND");
      break;
  }
}

function rdmZ(m: number, n: number): number {
  return Math.floor(Math.random() * (n - m + 1)) + m;
}

function replyRandom(x: string[]) {
  return talk_div_boct(x[rdmZ(0, x.length - 1)]);
}

function boctAge(): string {
  let birthdate: Date = new Date(2020, 4, 5, 17, 43, 0, 0);
  let Diff_In_Time = Date.now() - birthdate.getTime();
  let Diff_In_Days = Diff_In_Time / (1000 * 3600 * 24);
  let Days = Math.floor(Diff_In_Time / (1000 * 3600 * 24));
  let Diff_In_Hour = Math.floor((Diff_In_Days - Days) * 24);
  let Diff_In_Mins = Math.floor(
    ((Diff_In_Days - Days) * 24 - Diff_In_Hour) * 60
  );
  return `${Days} days, ${Diff_In_Hour} hours and ${Diff_In_Mins} minutes`;
}
//-------------------------------------------
talk_div_boct(
  "Hi, I can partially understand you. Maybe, say hi to me or ask my age. But, Don't call me an idiot"
);

class directReplies {
  words: string[];
  replyString: string;

  constructor(inWrds: string[], outsen: string) {
    this.words = inWrds;
    this.replyString = outsen;
  }

  reply() {
    talk_div_boct(this.replyString);
  }
}

const intro = new directReplies(
  ["hi", "hello", "hey"],
  "Hi to you too"
);

const readempty = new directReplies(
  ["*empty*", ""],
  "Oh! Come on. Talk Something Sensible"
);

const readNo = new directReplies(
  ["no", "nothing"],
  "You are basically NOTHING!!!"
);

const readok = new directReplies(
  ["ok", "ohk", "ogk", "wow", "great", "excellent", "nice", "awesome"],
  "WoW"
);

const readso = new directReplies(
  ["so", "what else"],
  "I am not so brilliant to say something!"
);

const readage = {
  words: ["what is your age", "whats your age", "your age"],
  reply: () => talk_div_boct(`My Creation began approx ${boctAge()} ago`),
};

const readannoy = {
  words: ["annoy me", "idiot", "dumb"],
  reply: () => {
    for (let i = 0; i < 10; i++) talk_div_boct("You're a IDIOT");
  },
};

const searchStuff = {
  words: ["google", "bing", "youtube", "duckduckgo"],
  reply: (sc: string) => {
    if (sc.slice(0, 6) == "google") {
      let ss = sc.slice(7);
      talk_div_boct("Ok, Searching Google for " + ss);
      window.open("https://www.google.com/search?q=" + ss);
    }
    if (sc.slice(0, 4) == "bing") {
      let ss = sc.slice(5);
      talk_div_boct("Ok, Searching Bing for " + ss);
      window.open("https://www.bing.com/search?q=" + ss);
    }
    if (sc.slice(0, 7) == "youtube") {
      let ss = sc.slice(8);
      talk_div_boct("Ok, Searching YouTube for " + ss);
      window.open("https://www.youtube.com/results?search_query=" + ss);
    }
    if (sc.slice(0, 10) == "duckduckgo") {
      let ss = sc.slice(11);
      talk_div_boct("Ok, Searching DuckDuckGo for " + ss);
      window.open("https://duckduckgo.com/?q=" + ss);
    }
  },
};

const dice = {
  words: ["roll a dice", "roll dice"],
  reply: () => talk_div_boct(rdmZ(1, 6)),
};

const coin = {
  words: ["flip a coin", "toss a coin"],
  reply: () => {
    rdmZ(0, 1) == 1 ? talk_div_boct("Heads") : talk_div_boct("Tails");
  },
};
