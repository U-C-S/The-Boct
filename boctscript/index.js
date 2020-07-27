//-----------------js for PWA-------------------
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    addBtn.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the BOcT Installation prompt');
        } else {
          console.log('User dismissed the BOcT Installation prompt');
        }
        deferredPrompt = null;
      });
  });
});



//Js for index.html
const body = document.querySelector('body');
const alll = document.querySelector('.alll');



window.onload = setTimeout(stopLoading, 2173);
document.getElementById('barr').addEventListener('animationend', ()=>{
  document.getElementById('textt').innerHTML = 'Load Complete';
  document.getElementById('barr').style.backgroundColor = '#FF1439';
});

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

//User reply js
const SEND_MSG_TO_BOCT = document.getElementById("typespace-enter-id");
SEND_MSG_TO_BOCT.addEventListener("click", talk_div_hooman);
function talk_div_hooman() {
  const chat_boxx = document.querySelector(".typespace");
  var chat_content = chat_boxx.value;
  if(chat_content == '') { chat_content = '*empty*'; }
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
  setTimeout(boct_study_chat, 600, chat_contenta);
}

//------------------------------------------------------------------

var click_count = 0;
function BOcT_annoy_clicks() {
  click_count += 1;
  if (click_count === 4) {
    click_count = 0;
    talk_div_boct("Stop annoying me!");
  }
}

talk_div_boct("Hi, I can partially understand you. Maybe, say hi to me or ask my age. But, Don't call me an idiot");

document.getElementById('experimental').addEventListener('click',()=>{ document.location = "/Experimental/" });


//Toggle Off-Canvas for Settings------------------------------------
const offcanvas = {
  show: ()=>{ body.classList.add('show-sidebar'); },
  hide: ()=>{ body.classList.remove('show-sidebar'); },
  check: ()=>{ return body.classList.contains('show-sidebar'); },
  toggle: ()=>{ offcanvas.check() ? offcanvas.hide() : offcanvas.show(); }
}

document.querySelector('#settingg').addEventListener('click', offcanvas.toggle, false);
body.addEventListener('click', (e)=>{
  if(offcanvas.check() && alll.contains(e.target)){
      e.preventDefault();
      offcanvas.hide();
  }
}, true);


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


//info popup--------------------------------------
const ipopup = document.getElementById("info_popup");

document.getElementById("i-btn").onclick = ()=> { ipopup.style.display = "block"; }
document.getElementsByClassName("info_close")[0].onclick = ()=> { ipopup.style.display = "none"; }
window.onclick = (e)=>{
  if (e.target == ipopup) {
    ipopup.style.display = "none";
  }
}
