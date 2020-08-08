function unit_convert(usertyped){
    const ucs_data = usertyped.split(' ');

    let inValu = ucs_data[1];
    let inUnit = ucs_data[2];
    let outUnit = ucs_data[4];
    if(inUnit == 'cm' && outUnit == 'km'){
      const UCSed = inValu / 100000;
      talk_div_boct(`${UCSed}km`);
    }
    else{
      talk_div_boct('Unit Converter Feature: Work-In-Progress');
      talk_div_boct('Working conversion: Convert x cm in km');
    }
    //const UCS = require('convert-units');
    //talk_div_boct(UCS(ucs_data[1]).from(ucs_data[2]).to(ucs_data[4]));
}


const Length = {
  cm: {
    unit: 'cm',
    convert: (val)=>{
      return val * 100;
    }
  },
  m: {
    unit: 'm',
    convert: (val)=>{
      return val / 1;
    }
  },
  km: {
    unit: 'km',
    convert: (val)=>{
      return val / 1000;
    }
  }
}


function TheConverter(x , a , b) {
  log('hi');
}

function log(x){ console.log(x); }

log(Length.km.convert(200));
