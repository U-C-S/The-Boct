import { talk_div_boct,scroll_update } from "/boctscript/boct.js";

const SEND_MSG_TO_BOCT = document.getElementById("typespace-enter-id");
SEND_MSG_TO_BOCT.addEventListener("click", talk_div_hooman);

function talk_div_hooman() {
  const chat_boxx = document.querySelector(".typespace");
  const chat_content = chat_boxx.value;
  const newDIV = document.createElement("div");
  const attr = document.createAttribute("class");
  const talk_create = document.createElement("p");
  const talk_matter = document.createTextNode(chat_content);
  attr.value = "human_talk";
  newDIV.setAttributeNode(attr);
  document.getElementById("chatspace").appendChild(newDIV);
  talk_create.appendChild(talk_matter);
  newDIV.appendChild(talk_create);

  scroll_update();
  chat_boxx.value = "";
  var chat_contenta = chat_content.trim().toLowerCase();
  setTimeout(proto_boct_study_chat, 800, chat_contenta);
}

const readage = {
  words: ['age','how long','what is your age'],
  reply: function() {
    var birthdate = new Date(2020, 4, 5, 17, 43, 0, 0);
    var Difference_In_Time = Date.now() - birthdate.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    talk_div_boct(`I was created approx ${Difference_In_Days} days ago`);
  }
}
const readempty = {
  words: [''],
  reply: function() {
    talk_div_boct('Oh! Come on. Reply Something Sensible');
  }
}
const readannoy = {
  words: ['annoy me','idiot'],
  reply: function() {
    for (let i = 0; i < 10; i++) {
      talk_div_boct("You're a IDIOT"); }
  }
}

const readables = [readage , readempty , readannoy];

function proto_boct_study_chat(studycontent) {
  for(let i = 0; i < readables.length; i++) {
    for (let j = 0; j < readables[i].words.length; j++) {
      if(studycontent === readables[i].words[j]){
        readables[i].reply();
      }
    }
  }
}
