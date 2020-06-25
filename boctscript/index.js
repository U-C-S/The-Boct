/*------------------------------------------------------------------------------*/
window.onload = setTimeout(stopLoading, 2713);

document.getElementById('barr').addEventListener('animationend', ()=>{
  document.getElementById('textt').innerHTML = 'Load Complete';});

function stopLoading() {
  document.getElementById("loader").style.display="none";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.getElementById('title').style.animation = "focus-in-expand 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
}

var click_count = 0;
const CLICK_BOT = document.getElementById('BOcT');
CLICK_BOT.addEventListener("click", BOcT_open);

function BOcT_open() {
  document.getElementById("content-div-bot").style.margin="10px auto 20px";
  document.getElementById("chatter").style.display="block";
  CLICK_BOT.removeEventListener("click", BOcT_open);
  CLICK_BOT.addEventListener("click", BOcT_annoy_clicks);
}

function BOcT_annoy_clicks() {
  click_count += 1;
  if (click_count === 4) {
    click_count = 0;
    talk_div_boct("Stop annoying me!");
  }
}


/* CSS DUMP

@keyframes flicker-in-1 {
  0%, 10%, 10.2%, 20%, 20.6%, 30%, 30.6%, 45%, 55.1%, 57%, 60.1%, 65%, 75.1%, 77%, 85.1%, 86%, 86.2%, 99.1% {opacity: 0;}
  10.1%, 20.1%, 30.1%, 30.5%, 45.1%, 50%, 55%, 57.1%, 60%, 65.1%, 75%, 77.1%, 85%, 86.1%, 86.3%, 99%, 99.2%, 100% {opacity: 1;}
}


*/
/* JS DUMP

document.getElementById('content-div-bot').style.animation = "flicker-in-1 2.3s linear forwards";

*/