//------------------------------------------------------------------
//Js for index.html
function log(x){ console.log(x) }


const body = document.querySelector('body');
const alll = document.querySelector('.alll');


document.getElementById('barr').addEventListener('animationend', ()=>{
  document.getElementById('textt').innerHTML = 'Load Complete';
  document.getElementById('barr').style.backgroundColor = '#FF1439';
});

window.onload = setTimeout(stopLoading, 2173);
function stopLoading() {
  document.getElementById("loader").style.display="none";
  document.documentElement.scrollTop = 0;
  document.getElementById('title').style.animation = "focus-in-expand 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
}


const CLICK_BOT = document.getElementById('BOcT');
CLICK_BOT.addEventListener("click", BOcT_open);
function BOcT_open() {
  CLICK_BOT.style.animation = "none";
  document.getElementById("chatter").style.display="block";
  CLICK_BOT.removeEventListener("click", BOcT_open);
  CLICK_BOT.addEventListener("click", BOcT_annoy_clicks);
}


//scroll to bottom after a new message
function scroll_update() {
  const chat_scroll = document.getElementById("chatspace");
  chat_scroll.scrollTop = chat_scroll.scrollHeight;
}

//------------------------------------------------------------------
//Boct reply js
function talk_div_boct(talkContent) {
  const newDIV = document.createElement("div");
  const talk_create = document.createElement("p");
  const talk_matter = document.createTextNode(talkContent);

  newDIV.className = "boct_talk";
  document.getElementById("chatspace").appendChild(newDIV);
  talk_create.appendChild(talk_matter);
  newDIV.appendChild(talk_create);
  scroll_update();
}

//User reply js
document.getElementById("typespace-enter-id").addEventListener("click", talk_div_hooman);

function talk_div_hooman() {
  const chat_boxx = document.querySelector(".typespace");
  var chat_content = chat_boxx.value;
  if(chat_content == '') { chat_content = '*empty*'; }
  const newDIV = document.createElement("div");
  const talk_create = document.createElement("p");
  const talk_matter = document.createTextNode(chat_content);

  newDIV.className = "human_talk"
  document.getElementById("chatspace").appendChild(newDIV);
  talk_create.appendChild(talk_matter);
  newDIV.appendChild(talk_create);
  scroll_update();
  chat_boxx.value = "";

  chat_process(chat_content);
}

//------------------------------------------------------------------

var click_count = 0;
function BOcT_annoy_clicks() {
  click_count += 1;
  if (click_count === 3) {
    click_count = 0;
    talk_div_boct("Stop annoying me!");
  }
}

talk_div_boct("Hi, I can partially understand you. Maybe, say hi to me or ask my age. But, Don't call me an idiot");

document.getElementById('experimental').addEventListener('click',()=>{ document.location = "/Experimental/" });


//Toggle Off-Canvas for Settings------------------------------------
const offcanvas = {
  show: ()=>{ body.classList.add('show-settings'); },
  hide: ()=>{ body.classList.remove('show-settings'); },
  check: ()=>{ return body.classList.contains('show-settings'); },
  toggle: ()=>{ offcanvas.check() ? offcanvas.hide() : offcanvas.show(); }
}

document.querySelector('#settingg').addEventListener('click', offcanvas.toggle);
body.addEventListener('click', (e)=>{
  if(offcanvas.check() && alll.contains(e.target)){
      e.preventDefault();
      offcanvas.hide();
  }
}, true);


//info popup--------------------------------------
const ipopup = document.getElementById("info_popup");

document.getElementById("i-btn").onclick = ()=> { ipopup.style.display = "block"; }
document.getElementsByClassName("info_close")[0].onclick = ()=> { ipopup.style.display = "none"; }
window.onclick = (e)=>{
  if (e.target == ipopup) {
    ipopup.style.display = "none";
  }
}


//Toggle Dark Mode------------------------------
const toggler = document.querySelector('.toggleTheme');
const currentThemeCokie = localStorage.getItem('theme');

if (currentThemeCokie) {
  document.documentElement.setAttribute('data-theme', currentThemeCokie);
  if (currentThemeCokie == 'light') {
    toggler.dataset.themenow = "light";
  }
}
else {
  toggler.dataset.themenow = "dark";
}

toggler.addEventListener('click', themeAlternate);
function themeAlternate() {
  if(toggler.dataset.themenow == "dark"){
    document.documentElement.setAttribute('data-theme', 'light');
    toggler.dataset.themenow = "light";
    localStorage.setItem('theme', 'light');
  }
  else{
    document.documentElement.setAttribute('data-theme', 'dark');
    toggler.dataset.themenow = "dark";
    localStorage.setItem('theme', 'dark');
  }
}