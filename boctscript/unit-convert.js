function unit_convert(usertyped){
  const ucs_data = usertyped.split(' ');
  if(ucs_data.length != 4){ TheConverter(ucs_data[1] , ucs_data[2] , ucs_data[4]); }

  else if(ucs_data.length == 4){
    let uVal = parseFloat(ucs_data[1]);
    let uValLeng = String(uVal).replace('.', ' ').length
    let uUnit = ucs_data[1].slice(uValLeng);
    TheConverter(uVal , uUnit , ucs_data[3]);
  }
}

function TheConverter(x , a , b) {
  const Types = [Lengths,Areas,Temperatures];
  var iput, oput;
  var result;
  for(i = 0; i < Types.length; i++) {
    let type = Types[i];
    let obj = Object.keys(type);
    let curType, curType2;
    obj.forEach((j)=>{
      loop11:
      if(type[j].con_factor){
        if( type[j].unit.includes(a) ) { curType = i; iput = type[j].con_factor; }
        if( type[j].unit.includes(b) ) { curType2 = i; oput = type[j].con_factor; }
        if(iput && oput){
          if(curType == curType2){
            result = (x * (iput / oput)) + ' ' + b;
            break loop11;
          }
          else{ result = "Conversions do not work that way"; }
        }
      }
      else{
        if( type[j].unit.includes(a) ) { iput = type[j].con_trnsTo(x); }
        if( type[j].unit.includes(b) ) { result = type[j].con_trnsFro(iput); }
      }
    });
  }
  

  return talk_div_boct(result);
}


const Lengths = {
  m: {
    unit: ['m','meter','meters','metre'],
    con_factor: 1
  },
  mm: {
    unit: ['mm','millimeter','millimeters','millimetre'],
    con_factor: 1/1000
  },
  cm: {
    unit: ['cm','centimeter','centimeters','centimetre'],
    con_factor: 1/100
  },
  km: {
    unit: ['km','kilometer','kilometers','kilometre'],
    con_factor: 1000
  },
  inch: {
    unit: ['in','inch','inches'],
    con_factor: 1/39.37008
  },
  ft: {
    unit: ['ft','feet','foot'],
    con_factor: 1/3.280839895
  },
  miles: {
    unit: ['miles','mile','mi'],
    con_factor: 1/0.000621369
  },
  yards: {
    unit: ['yard','yd'],
    con_factor: 1/1.093613298
  },
  lightyear: {
    unit: ['lightyears','ly'],
    con_factor: 9460730472580800
  }
}

const Areas = {
  sqm: {
    unit: ['sqm','m2'],
    con_factor: 1
  },
  sqkm: {
    unit: ['sqkm','km2'],
    con_factor: 10**6
  },
  sqft: {
    unit: ['sqft','ft2'],
    con_factor: 0.09290304
  },
  acre: {
    unit: ['ac','acre','acres'],
    con_factor: 4046.8564224
  },
  hectare: {
    unit: ['ha','hectare','hectares'],
    con_factor: 10**4
  }
}

const Temperatures = {
  celsius: {
    unit: ['C','celsius'],
    con_trnsTo: (x)=>{ return Number(x); },
    con_trnsFro: (x)=>{ return Number(x); }
  },
  fahrenheit: {
    unit: ['F','fahrenheit'],
    con_trnsTo: (x)=>{ return ((x - 32) / 1.8);},
    con_trnsFro: (x)=>{ return ((x * 1.8) + 32);}
  },
  Kelvin: {
    unit: ['K','kelvin'],
    con_trnsTo: (x)=>{ return x - 273.15;},
    con_trnsFro: (x)=>{ return x + 273.15;}
  },
}

const Mass = {}
const Volume = {}
const Digital = {}





/*
  for(i = 0; i < Types.length; i++) {
    let type = Types[i];
    let obj = Object.keys(type);
    iput = obj.find((j)=>{
      if(type[j].con_factor){
        if(type[j].unit.includes(a)){ return type[j].con_factor; }
      }
      else{

      }
    })
  }

  var i = 0;
  while((!(iput && oput)) && i < Types.length) {
    let type = Types[i];
    let obj = Object.keys(type);
    iput = obj.find((j)=>{
      if(type[j].con_factor){
        if(type[j].unit.includes(a)){ return type[j].con_factor; }
        if(type[j].unit.includes(b)){ oput = type[j].con_factor; }
        if(iput && oput){ result = (x * (iput / oput)) + ' ' + b; }
      }
      else{
        if(type[j].unit.includes(a)){ return type[j].con_trnsTo(x) }
        if(type[j].unit.includes(b)){ oput = type[j].con_factor; }

      }
    })
    i++
  }

  */
