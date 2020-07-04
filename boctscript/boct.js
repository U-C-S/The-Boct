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





/*

const toggleo = document.querySelector('.togglemode');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleo.checked = true;
    }
}

function switchTheme() {
    if (toggleo.dataset.themeNow != 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleo.dataset.themeNow = 'dark';
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleo.dataset.themeNow = 'light';
    }    
}

toggleo.addEventListener('click', switchTheme);
*/


/* CSS DUMP

@keyframes flicker-in-1 {
  0%, 10%, 10.2%, 20%, 20.6%, 30%, 30.6%, 45%, 55.1%, 57%, 60.1%, 65%, 75.1%, 77%, 85.1%, 86%, 86.2%, 99.1% {opacity: 0;}
  10.1%, 20.1%, 30.1%, 30.5%, 45.1%, 50%, 55%, 57.1%, 60%, 65.1%, 75%, 77.1%, 85%, 86.1%, 86.3%, 99%, 99.2%, 100% {opacity: 1;}
}


var(--wit-in-dark);
var(--blk-in-dark);



//FOOTER -----------------------------------------------------------
footer{
  border-top: 3px solid var(--wit-in-dark);
  padding: 10px 0;
  height: 40px;
  min-width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
footer > div{
   width: 150px;
   height: 20px;
   margin: auto;
   text-align: center;
}
footer > div > a {
   color: var(--wit-in-dark);
   text-decoration: none;
   font-family: 'Overpass', sans-serif;
   font-size: 12px;
}
footer > div > a:hover, footer > div > a:focus{
  color: #ff1439;
}


*/
/* JS DUMP

document.getElementById('content-div-bot').style.animation = "flicker-in-1 2.3s linear forwards";

let root = document.documentElement;
root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});



HTML DUMP

  <footer>
    <div>
      <a href="https://github.com/The-UCS-Variable/The-BOcT/blob/master/LICENSE.md" title="Under MIT LICENSE">© 2020 The-UCS-Variable</a>
    </div>
    <div>
      <a href="https://github.com/The-UCS-Variable/The-BOcT">View Source</a>
    </div>
  </footer>





*/