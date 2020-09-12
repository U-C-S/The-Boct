function chat_process(sentence) {
    var chat_TL = sentence.trim().toLowerCase();
    var chat_T = sentence.trim();
    setTimeout(boct_general_reply, 600, chat_TL);
    if (chat_TL.slice(0, 7) == 'convert') {
        unit_convert(chat_T);
    }
    if (chat_TL[0] == '.' || chat_TL[0] == '$') {
        DOt_commands(chat_TL);
    }
}
function boct_general_reply(studycontent) {
    var readables = [intro, readage, readempty, readannoy, readNo, readok, readso, dice, coin];
    var readables2 = [searchStuff];
    for (var i = 0; i < readables.length; i++) {
        loop1: for (var j = 0; j < readables[i].words.length; j++) {
            if (studycontent === readables[i].words[j]) {
                readables[i].reply();
                break loop1;
            }
        }
    }
    for (var i = 0; i < readables2.length; i++) {
        loop2: for (var j = 0; j < readables2[i].words.length; j++) {
            if (studycontent.includes(readables2[i].words[j])) {
                readables2[i].reply(studycontent);
                break loop2;
            }
        }
    }
}
function DOt_commands(word) {
    var comm = word.slice(1, 5);
    switch (comm) {
        case "":
            talk_div_boct('Type a Dot-Command');
            break;
        case 'name':
            talk_div_boct('BOcT');
            break;
        case 'age':
            var birthdate = new Date(2020, 4, 5, 17, 43, 0, 0);
            var Diff_In_Time = Date.now() - birthdate.getTime();
            var Diff_In_Days = Diff_In_Time / (1000 * 3600 * 24);
            var Days = Math.floor(Diff_In_Time / (1000 * 3600 * 24));
            var Diff_In_Hour = Math.floor((Diff_In_Days - Days) * 24);
            var Diff_In_Mins = Math.floor((((Diff_In_Days - Days) * 24) - Diff_In_Hour) * 60);
            talk_div_boct(Days + " days, " + Diff_In_Hour + " hours and " + Diff_In_Mins + " minutes");
            break;
        case 'god':
            talk_div_boct('U-C-S / Chanakya');
            break;
        case 'v':
            var ver = document.getElementsByClassName('release')[0];
            talk_div_boct("" + ver.innerHTML);
            break;
        case 'url':
            talk_div_boct('https://the-boct.github.io/');
            break;
        case 'beta':
            talk_div_boct('https://the-boct.github.io/Experimental/');
            break;
        case 'code':
            talk_div_boct('https://github.com/The-BOcT/');
            break;
        case 'meow':
            talk_div_boct('MeooW!.....MeeeeeeWww!');
            break;
        case 'dice':
            talk_div_boct(rdmZ(1, 6));
            break;
        case 'coin':
            coin.reply();
            break;
        default:
            talk_div_boct('INVALID DOt COMMAND');
            break;
    }
}
function rdmZ(m, n) {
    return Math.floor(Math.random() * (n - m + 1)) + m;
}
function replyRandom(_a) {
    var x = _a[0], y = _a[1];
    var rdmVal = rdmZ(0, 10);
    if (rdmVal > 5) {
        return talk_div_boct(x);
    }
    else {
        return talk_div_boct(y);
    }
}
var directReplies = (function () {
    function directReplies(inWrds, outsen) {
        this.words = inWrds;
        this.reply = function () { talk_div_boct(outsen); };
    }
    return directReplies;
}());
var intro = new directReplies(['hi', 'hello', 'hey', 'heya'], "Hi to you too");
var readempty = new directReplies(['*empty*', ''], "Oh! Come on. Talk Something Sensible");
var readNo = new directReplies(['no', 'nothing', 'i dont know'], "You are basically NOTHING!!!");
var readage = {
    words: ['what is your age', 'whats your age', 'your age'],
    reply: function () {
        var birthdate = new Date(2020, 4, 5, 17, 43, 0, 0);
        var Diff_In_Time = Date.now() - birthdate.getTime();
        var Diff_In_Days = Diff_In_Time / (1000 * 3600 * 24);
        var Days = Math.floor(Diff_In_Time / (1000 * 3600 * 24));
        var Diff_In_Hour = Math.floor((Diff_In_Days - Days) * 24);
        var Diff_In_Mins = Math.floor((((Diff_In_Days - Days) * 24) - Diff_In_Hour) * 60);
        talk_div_boct("My Creation began approx " + Days + " days, " + Diff_In_Hour + " hours and " + Diff_In_Mins + " minutes ago");
    }
};
var readannoy = {
    words: ['annoy me', 'idiot', 'dumb'],
    reply: function () {
        for (var i = 0; i < 10; i++) {
            talk_div_boct("You're a IDIOT");
        }
    }
};
var readok = {
    words: ['ok', 'ohk', 'ogk', 'wow', 'great', 'excellent', 'nice', 'awesome'],
    reply: function () {
        talk_div_boct("WoW");
    }
};
var readso = {
    words: ['so', 'what else'],
    reply: function () {
        talk_div_boct("I am not so brilliant to say something!");
    }
};
var searchStuff = {
    words: ['google', 'bing', 'youtube', 'duckduckgo'],
    reply: function (sc) {
        if (sc.slice(0, 6) == 'google') {
            var ss = sc.slice(7);
            talk_div_boct('Ok, Searching Google for ' + ss);
            window.open("https://www.google.com/search?q=" + ss);
        }
        if (sc.slice(0, 4) == 'bing') {
            var ss = sc.slice(5);
            talk_div_boct('Ok, Searching Bing for ' + ss);
            window.open("https://www.bing.com/search?q=" + ss);
        }
        if (sc.slice(0, 7) == 'youtube') {
            var ss = sc.slice(8);
            talk_div_boct('Ok, Searching YouTube for ' + ss);
            window.open("https://www.youtube.com/results?search_query=" + ss);
        }
        if (sc.slice(0, 10) == 'duckduckgo') {
            var ss = sc.slice(11);
            talk_div_boct('Ok, Searching DuckDuckGo for ' + ss);
            window.open("https://duckduckgo.com/?q=" + ss);
        }
    }
};
var dice = {
    words: ['roll a dice', 'roll dice'],
    reply: function () {
        talk_div_boct(rdmZ(1, 6));
    }
};
var coin = {
    words: ['flip a coin', 'toss a coin'],
    reply: function () {
        var outcome = rdmZ(0, 1);
        outcome == 1 ? talk_div_boct('Heads') : talk_div_boct('Tails');
    }
};
