const stg_chatbox = document.getElementById("stg_chat_open_default");
if (localStorage.getItem("chatbox") == "open") {
  stg_chatbox.checked = true;
  ElemList.boct_head.style.animation = "none";
  ElemList.Chatter.style.display = "block";
} else {
  stg_chatbox.checked = false;
  ElemList.Chatter.style.display = "none";
}
stg_chatbox.addEventListener("click", () => {
  if (stg_chatbox.checked == true) {
    ElemList.boct_head.style.animation = "none";
    ElemList.Chatter.style.display = "block";
    localStorage.setItem("chatbox", "open");
  } else {
    localStorage.setItem("chatbox", "close");
  }
});
const stg_load = document.getElementById("stg_disable_load");
if (localStorage.getItem("loading") == "no") {
  stg_load.checked = true;
  stopLoading();
} else {
  stg_load.checked = false;
}
stg_load.addEventListener("click", () => {
  stg_load.checked == true ? localStorage.setItem("loading", "no") : localStorage.setItem("loading", "yes");
});
const stg_cokieClear = document.getElementsByClassName("stg_btn")[0];
stg_cokieClear.addEventListener("click", () => {
  localStorage.removeItem("theme");
  localStorage.removeItem("chatbox");
  localStorage.clear();
});
document.getElementById("stg_clearchat").addEventListener("click", () => {
  ElemList.theChat.innerHTML = "";
  setTimeout(() => {
    talk_div_boct("Hoi");
  }, 1e3);
});
