var stg_chatbox = document.getElementById("stg_chat_open_default");
var stg_chatbox_cokie = localStorage.getItem('chatbox');
if (stg_chatbox_cokie == 'open') {
    stg_chatbox.checked = true;
    CLICK_BOT.style.animation = "none";
    document.getElementById("chatter").style.display = "block";
}
else {
    stg_chatbox.checked = false;
    document.getElementById("chatter").style.display = "none";
}
stg_chatbox.addEventListener('click', function () {
    if (stg_chatbox.checked == true) {
        CLICK_BOT.style.animation = "none";
        document.getElementById("chatter").style.display = "block";
        localStorage.setItem('chatbox', 'open');
    }
    else {
        localStorage.setItem('chatbox', 'close');
    }
});
var stg_anim = document.getElementById("stg_remove_anim");
var stg_anim_cokie = localStorage.getItem('animations');
var EveryElem = document.querySelectorAll("*");
if (stg_anim_cokie == 'ok') {
    stg_anim.checked = true;
    CLICK_BOT.style.animation = "none";
}
else {
    stg_anim.checked = false;
}
stg_anim.addEventListener('click', function () {
    if (stg_anim.checked == true) {
        CLICK_BOT.style.animation = "none";
        localStorage.setItem('animations', 'ok');
    }
    else {
        localStorage.setItem('animations', 'no');
    }
});
var stg_load = document.getElementById("stg_disable_load");
var stg_load_cokie = localStorage.getItem('loading');
if (stg_load_cokie == 'no') {
    stg_load.checked = true;
    stopLoading();
}
else {
    stg_load.checked = false;
}
stg_load.addEventListener('click', function () {
    stg_load.checked == true ? localStorage.setItem('loading', 'no') : localStorage.setItem('loading', 'yes');
});
var stg_cokieClear = document.getElementsByClassName("stg_btn")[0];
stg_cokieClear.addEventListener('click', function () {
    localStorage.removeItem("theme");
    localStorage.removeItem("chatbox");
    localStorage.clear();
});
var stg_clearchat = document.getElementsByClassName("stg_btn")[1];
stg_clearchat.addEventListener('click', function () {
    document.getElementById("chatspace").innerHTML = '';
    setTimeout(function () { talk_div_boct('Hoi'); }, 1372);
});
