//scroll to bottom after a new message
function scroll_update() {
  const chat_scroll = document.getElementById("chatspace");
  chat_scroll.scrollTop = chat_scroll.scrollHeight;
}

function talk_div_boct(talkContent) {
  const newDIV = document.createElement("div");
  const attr = document.createAttribute("class");
  const talk_create = document.createElement("p");
  const talk_matter = document.createTextNode(talkContent);
  attr.value = "boct_talk";
  newDIV.setAttributeNode(attr);
  document.getElementById("chatspace").appendChild(newDIV);
  talk_create.appendChild(talk_matter);
  newDIV.appendChild(talk_create);
  scroll_update();
}

const SEND_MSG_TO_BOCT = document.getElementById("typespace-enter-id");
SEND_MSG_TO_BOCT.addEventListener("click", talk_div_hooman);
function talk_div_hooman() {
  const chat_boxx = document.querySelector(".typespace");
  var chat_content = chat_boxx.value;
  if(chat_content == '') {
    chat_content = '*empty*';
  }
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
  const chat_contenta = chat_content.trim().toLowerCase();
  setTimeout(proto_boct_study_chat, 800, chat_contenta);
}

talk_div_boct("Hi, I can partially understand you. Maybe, say hi to me or ask my age. But, Don't call me an idiot");