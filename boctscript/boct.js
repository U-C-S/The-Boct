
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



 console.log("I'm 'The BOcT', v1 created by @The-UCS-Variable")
}
