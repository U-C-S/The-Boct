import { replyRandom } from "../small-functions";
import Categories from "./units";
//AH BUGS!!

function unit_convert(usertyped: string): string {
  const ucs_data: string[] = usertyped.split(" ");

  if (ucs_data.length === 4) {
    let uVal = parseFloat(ucs_data[1]);
    let uValLeng = String(uVal).replace(".", " ").length;
    let uUnit = ucs_data[1].slice(uValLeng);
    return TheConverter(uVal, uUnit, ucs_data[3]);
  } else {
    return "Type in this Format: conv 37cm to m";
  }
}

function TheConverter(x: number, a: string, b: string): string {
  let from_unit = getUnit(a);
  let to_unit = getUnit(b);

  if (from_unit.Available && to_unit.Available) {
    if (from_unit.Category == to_unit.Category) {
      if (from_unit.con_factor && to_unit.con_factor) {
        let result = x * (from_unit.con_factor / to_unit.con_factor);
        return `${result} ${b}`;
      } else if (from_unit.con_trnsTo && to_unit.con_trnsFro) {
        let SIval = from_unit.con_trnsTo(x);
        let result = to_unit.con_trnsFro(SIval);
        return `${result}${b}`;
      }
    } else {
      return replyRandom(["-_-", "Conversions do not work that way", "Maybe, My Scripts are incomplete. Couldn't Convert"]);
    }
  }

  return replyRandom(["That doesn't make sense", "Something is very Wrong here."]);
}

function getUnit(u: string) {
  let unit_details: {
    Available: boolean;
    Category?: number;
    con_factor?: number;
    con_trnsTo?: any;
    con_trnsFro?: any;
  } = {
    Available: false,
  };

  let i = 0;
  while (i < 5 && !unit_details.Available) {
    Object.keys(Categories[i]).forEach((j) => {
      if (Categories[i][j].unit.includes(u)) {
        let pre_unit_detail = {
          Available: true,
          Category: i,
        };
        unit_details = Object.assign(pre_unit_detail, Categories[i][j]);
      }
    });
    i++;
  }

  return unit_details;
}

export default unit_convert;
