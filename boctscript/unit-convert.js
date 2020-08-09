function unit_convert(usertyped){
  const ucs_data = usertyped.split(' ');
  TheConverter(ucs_data[1] , ucs_data[2] , ucs_data[4]);
}

function TheConverter(x , a , b) {
  const Types = [Lengths,Areas,Temperatures];
  var iput;
  var oput;

  for(i = 0; i < Types.length; i++) {
    let type = Types[i];
    let obj = Object.keys(type);

    obj.forEach((j)=>{
      if( type[j].unit.includes(a) ) { iput = type[j].con_factor; }
      if( type[j].unit.includes(b) ) { oput = type[j].con_factor; }
    });

  }

  var final = (x * (iput / oput));
  return talk_div_boct(`${final} ${b}`);
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
  acre: {
    unit: ['acres','ac'],
    con_factor: 1 / 0.00024710538
  }
}

const Temperatures = {
  celsius: {
    unit: ['C','celsius'],
    con_factor: 1
  },
  fahrenheit: {
    unit: ['F','fahrenheit'],
    con_factor: 1
  },
  Kelvin: {
    unit: ['K','kelvin'],
    con_factor: 1
  }
}