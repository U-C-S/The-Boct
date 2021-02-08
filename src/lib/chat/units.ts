// 1 x is equal to con_factor y (x is a unit; y is respective SI/base unit)
//Ex: 1 mm is equal to 1/1000 m
interface TypesOfUnits {
  unit: string[];
  con_factor?: number;
  con_trnsTo?: { (x: any): number };
  con_trnsFro?: { (x: any): number };
}

const Lengths: Record<string, TypesOfUnits> = {
  m: {
    unit: ["m", "meter", "meters", "metre"],
    con_factor: 1,
  },
  mm: {
    unit: ["mm", "millimeter", "millimeters", "millimetre"],
    con_factor: 1 / 1000,
  },
  cm: {
    unit: ["cm", "centimeter", "centimeters", "centimetre"],
    con_factor: 1 / 100,
  },
  km: {
    unit: ["km", "kilometer", "kilometers", "kilometre", "Km"],
    con_factor: 1000,
  },
  inch: {
    unit: ["in", "inch", "inches"],
    con_factor: 1 / 39.37008,
  },
  ft: {
    unit: ["ft", "feet", "foot"],
    con_factor: 1 / 3.280839895,
  },
  miles: {
    unit: ["miles", "mile", "mi"],
    con_factor: 1 / 0.000621369,
  },
  yards: {
    unit: ["yard", "yd"],
    con_factor: 1 / 1.093613298,
  },
  lightyear: {
    unit: ["lightyears", "ly"],
    con_factor: 9460730472580800,
  },
};

const Areas: Record<string, TypesOfUnits> = {
  sqm: {
    unit: ["sqm", "m2", "sq.meter"],
    con_factor: 1,
  },
  sqkm: {
    unit: ["sqkm", "km2"],
    con_factor: 10 ** 6,
  },
  sqft: {
    unit: ["sqft", "ft2"],
    con_factor: 0.09290304,
  },
  acre: {
    unit: ["ac", "acre", "acres"],
    con_factor: 4046.8564224,
  },
  hectare: {
    unit: ["ha", "hectare", "hectares"],
    con_factor: 10 ** 4,
  },
};

const Temperatures: Record<string, TypesOfUnits> = {
  celsius: {
    unit: ["C", "celsius", "c"],
    con_trnsTo: function (x: any) {
      return Number(x);
    },
    con_trnsFro: (x: any) => {
      return Number(x);
    },
  },
  fahrenheit: {
    unit: ["F", "fahrenheit", "f"],
    con_trnsTo: (x: number) => {
      return (x - 32) / 1.8;
    },
    con_trnsFro: (x: number) => {
      return x * 1.8 + 32;
    },
  },
  Kelvin: {
    unit: ["K", "kelvin", "k"],
    con_trnsTo: (x: number) => {
      return x - 273.15;
    },
    con_trnsFro: (x: number) => {
      return x + 273.15;
    },
  },
};

const Mass: Record<string, TypesOfUnits> = {
  kg: {
    unit: ["kg", "kilogram", "Kg", "kilograms"],
    con_factor: 1,
  },
  g: {
    unit: ["g", "gram", "grams"],
    con_factor: 1 / 1000,
  },
  lb: {
    unit: ["lb", "lbs", "pounds", "pound"],
    con_factor: 0.45359237,
  },
  quintal: {
    unit: ["quintal"],
    con_factor: 100,
  },
  amu: {
    unit: ["amu", "u", "Da"],
    con_factor: 1.6605390666e-27,
  },
};

const Volume: Record<string, TypesOfUnits> = {
  cubicm: {
    unit: ["m3", "cubic.m", "cubic-meter"],
    con_factor: 1,
  },
  liter: {
    unit: ["l", "liter", "liters", "litre", "litres"],
    con_factor: 0.001,
  },
  milliliter: {
    unit: ["ml", "milliliter", "milliliters", "millilitre"],
    con_factor: 0.000001,
  },
  gallon: {
    unit: ["gal", "gallon", "Gallon"],
    con_factor: 0.00454609,
  },
  pint: {
    unit: ["pt", "p", "pint"],
    con_factor: 0.0005682613,
  },
  barrel: {
    unit: ["bl", "barrel"],
    con_factor: 0.16365924,
  },
};

const Categories: Record<string, TypesOfUnits>[] = [Lengths, Areas, Temperatures, Volume, Mass];
export default Categories;

/*
const Digital = {}
const Prefixs = {
  uni: {
    unit: [''],
    con_factor: 1
  },
  deca: {
    unit: ['da','deca','Deca'],
    con_factor: 10
  },
  hecto: {
    unit: ['h','hecto','Hecto'],
    con_factor: 100
  },
  kilo: {
    unit: ['k','kilo','Kilo'],
    con_factor: 1e+3
  },
  mega: {
    unit: ['M','mega','Mega'],
    con_factor: 1e+6
  },
  giga: {
    unit: ['G','giga','Giga'],
    con_factor: 1e+9
  },
  tera: {
    unit: ['T','tera','Tera'],
    con_factor: 1e+12
  }
}*/
