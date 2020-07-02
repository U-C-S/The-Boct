function logg(a) {console.log('ok');if(a == undefined){console.log('Variable Undefined');}else{console.log(`print "${a}"`);}}
//console.log(`Intial width: ${window.innerWidth} and height: ${window.innerHeight}`);
/*------------------------------------------------------------------------------*/
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


//setting-btn
const setBtn = document.getElementById("settingg");
const setCanva = document.getElementsByClassName("setting_canvas")[0];
const setClose = document.getElementsByClassName("closebtn")[0];
setBtn.addEventListener('click', ()=>{
  setCanva.style.display = "block";
  document.getElementById("mySidenav").style.width = "300px";
});
setClose.addEventListener('click', ()=>{
  setCanva.style.display = "none";
  document.getElementById("mySidenav").style.width = "0";
});
window.onclick = (e)=> {
  if (e.target == setCanva) {
    setCanva.style.display = "none";
  }
}




//-------------------PWA js---------------------
// Register service worker to control making site work offline
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/The-BOcT/service-worker.js')
           .then(function() { console.log('Service Worker Registered'); });
}

// Code to handle install prompt on desktop
let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the BOcT prompt');
        } else {
          console.log('User dismissed the BOcT prompt');
        }
        deferredPrompt = null;
      });
  });
});




/*

  <div class="setting_canvas">
    <div class="setting_main">
      <button id="setting_close_btn">close</button>
    </div>
  </div>


  const setBtn = document.getElementById("settingg");
const setCanva = document.getElementsByClassName("setting_canvas")[0];
const setClose = document.getElementById("setting_close_btn");
setBtn.addEventListener('click', ()=>{
  setCanva.style.display = "block";
});
setClose.addEventListener('click', ()=>{
  setCanva.style.display = "none";
});
window.onclick = function(event) {
  if (event.target == setCanva) {
    setCanva.style.display = "none";
  }
}


.setting_canvas{
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
}

.setting_main{
  height: 100%;
  width: 30%;
  min-width: 300px;
  background-color: var(--wit-in-dark);
}

@keyframes offcanva{
  from{
    
  }
}

*/