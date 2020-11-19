//function log(x: any){ console.log(x) }
HTMLElem.load_bar.addEventListener('animationend', ()=>{
  HTMLElem.load_bar.style.backgroundColor = '#FF1439';
  HTMLElem.load_text.innerHTML = 'Load Complete';
});

window.addEventListener('load', () => { setTimeout(stopLoading, 2173) });
function stopLoading() {
  HTMLElem.loadScreen.style.display="none";
  body.scrollTop = 0;
  HTMLElem.heading.style.animation = "focus-in-expand 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
}


HTMLElem.boct_head.addEventListener("click", BOcT_open);
function BOcT_open() {
  HTMLElem.boct_head.style.animation = "none";
  HTMLElem.Chatter.style.display="block";
  HTMLElem.boct_head.removeEventListener("click", BOcT_open);
  HTMLElem.boct_head.addEventListener("click", BOcT_annoy_clicks);
}


//scroll to bottom after a new message
function scroll_update() {
  HTMLElem.theChat.scrollTop = HTMLElem.theChat.scrollHeight;
}

//------------------------------------------------------------------
function talk_div_boct(talkContent: any) {
  let div = document.createElement("div");
  div.className = "boct_talk";
  div.innerHTML = `<p>${talkContent}</p>`;
  HTMLElem.theChat.appendChild(div);
  scroll_update();
}

//User reply js
HTMLElem.chat_replier.addEventListener("click", talk_div_hooman);
function talk_div_hooman() {
  const chat_boxx = <HTMLInputElement> HTMLElem.chat_boxx;

  let chat_content = (chat_boxx.value) ? chat_boxx.value : "*empty*";
  let div = document.createElement("div");
  div.className = "human_talk";
  div.innerHTML = `<p>${chat_content}</p>`;
  HTMLElem.theChat.appendChild(div);
  chat_boxx.value = "";

  chat_process(chat_content);
  scroll_update();
}

/*------------------------------------------------------------------*/
talk_div_boct("Hi, I can partially understand you. Maybe, say hi to me or ask my age. But, Don't call me an idiot");

let click_count = 0;
function BOcT_annoy_clicks() {
  click_count += 1;
  if (click_count === 3) {
    talk_div_boct("Stop annoying me!");
  }
}

//Toggle Off-Canvas for Settings------------------------------------
const offcanvas = {
  show: ()=>{ body.classList.add('show-settings'); },
  hide: ()=>{ body.classList.remove('show-settings'); },
  check: ()=>{ return body.classList.contains('show-settings'); },
  toggle: ()=>{ offcanvas.check() ? offcanvas.hide() : offcanvas.show(); }
}

HTMLElem.settingBtn.addEventListener('click', offcanvas.toggle);
body.addEventListener('click', (e: any)=>{
  if(offcanvas.check() && HTMLElem.Main.contains(e.target)){
      e.preventDefault();
      offcanvas.hide();
  }
}, true);


//info popup--------------------------------------
const InfoBox = HTMLElem.InfoBox;
HTMLElem.infoBtn.onclick = ()=> { InfoBox.style.display = "block"; }
HTMLElem.infoClose.addEventListener('click', () => {
  InfoBox.style.display = "none";
})
window.addEventListener('click',(e: any)=>{
  if (e.target == InfoBox) { InfoBox.style.display = "none"; }
})


//Toggle Dark Mode------------------------------
const currentThemeCokie = localStorage.getItem('theme');
const toggler = HTMLElem.themeBtn;

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

//SVG renedering
function svgRenedertoID(id: string, svgDraw: string){
  document.getElementById(id).setAttribute("d",svgDraw);
}
svgRenedertoID("svg0", "M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z")
svgRenedertoID("svg1", "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z")
svgRenedertoID("svg2", "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z")
svgRenedertoID("svg3", "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z")
svgRenedertoID("svg4","M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z");

