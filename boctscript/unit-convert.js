function unit_convert(usertyped){
  const ucs_data = usertyped.split(' ');
  TheConverter(ucs_data[1] , ucs_data[2] , ucs_data[4]);
}

function TheConverter(x , a , b) {
  let UL = Object.keys(Lengths);
  var iput;
  var oput;
  UL.forEach((e) =>{
    if(a == Lengths[e].unit){
      iput = Lengths[e].convert(x);
    }
    if(b == Lengths[e].unit){
      oput = Lengths[e].convert(x);
    }
  });
  var final = (x * (iput / oput));
  return talk_div_boct(`${final} ${b}`);
}




const Lengths = {
  m: {
    unit: 'm',
    convert: (val)=>{ return val / 1; }
  },
  cm: {
    unit: 'cm',
    convert: (val)=>{ return val / 100; }
  },
  km: {
    unit: 'km',
    convert: (val)=>{ return val / 0.001; }
  },
  ft: {
    unit: 'ft',
    convert: (val)=>{ return val / 3.280839895; }
  },
  miles: {
    unit: 'miles',
    convert: (val)=>{ return val / 0.000621369 }
  },
  yards: {
    unit: 'yard',
    convert: (val)=>{ return val / 1.093613298 }
  },
  lightyear: {
    unit: 'lightyears',
    convert: (val)=>{ return val / (1 / 9460730777119564)}
  }
}

const Areas = {
  sqm: {
    unit: ['sqm','m2'],
    convert: (val)=>{ return val / 1; }
  },
  acre: {
    unit: ['acres','ac'],
    convert: (val)=>{ return val / 0.00024710538; }
  }
}