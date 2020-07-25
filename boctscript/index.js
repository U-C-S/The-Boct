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
  document.getElementById('textt').innerHTML = 'Load Complete';});

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

var click_count = 0;
function BOcT_annoy_clicks() {
  click_count += 1;
  if (click_count === 4) {
    click_count = 0;
    talk_div_boct("Stop annoying me!");
  }
}

document.getElementById('experimental').addEventListener('click',()=>{ document.location = "/Experimental/" });

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


//Settings----------------------------------------------------------
//1.open chatbox by default
const stg_chatbox = document.getElementById("stg_chat_open_default");
const stg_chatbox_cokie = localStorage.getItem('chatbox');

if (stg_chatbox_cokie == 'open'){
  stg_chatbox.checked = true;
  CLICK_BOT.style.animation = "none";
  document.getElementById("chatter").style.display="block";
}
else{
  stg_chatbox.checked = false;
  document.getElementById("chatter").style.display="none";
}

stg_chatbox.addEventListener('click',()=>{
  if(stg_chatbox.checked == true){
    CLICK_BOT.style.animation = "none";
    document.getElementById("chatter").style.display="block";
    localStorage.setItem('chatbox', 'open');
  }
  else{
    localStorage.setItem('chatbox','close');
  }
});

//0. Clear LocalStorage
document.getElementById('cokieClear').addEventListener('click',()=>{
  localStorage.removeItem("theme");
  localStorage.removeItem("chatbox");
  localStorage.clear();
},false);