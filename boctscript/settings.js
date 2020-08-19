//Settings----------------------------------------------------------
//1.open chatbox by default
const stg_chatbox = document.getElementById("stg_chat_open_default");
const stg_chatbox_cokie = localStorage.getItem('chatbox');

if (stg_chatbox_cokie == 'open'){
  stg_chatbox.checked = true;
  CLICK_BOT.style.animation = "none";
  document.getElementById("chatter").style.display="block";
}
else{
  stg_chatbox.checked = false;
  document.getElementById("chatter").style.display="none";
}

stg_chatbox.addEventListener('click',()=>{
  if(stg_chatbox.checked == true){
    CLICK_BOT.style.animation = "none";
    document.getElementById("chatter").style.display="block";
    localStorage.setItem('chatbox', 'open');
  }
  else{
    localStorage.setItem('chatbox','close');
  }
});

//2.Diable Loading Screen
const stg_load = document.getElementById("stg_disable_load");
const stg_load_cokie = localStorage.getItem('loading');

if (stg_load_cokie == 'no'){
  stg_load.checked = true;
  stopLoading();
}
else{
  stg_load.checked = false;
}

stg_load.addEventListener('click',()=>{
  stg_load.checked == true ? localStorage.setItem('loading', 'no') : localStorage.setItem('loading','yes');
});

//------others----------------------------------
//0. Clear LocalStorage (Vue Powered)
var cookieClearer = new Vue({
  el: '#cokieClear',
  data: {
    cookieInfo: 'This will clear your localStorage Data for this App',
    cokieClearBtn: 'Clear your Settings'
  },
  methods: {
    cokieReset: function() {
      localStorage.removeItem("theme");
      localStorage.removeItem("chatbox");
      localStorage.clear();
      this.cookieInfo = "- Cleared. Reload the Page -";
    }
  }
})

//0a. Clear all the conversation
document.getElementById('stg_clearchat').addEventListener('click',()=>{
  document.getElementById("chatspace").innerHTML = '';
  setTimeout(()=>{talk_div_boct('Hoi')},1000);
})