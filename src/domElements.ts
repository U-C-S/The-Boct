const body = document.body;

const ElemList = {
  Main: Elem('Main'),//ok
  loadScreen: Elem('loadScreen'),
  load_bar: Elem('load_barr'),
  load_text: Elem('load_text'),

  heading: Elem('heading'),//ok
  boct_head: Elem('BOcT'),//ok

  Chatter: Elem('Chatter'),//ok
  theChat: Elem('chatspace'),//ok
  chat_replier: Elem('typespace-enter'),//ok
  chat_boxx: Elem('typespace'),//ok

  settingBtn: Elem('settingBtn'),//ok
  infoBtn: Elem('infoBtn'),//ok
  themeBtn: Elem('ThemeBtn'),//ok
  Version: Elem("releaseVer"),

  InfoBox: Elem('info_popup'),//ok
  infoClose: Elem('info_close'),
}

function Elem(elem: string, type?: string): HTMLElement {
  if(type == 'q') 
    return document.querySelector(elem);
  else 
    return document.getElementById(elem);
}