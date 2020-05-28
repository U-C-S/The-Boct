console.log("I'm 'The BOcT' v1.2.3, created by @The-UCS-Variable");
window.onload = setTimeout(stopLoading, 2713);
/*------------------------------------------------------------------------------*/
function stopLoading() {
  document.getElementById("loader").style.display="none";
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

//import { talk_div_boct } from "/boctscript/boct.js";
function BOcT_annoy_clicks() {
    click_count += 1;
    if (click_count === 10) {
      click_count = 0;
      talk_div_boct("Stop annoying me!");
    }
  }