const body = document.body;//ok
//const ElemMAIN: HTMLElement = document.getElementById('main');//ok,remove
//const barr = <HTMLElement>document.getElementById('load_barr');
//const CLICK_BOT = <HTMLInputElement> document.getElementById('BOcT');
//const chatter = <HTMLElement> document.getElementById("chatter");



const HTMLElem = {
  Main: Elem('main'),//ok
  loadScreen: Elem('loadScreen'),
  load_bar: Elem('load_barr'),
  load_text: Elem('load_text'),

  heading: Elem('heading'),//ok
  boct_head: Elem('BOcT'),//ok

  Chatter: Elem('chatter'),//ok
  theChat: Elem('chatspace'),//ok
  chat_replier: Elem('typespace-enter'),//ok
  chat_boxx: Elem('typespace'),//ok

  settingBtn: Elem('settingBtn'),//ok
  infoBtn: Elem('infoBtn'),//ok
  themeBtn: Elem('ThemeBtn'),//ok

  InfoBox: Elem('info_popup'),//ok
  infoClose: Elem('info_close'),
}

function Elem(elem: string, type?: string): HTMLElement {
  if(type == 'q') 
    return document.querySelector(elem);
  // else if(type == 'c') 
  //   return document.getElementsByClassName(elem)[0];
  else 
    return document.getElementById(elem);
}