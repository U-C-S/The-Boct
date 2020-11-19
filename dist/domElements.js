var body = document.body;
var HTMLElem = {
    Main: Elem('main'),
    loadScreen: Elem('loadScreen'),
    load_bar: Elem('load_barr'),
    load_text: Elem('load_text'),
    heading: Elem('heading'),
    boct_head: Elem('BOcT'),
    Chatter: Elem('chatter'),
    theChat: Elem('chatspace'),
    chat_replier: Elem('typespace-enter'),
    chat_boxx: Elem('typespace'),
    settingBtn: Elem('settingBtn'),
    infoBtn: Elem('infoBtn'),
    themeBtn: Elem('ThemeBtn'),
    InfoBox: Elem('info_popup'),
    infoClose: Elem('info_close')
};
function Elem(elem, type) {
    if (type == 'q')
        return document.querySelector(elem);
    else
        return document.getElementById(elem);
}
