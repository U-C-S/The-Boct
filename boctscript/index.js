document.getElementById('experimental').addEventListener('click',()=>{
  document.location = "/Experimental/"
})

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

//Dark Mode
const toggler = document.querySelector('.togglemode');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme == 'light') {
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

//info-btn
const ipopup = document.getElementById("info_popup");
const ibtn = document.getElementById("i-btn");
const iclose = document.getElementsByClassName("info_close")[0];
ibtn.onclick = ()=> {
  ipopup.style.display = "block";
}

iclose.onclick = function() {
  ipopup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == ipopup) {
    ipopup.style.display = "none";
  }
}

//setting
var body = document.querySelector('body');
var alll = document.querySelector('.alll');
document.querySelector('#settingg').addEventListener('click', toggleSidebar, false);

function toggleSidebar(){
  isShowingSidebar() ? hideSidebar() : showSidebar();
}

function showSidebar(){
  body.classList.add('show-sidebar');
}

function hideSidebar(){
  body.classList.remove('show-sidebar');
}

function isShowingSidebar(){
  return body.classList.contains('show-sidebar');
}

body.addEventListener('click', (e)=>{
  if(isShowingSidebar() && alll.contains(e.target)){
      e.preventDefault();
      hideSidebar();
  }
}, true);





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