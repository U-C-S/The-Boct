function unit_convert(usertyped) {
  const ucs_data = usertyped.split(" ");
  if (ucs_data.length == 4) {
    let uVal = parseFloat(ucs_data[1]);
    let uValLeng = String(uVal).replace(".", " ").length;
    let uUnit = ucs_data[1].slice(uValLeng);
    TheConverter(uVal, uUnit, ucs_data[3]);
  } else
    talk_div_boct("Type in this Format: conv 37cm to m");
}
function TheConverter(x, a, b) {
  let from_unit = getUnit(a);
  let to_unit = getUnit(b);
  if (from_unit.Available && to_unit.Available) {
    if (from_unit.Category == to_unit.Category) {
      if (from_unit.con_factor && to_unit.con_factor) {
        let result = x * (from_unit.con_factor / to_unit.con_factor);
        talk_div_boct(`${result} ${b}`);
      } else if (from_unit.con_trnsTo && to_unit.con_trnsFro) {
        let SIval = from_unit.con_trnsTo(x);
        let result = to_unit.con_trnsFro(SIval);
        talk_div_boct(`${result}${b}`);
      }
    } else {
      replyRandom([
        "-_-",
        "Conversions do not work that way",
        "Maybe, My Scripts are incomplete. Couldn't Convert"
      ]);
    }
  } else
    replyRandom(["That doesn't make sense", "Something is very Wrong here."]);
}
function getUnit(u) {
  const Categories = [Lengths, Areas, Mass, Temperatures, Volume];
  let unit_details;
  let i = 0;
  while (i < Categories.length && !unit_details) {
    Object.keys(Categories[i]).forEach((j) => {
      if (Categories[i][j].unit.includes(u)) {
        let pre_unit_detail = {
          Available: true,
          Category: i
        };
        unit_details = Object.assign(pre_unit_detail, Categories[i][j]);
      }
    });
    i++;
  }
  if (!unit_details) {
    unit_details.Available = false;
  }
  return unit_details;
}
const Lengths = {
  m: {
    unit: ["m", "meter", "meters", "metre"],
    con_factor: 1
  },
  mm: {
    unit: ["mm", "millimeter", "millimeters", "millimetre"],
    con_factor: 1 / 1e3
  },
  cm: {
    unit: ["cm", "centimeter", "centimeters", "centimetre"],
    con_factor: 1 / 100
  },
  km: {
    unit: ["km", "kilometer", "kilometers", "kilometre", "Km"],
    con_factor: 1e3
  },
  inch: {
    unit: ["in", "inch", "inches"],
    con_factor: 1 / 39.37008
  },
  ft: {
    unit: ["ft", "feet", "foot"],
    con_factor: 1 / 3.280839895
  },
  miles: {
    unit: ["miles", "mile", "mi"],
    con_factor: 1 / 621369e-9
  },
  yards: {
    unit: ["yard", "yd"],
    con_factor: 1 / 1.093613298
  },
  lightyear: {
    unit: ["lightyears", "ly"],
    con_factor: 9460730472580800
  }
};
const Areas = {
  sqm: {
    unit: ["sqm", "m2", "sq.meter"],
    con_factor: 1
  },
  sqkm: {
    unit: ["sqkm", "km2"],
    con_factor: 10 ** 6
  },
  sqft: {
    unit: ["sqft", "ft2"],
    con_factor: 0.09290304
  },
  acre: {
    unit: ["ac", "acre", "acres"],
    con_factor: 4046.8564224
  },
  hectare: {
    unit: ["ha", "hectare", "hectares"],
    con_factor: 10 ** 4
  }
};
const Temperatures = {
  celsius: {
    unit: ["C", "celsius", "c"],
    con_trnsTo: (x) => {
      return Number(x);
    },
    con_trnsFro: (x) => {
      return Number(x);
    }
  },
  fahrenheit: {
    unit: ["F", "fahrenheit", "f"],
    con_trnsTo: (x) => {
      return (x - 32) / 1.8;
    },
    con_trnsFro: (x) => {
      return x * 1.8 + 32;
    }
  },
  Kelvin: {
    unit: ["K", "kelvin", "k"],
    con_trnsTo: (x) => {
      return x - 273.15;
    },
    con_trnsFro: (x) => {
      return x + 273.15;
    }
  }
};
const Mass = {
  kg: {
    unit: ["kg", "kilogram", "Kg", "kilograms"],
    con_factor: 1
  },
  g: {
    unit: ["g", "gram", "grams"],
    con_factor: 1 / 1e3
  },
  lb: {
    unit: ["lb", "lbs", "pounds", "pound"],
    con_factor: 0.45359237
  },
  quintal: {
    unit: ["quintal"],
    con_factor: 100
  },
  amu: {
    unit: ["amu", "u", "Da"],
    con_factor: 16605390666e-37
  }
};
const Volume = {
  cubicm: {
    unit: ["m3", "cubic.m", "cubic-meter"],
    con_factor: 1
  },
  liter: {
    unit: ["l", "liter", "liters", "litre", "litres"],
    con_factor: 1e-3
  },
  milliliter: {
    unit: ["ml", "milliliter", "milliliters", "millilitre"],
    con_factor: 1e-6
  },
  gallon: {
    unit: ["gal", "gallon", "Gallon"],
    con_factor: 454609e-8
  },
  pint: {
    unit: ["pt", "p", "pint"],
    con_factor: 5682613e-10
  },
  barrel: {
    unit: ["bl", "barrel"],
    con_factor: 0.16365924
  }
};
