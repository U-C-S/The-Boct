function logg(a) {console.log('ok');if(a == undefined){console.log('Variable Undefined');}else{console.log(`print "${a}"`);}}

console.log(`Intial width: ${window.innerWidth} and height: ${window.innerHeight}`);


//PWA
//index.js
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
           .then(function() {
             console.log('Service Worker Registered');
          });
}



//service-worker.js
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('The-BOcT').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/boctstyle/boct.css',
        '/boctstyle/boctmediaq.css',
        '/boctscript/index.js',
        '/boctscript/talk-script.js',
        '/boctscript/boct.js'
      ]);
    })
  );
 });
//Network falling back to the cache
//https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker#network_falling_back_to_the_cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});





/*------------------------------------------------------------------------------*/
//index.js
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






//talkscript


const greetingUser = {
  words: ['Hi','Welcome','How are you','How is your day']
}

/*
const readNo = {
  words: ['no','nothing','i dont know'],
  reply: function() {
    talk_div_boct("You are basically NOTHING!!!");
  }
}

*/

/*
greeting words:
  hi, welcome, how are you, how is your day, 
*/


/*

greetuser -> promptuser ->

*/








//boct.js


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



/*
<div class="setting_canvas">
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn">&times;</a>
  <a>The BOcT</a>
</div>
</div>






.setting_canvas{
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: var(--blk-in-dark);
  overflow-x: hidden;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: var(--wit-in-dark);
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}



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

*/