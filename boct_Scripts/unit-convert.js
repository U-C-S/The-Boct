function unit_convert(usertyped) {
    var ucs_data = usertyped.split(' ');
    if (ucs_data.length == 5) {
        TheConverter(Number(ucs_data[1]), ucs_data[2], ucs_data[4]);
    }
    else if (ucs_data.length == 4) {
        var uVal = parseFloat(ucs_data[1]);
        var uValLeng = String(uVal).replace('.', ' ').length;
        var uUnit = ucs_data[1].slice(uValLeng);
        TheConverter(uVal, uUnit, ucs_data[3]);
    }
    else {
        talk_div_boct('x_x');
    }
}
function TheConverter(x, a, b) {
    var from_unit = getUnit(a);
    var to_unit = getUnit(b);
    if (from_unit.Available && to_unit.Available) {
        if (from_unit.Category == to_unit.Category) {
            if (from_unit.con_factor && to_unit.con_factor) {
                var result = x * (from_unit.con_factor / to_unit.con_factor);
                return talk_div_boct(result + " " + b);
            }
            else if (from_unit.con_trnsTo && to_unit.con_trnsFro) {
                var SIval = from_unit.con_trnsTo(x);
                var result = to_unit.con_trnsFro(SIval);
                return talk_div_boct(result + " " + b);
            }
        }
        else {
            return replyRandom(['-_-', 'Conversions do not work that way']);
        }
    }
    else {
        return talk_div_boct('Something is very Wrong here.');
    }
}
function getUnit(u) {
    var Categories = [Lengths, Areas, Mass, Temperatures, Volume];
    var unit_details, i = 0;
    var _loop_1 = function () {
        var CategoryType = Categories[i];
        var obj = Object.keys(CategoryType);
        obj.forEach(function (j) {
            if (CategoryType[j].unit.includes(u)) {
                var pre_unit_detail = {
                    Available: true,
                    UserUnit: u,
                    Category: i
                };
                unit_details = Object.assign(pre_unit_detail, CategoryType[j]);
            }
        });
        i++;
    };
    while (i < Categories.length && (!unit_details)) {
        _loop_1();
    }
    if (!unit_details) {
        unit_details = { Available: false };
    }
    return unit_details;
}
var Lengths = {
    m: {
        unit: ['m', 'meter', 'meters', 'metre'],
        con_factor: 1
    },
    mm: {
        unit: ['mm', 'millimeter', 'millimeters', 'millimetre'],
        con_factor: 1 / 1000
    },
    cm: {
        unit: ['cm', 'centimeter', 'centimeters', 'centimetre'],
        con_factor: 1 / 100
    },
    km: {
        unit: ['km', 'kilometer', 'kilometers', 'kilometre', 'Km'],
        con_factor: 1000
    },
    inch: {
        unit: ['in', 'inch', 'inches'],
        con_factor: 1 / 39.37008
    },
    ft: {
        unit: ['ft', 'feet', 'foot'],
        con_factor: 1 / 3.280839895
    },
    miles: {
        unit: ['miles', 'mile', 'mi'],
        con_factor: 1 / 0.000621369
    },
    yards: {
        unit: ['yard', 'yd'],
        con_factor: 1 / 1.093613298
    },
    lightyear: {
        unit: ['lightyears', 'ly'],
        con_factor: 9460730472580800
    }
};
var Areas = {
    sqm: {
        unit: ['sqm', 'm2', 'sq.meter'],
        con_factor: 1
    },
    sqkm: {
        unit: ['sqkm', 'km2'],
        con_factor: Math.pow(10, 6)
    },
    sqft: {
        unit: ['sqft', 'ft2'],
        con_factor: 0.09290304
    },
    acre: {
        unit: ['ac', 'acre', 'acres'],
        con_factor: 4046.8564224
    },
    hectare: {
        unit: ['ha', 'hectare', 'hectares'],
        con_factor: Math.pow(10, 4)
    }
};
var Temperatures = {
    celsius: {
        unit: ['C', 'celsius', 'c'],
        con_trnsTo: function (x) { return Number(x); },
        con_trnsFro: function (x) { return Number(x); }
    },
    fahrenheit: {
        unit: ['F', 'fahrenheit', 'f'],
        con_trnsTo: function (x) { return (x - 32) / 1.8; },
        con_trnsFro: function (x) { return ((x * 1.8) + 32); }
    },
    Kelvin: {
        unit: ['K', 'kelvin', 'k'],
        con_trnsTo: function (x) { return x - 273.15; },
        con_trnsFro: function (x) { return x + 273.15; }
    }
};
var Mass = {
    kg: {
        unit: ['kg', 'kilogram', 'Kg', 'kilograms'],
        con_factor: 1
    },
    g: {
        unit: ['g', 'gram', 'grams'],
        con_factor: 1 / 1000
    },
    lb: {
        unit: ['lb', 'lbs', 'pounds', 'pound'],
        con_factor: 0.45359237
    },
    quintal: {
        unit: ['quintal'],
        con_factor: 100
    },
    amu: {
        unit: ['amu', 'u', 'Da'],
        con_factor: 1.6605390666e-27
    }
};
var Volume = {
    cubicm: {
        unit: ['m3', 'cubic.m', 'cubic-meter'],
        con_factor: 1
    },
    liter: {
        unit: ['l', 'liter', 'liters', 'litre', 'litres'],
        con_factor: 0.001
    },
    milliliter: {
        unit: ['ml', 'milliliter', 'milliliters', 'millilitre'],
        con_factor: 0.000001
    },
    gallon: {
        unit: ['gal', 'gallon', 'Gallon'],
        con_factor: 0.00454609
    },
    pint: {
        unit: ['pt', 'p', 'pint'],
        con_factor: 0.0005682613
    },
    barrel: {
        unit: ['bl', 'barrel'],
        con_factor: 0.16365924
    }
};
var Digital = {};
var Prefixs = {
    uni: {
        unit: [''],
        con_factor: 1
    },
    deca: {
        unit: ['da', 'deca', 'Deca'],
        con_factor: 10
    },
    hecto: {
        unit: ['h', 'hecto', 'Hecto'],
        con_factor: 100
    },
    kilo: {
        unit: ['k', 'kilo', 'Kilo'],
        con_factor: 1e+3
    },
    mega: {
        unit: ['M', 'mega', 'Mega'],
        con_factor: 1e+6
    },
    giga: {
        unit: ['G', 'giga', 'Giga'],
        con_factor: 1e+9
    },
    tera: {
        unit: ['T', 'tera', 'Tera'],
        con_factor: 1e+12
    }
};
