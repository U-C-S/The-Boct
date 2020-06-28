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

//Dark Mode
const toggler = document.querySelector('.togglemode');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'light') {
    toggler.dataset.themeNow = "light";
  }
}
else {
  toggler.dataset.themeNow = "dark";
}

toggler.addEventListener('click', themeAlternate);
function themeAlternate() {
  if(toggler.dataset.themeNow == "dark"){
    document.documentElement.setAttribute('data-theme', 'light');
    toggler.dataset.themeNow = "light";
    localStorage.setItem('theme', 'light');
  }
  else{
    document.documentElement.setAttribute('data-theme', 'dark');
    toggler.dataset.themeNow = "dark";
    localStorage.setItem('theme', 'dark');
  }
}

console.log('width: ' + window.innerWidth);
console.log('height: ' + window.innerHeight);

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