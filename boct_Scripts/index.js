function log(x) { console.log(x); }
var body = document.querySelector('body');
var alll = document.querySelector('.alll');
var barr = document.getElementById('barr');
barr.addEventListener('animationend', function () {
    document.getElementById('textt').innerHTML = 'Load Complete';
    barr.style.backgroundColor = '#FF1439';
});
window.addEventListener('load', function () { setTimeout(stopLoading, 2173); });
function stopLoading() {
    document.getElementById("loader").style.display = "none";
    body.scrollTop = 0;
    document.getElementById('title').style.animation = "focus-in-expand 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
}
var CLICK_BOT = document.getElementById('BOcT');
CLICK_BOT.addEventListener("click", BOcT_open);
var chatter = document.getElementById("chatter");
function BOcT_open() {
    CLICK_BOT.style.animation = "none";
    chatter.style.display = "block";
    CLICK_BOT.removeEventListener("click", BOcT_open);
    CLICK_BOT.addEventListener("click", BOcT_annoy_clicks);
}
function scroll_update() {
    var chat_scroll = document.getElementById("chatspace");
    chat_scroll.scrollTop = chat_scroll.scrollHeight;
}
function talk_div_boct(talkContent) {
    var newDIV = document.createElement("div");
    var talk_create = document.createElement("p");
    var talk_matter = document.createTextNode(talkContent);
    newDIV.className = "boct_talk";
    document.getElementById("chatspace").appendChild(newDIV);
    talk_create.appendChild(talk_matter);
    newDIV.appendChild(talk_create);
    scroll_update();
}
document.getElementById("typespace-enter-id").addEventListener("click", talk_div_hooman);
function talk_div_hooman() {
    var chat_boxx = document.querySelector(".typespace");
    var chat_content = chat_boxx.value;
    if (chat_content == '') {
        chat_content = '*empty*';
    }
    var newDIV = document.createElement("div");
    var talk_create = document.createElement("p");
    var talk_matter = document.createTextNode(chat_content);
    newDIV.className = "human_talk";
    document.getElementById("chatspace").appendChild(newDIV);
    talk_create.appendChild(talk_matter);
    newDIV.appendChild(talk_create);
    scroll_update();
    chat_boxx.value = "";
    chat_process(chat_content);
}
var click_count = 0;
function BOcT_annoy_clicks() {
    click_count += 1;
    if (click_count === 3) {
        click_count = 0;
        talk_div_boct("Stop annoying me!");
    }
}
talk_div_boct("Hi, I can partially understand you. Maybe, say hi to me or ask my age. But, Don't call me an idiot");
var dLocation = document.location;
document.getElementById('experimental').addEventListener('click', function () { dLocation = "/Experimental/"; });
var offcanvas = {
    show: function () { body.classList.add('show-settings'); },
    hide: function () { body.classList.remove('show-settings'); },
    check: function () { return body.classList.contains('show-settings'); },
    toggle: function () { offcanvas.check() ? offcanvas.hide() : offcanvas.show(); }
};
document.querySelector('#settingg').addEventListener('click', offcanvas.toggle);
body.addEventListener('click', function (e) {
    if (offcanvas.check() && alll.contains(e.target)) {
        e.preventDefault();
        offcanvas.hide();
    }
}, true);
var ipopup = document.getElementById("info_popup");
document.getElementById("i-btn").onclick = function () { ipopup.style.display = "block"; };
document.getElementsByClassName("info_close")[0].addEventListener('click', function () {
    ipopup.style.display = "none";
});
window.addEventListener('click', function (e) {
    if (e.target == ipopup) {
        ipopup.style.display = "none";
    }
});
var toggler = document.querySelector('.toggleTheme');
var currentThemeCokie = localStorage.getItem('theme');
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
    if (toggler.dataset.themenow == "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        toggler.dataset.themenow = "light";
        localStorage.setItem('theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggler.dataset.themenow = "dark";
        localStorage.setItem('theme', 'dark');
    }
}
