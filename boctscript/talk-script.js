class directReplies {
  constructor(inWrds,outsen) {
    this.words = inWrds;
    this.reply = ()=>{talk_div_boct(outsen);}
  }
}

const intro = new directReplies(['hi','hello','hey','heya'], "Hi to you too");
const readempty = new directReplies([''],"Oh! Come on. Talk Something Sensible");
const readNo = new directReplies(['no','nothing','i dont know'], "You are basically NOTHING!!!")

const readage = {
  words: ['age','what is your age','whats your age','your age'],
  reply: function() {
    var birthdate = new Date(2020, 4, 5, 17, 43, 0, 0);
    var Difference_In_Time = Date.now() - birthdate.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    talk_div_boct(`I was created approx ${Difference_In_Days} days ago`);
  }
}

const readannoy = {
  words: ['annoy me','idiot'],
  reply: function() {
    talk_div_boct("No, You are...")
    for (let i = 0; i < 10; i++) {
      talk_div_boct("You're a IDIOT"); }
  }
}


const readok = {
  words: ['ok','ohk','ogk','wow','great','excellent','nice','awesome'],
  reply: ()=> {
    talk_div_boct("WoW");
  }
}

const readso = {
  words: ['so','what else'],
  reply: ()=> {
    talk_div_boct("I am not so brilliant to say something!");
  }
}

const googlestuff = {
  words: "google ",
  reply: ()=> {
  }
}

const readables = [intro, readage , readempty , readannoy, readNo, readok, readso];

function proto_boct_study_chat(studycontent) {
  for(let i = 0; i < readables.length; i++) {
    for (let j = 0; j < readables[i].words.length; j++) {
      if(studycontent === readables[i].words[j]){
        readables[i].reply(); 
        break;
      }
    }
  }
}


/*
const readempty = {
  words: [''],
  reply: function() {
    talk_div_boct('Oh! Come on. Talk Something Sensible');
  }
}

const readNo = {
  words: ['no','nothing','i dont know'],
  reply: function() {
    talk_div_boct("You are basically NOTHING!!!");
  }
}


*/