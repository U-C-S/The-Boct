console.log("Font Awesome v5.13.0");
console.log("Animations by animista.net")
console.log("I'm 'The BOcT' v1.2.1, created by @The-UCS-Variable");
/*------------------------------------------------------------------------------*/


//scroll to bottom after a new message
function scroll_update() {
  var chat_scroll = document.getElementById("chatspace");
  chat_scroll.scrollTop = chat_scroll.scrollHeight;
}


var click_count = 0;
const CLICK_BOT = document.getElementById('BOcT');
CLICK_BOT.addEventListener("click", BOcT_open);

function BOcT_open() {
  document.getElementById("content-div-bot").style.margin="10px auto 20px";
  document.getElementById("chatter").style.display="block";
  CLICK_BOT.removeEventListener("click", BOcT_open);
  CLICK_BOT.addEventListener("click", BOcT_annoy_clicks);

  document.getElementById("typespace-id").focus();
}


function talk_div_boct(talkContent) {
  var newDIV = document.createElement("div");
  var attr = document.createAttribute("class");
  var talk_create = document.createElement("p");
  var talk_matter = document.createTextNode(talkContent);

  attr.value = "boct_talk recent_talk";
  newDIV.setAttributeNode(attr);
  document.getElementById("chatspace").appendChild(newDIV);
  talk_create.appendChild(talk_matter);
  newDIV.appendChild(talk_create);
  scroll_update();
}

const SEND_MSG_TO_BOCT = document.getElementById("typespace-enter-id");
SEND_MSG_TO_BOCT.addEventListener("click", talk_div_hooman);

function talk_div_hooman() {
  var chat_boxx = document.querySelector(".typespace");
  var chat_content = chat_boxx.value;

  var newDIV = document.createElement("div");
  var attr = document.createAttribute("class");
  var talk_create = document.createElement("p");
  var talk_matter = document.createTextNode(chat_content);
  attr.value = "human_talk";
  newDIV.setAttributeNode(attr);
  document.getElementById("chatspace").appendChild(newDIV);
  talk_create.appendChild(talk_matter);
  newDIV.appendChild(talk_create);

  chat_boxx.value = "";
  scroll_update();
  return chat_content;
}



function BOcT_annoy_clicks() {
   click_count += 1;
   if (click_count === 10) {
     click_count = 0;
     talk_div_boct("Stop annoying me!");
   }
}

//The Annoy me! function
if (talk_div_hooman.value === "annoy me") {
   function annoyer() {  setInterval(function(){ alert("You are a IDIOT");}, 2000);  }
}





/*
--list of functions here--
_____________________
- BOcT_open
- BOcT_annoy_clicks
- talk_div_boct
- talk_div_hooman

_____________________

--list of Variables here--
_____________________
-


/*
console.log('working success');
---------------DUMP-------------------

function talk_div_boct(talkContent) {
    var a = document.createElement("div");
  var b = document.createElement("p");
  var c = document.createAttribute("class");
  var d = document.createTextNode(talkContent);

  c.value = "boct_talk recent_talk";
  a.setAttributeNode(c);
  document.getElementById("chatspace").appendChild(a);
  b.appendChild(d);
  a.appendChild(b);
}






//old boct function


    const name = prompt("Hoi, What's your name? \nDon't type nothing");
     if(name != null) {var letters = name.length; }
     let notnum = isNaN(name);

      if(name === null) { alert('YOU LEGENDARY IDIOT!'); }
      else if (name === 'nothing' || 'no') { alert('You are basically NOTHING!!!'); }
      else if (notnum === false) { alert('Type a name, YOU FOOL'); }
      else if (letters < 4) { alert('I dont believe your name is "' + name + '"'); }
      else if (name.indexOf('name') !== -1 ) {alert('My name is BOcT'); }
      else if (notnum === true) {
         alert('So ' + name + ', You will have a Bright Future');
    }

    document.getElementById('typespace-id').focus();



  function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

//The Annoy me! function
function annoyer() {  setInterval(function(){ alert("You are a IDIOT");}, 2000);  }

click counter
type Writer Effect

unit convertors
*/
