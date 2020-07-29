function unit_convert(usertyped){
    talk_div_boct('Unit Converter Feature: Work-In-Progress');

    const ucs_data = usertyped.split(' ');
    if(ucs_data[2] == 'cm' && ucs_data[4] == 'km'){
      const UCSed = ucs_data[1] / 100000;
      talk_div_boct(`${UCSed}km`);
    }
    else{
      talk_div_boct('Working conversion: Convert x cm in km');
    }
    //const UCS = require('convert-units');
    //talk_div_boct(UCS(ucs_data[1]).from(ucs_data[2]).to(ucs_data[4]));
}