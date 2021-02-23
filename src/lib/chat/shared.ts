import { RandomOf } from "../small-functions";

export function boctAge(): string {
  let birthdate: Date = new Date(2020, 4, 5, 17, 43, 0, 0);
  let Diff_In_Time = Date.now() - birthdate.getTime();
  let Diff_In_Days = Diff_In_Time / (1000 * 3600 * 24);
  let Days = Math.floor(Diff_In_Time / (1000 * 3600 * 24));
  let Diff_In_Hour = Math.floor((Diff_In_Days - Days) * 24);
  let Diff_In_Mins = Math.floor(((Diff_In_Days - Days) * 24 - Diff_In_Hour) * 60);
  return `${Days} days, ${Diff_In_Hour} hours and ${Diff_In_Mins} minutes`;
}

export const dice = {
  words: ["roll a dice", "roll dice"],
  reply: () => RandomOf(1, 6),
};

export const coin = {
  words: ["flip a coin", "toss a coin"],
  reply: () => {
    let x = RandomOf(0, 1) === 1 ? "Heads" : "Tails";
    return x;
  },
};
