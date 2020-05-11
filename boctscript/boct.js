console.log("Font Awesome v5.13.0");
console.log("Animations by animista.net")


function BOc() {
    document.getElementById("content-div-bot").style.margin="10px auto 20px";
    document.getElementById("chatter").style.display="block";

    let name = prompt("Hoi, What's your name? \nDon't type nothing");
     if(name != null) {var letters = name.length; }
     let notnum = isNaN(name);

      if(name === null) { alert('YOU LEGENDARY IDIOT!'); }
      else if (name === 'nothing') { alert('You are basically NOTHING!!!'); }
      else if (notnum === false) { alert('Type a name, YOU FOOL'); }
      else if (letters < 4) { alert('I dont believe your name is "' + name + '"'); }
      else if (name.indexOf('name') !== -1 ) {alert('My name is BOcT'); }
      else if (notnum === true) { alert('So ' + name + ', You will have a Bright Future'); }


   console.clear()
   console.log("I'm 'The BOcT' v1.1.2, created by @The-UCS-Variable")
}




/*
//The BOcT Function
function BOcT() {
  var name = prompt("Hoi, What's your name? \nDon't type nothing");
   if(name != null) {var letters = name.length; }
   var notnum = isNaN(name);

    if(name === null) { alert('YOU LEGENDARY IDIOT!'); }
    else if (name === 'nothing') { alert('You are basically NOTHING!!!'); }
    else if (notnum === false) { alert('Type a name, YOU FOOL'); }
    else if (letters < 4) { alert('I dont believe your name is "' + name + '"'); }
    else if (notnum === true) { alert('So ' + name + ', You will have a Bright Future'); }


 console.clear()
 console.log("I'm 'The BOcT' v1.1, created by @The-UCS-Variable")
}



//The Annoy me! function
function annoyer() {  setInterval(function(){ alert("You are a IDIOT");}, 2000);  }

click counter
type Writer Effect

unit convertors
*/
