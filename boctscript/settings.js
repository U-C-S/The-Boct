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

//0. Clear LocalStorage (Vue Powered)
var cookieClearer = new Vue({
  el: '#cokieClear',
  data: {
    cookieInfo: ''
  },
  methods: {
    cokiereset: function() {
      localStorage.removeItem("theme");
      localStorage.removeItem("chatbox");
      localStorage.clear();
      this.cookieInfo = "- Data Cleared. Reload the Page -";
    }
  }
})