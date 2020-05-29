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

talk_div_boct("I can partially understand you. Maybe, say hi to me or ask my age. But, Don't call me an idiot");

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

//export { talk_div_boct,scroll_update };


/*


function boct_study_chat(studycontent) {
  if (studycontent === "annoy me") {
    for (var i = 0; i < 20; i++) {
      talk_div_boct("You're a IDIOT");
    }
  }
  if(studycontent != null) {var letters = studycontent.length; }
  let notnum = isNaN(studycontent);


   else if (studycontent === 'no') { talk_div_boct('You are basically NOTHING!!!'); }
   else if (letters < 4) { talk_div_boct(`I dont believe your name is ${studycontent}`); }
   else if (studycontent.indexOf('name') !== -1 ) { talk_div_boct('My name is BOcT'); }
   else if (notnum === true) { talk_div_boct(`So ${studycontent}, You will have a Bright Future`); }
}


if (notnum === false) { talk_div_boct('Type a name, YOU FOOL'); }

else if (studycontent === "age") {
  var birthdate = new Date("05/06/2020");
  var Difference_In_Time = Date.now() - birthdate.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  talk_div_boct("Approx, " + Difference_In_Days + " days");
}



const read_google = {
  words: ['google '],
  reply: function() {

  }
}


*/




/*
--list of functions here--
_____________________
- stopLoading
- scroll_update
- BOcT_open
- talk_div_boct
- talk_div_hooman
- boct_study_chat
- BOcT_annoy_clicks


_____________________

--list of Variables here--
_____________________
-


/*
console.log('working success');
---------------DUMP-------------------
    document.getElementById('typespace-id').focus();


  function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

The Annoy me! function
click counter


type Writer Effect
_____________________
var i = 0;
var speed = 40;

function typeWriter() {
  if (i < talkContent.length) {
    document.getElementById("demo").innerHTML += talkContent.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
_____________________
unit convertors
punchuation ignore
*/
