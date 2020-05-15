console.log("Font Awesome v5.13.0");
console.log("Animations by animista.net")
console.log("I'm 'The BOcT' v1.1.4, created by @The-UCS-Variable");
/*------------------------------------------------------------------------------*/



var click_count = 0;
const CLICK_BOT = document.getElementById('BOcT');
CLICK_BOT.addEventListener("click", BOcT_open);

function BOcT_open() {
  document.getElementById("content-div-bot").style.margin="10px auto 20px";
  document.getElementById("chatter").style.display="block";
  CLICK_BOT.removeEventListener("click", BOcT_open);
  CLICK_BOT.addEventListener("click", BOcT_annoy_clicks);
}

var talkContent = 0;
function talk_div_boct(talkContent) {
  var newDIV_b = document.createElement('div');
  var attr_b = document.createAttribute('class');
  var talk_create = document.createElement('p');
  var talk_matter = document.createTextNode(talkContent);

  attr_b.value = "boct_talk recent_talk";
  newDIV_b.setAttributeNode(attr_b);
  document.getElementById('chatspace').appendChild(newDIV_b);
  talk_create.appendChild(talk_matter);
  var abcde = document.getElementsByClassName('boct_talk recent_talk');
  abcde.appendChild(talk_matter);
}

function BOcT_annoy_clicks() {
   click_count += 1;
   if (click_count > 10) {
     click_count = 1;
     talk_div_boct('Stop annoying me');
   }
}




/*
--list of functions here--
_____________________
- BOcT_open
- BOcT_annoy_clicks
- talk_div_boct
- talk_div_hooman

*/


/*
//old boct function


    const name = prompt("Hoi, What's your name? \nDon't type nothing");
     if(name != null) {var letters = name.length; }
     let notnum = isNaN(name);

      if(name === null) { alert('YOU LEGENDARY IDIOT!'); }
      else if (name === 'nothing' || 'no') { alert('You are basically NOTHING!!!'); }
      else if (notnum === false) { alert('Type a name, YOU FOOL'); }
      else if (letters < 4) { alert('I dont believe your name is "' + name + '"'); }
      else if (name.indexOf('name') !== -1 ) {alert('My name is BOcT'); }
      else if (notnum === true) {
         alert('So ' + name + ', You will have a Bright Future');
    }

    document.getElementById('typespace-id').focus();



  function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

//The Annoy me! function
function annoyer() {  setInterval(function(){ alert("You are a IDIOT");}, 2000);  }

click counter
type Writer Effect

unit convertors
*/
