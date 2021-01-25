/*
const currentThemeCokie = localStorage.getItem("theme");
const toggler: HTMLButtonElement = document.getElementById("ThemeBtn");

if (currentThemeCokie) {
  document.documentElement.setAttribute("data-theme", currentThemeCokie);
  if (currentThemeCokie == "light") {
    toggler.dataset.themenow = "light";
  }
} else {
  toggler.dataset.themenow = "dark";
}

toggler.addEventListener("click", themeAlternate);
function themeAlternate() {
  if (toggler.dataset.themenow == "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    toggler.dataset.themenow = "light";
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    toggler.dataset.themenow = "dark";
    localStorage.setItem("theme", "dark");
  }
}

*/
let x = this;
console.log(this);
export default null;