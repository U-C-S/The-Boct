var stg_chatbox = (document.getElementById("stg_chat_open_default"));
if (localStorage.getItem("chatbox") == "open") {
    stg_chatbox.checked = true;
    ElemList.boct_head.style.animation = "none";
    ElemList.Chatter.style.display = "block";
}
else {
    stg_chatbox.checked = false;
    ElemList.Chatter.style.display = "none";
}
stg_chatbox.addEventListener("click", function () {
    if (stg_chatbox.checked == true) {
        ElemList.boct_head.style.animation = "none";
        ElemList.Chatter.style.display = "block";
        localStorage.setItem("chatbox", "open");
    }
    else {
        localStorage.setItem("chatbox", "close");
    }
});
var stg_load = document.getElementById("stg_disable_load");
if (localStorage.getItem("loading") == "no") {
    stg_load.checked = true;
    stopLoading();
}
else {
    stg_load.checked = false;
}
stg_load.addEventListener("click", function () {
    stg_load.checked == true
        ? localStorage.setItem("loading", "no")
        : localStorage.setItem("loading", "yes");
});
var stg_cokieClear = (document.getElementsByClassName("stg_btn")[0]);
stg_cokieClear.addEventListener("click", function () {
    localStorage.removeItem("theme");
    localStorage.removeItem("chatbox");
    localStorage.clear();
});
document.getElementById("stg_clearchat").addEventListener("click", function () {
    ElemList.theChat.innerHTML = "";
    setTimeout(function () {
        talk_div_boct("Hoi");
    }, 1000);
});
