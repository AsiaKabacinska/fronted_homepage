import differenceInDays from "date-fns/differenceInDays";
import { substrackNumbers } from "./substractFunction";

// export const humanOne = {
//   name: "Asia",
//   age: 18,
// };

// const humanTwo = {
//   name: "Basia",
//   age: humanOne.age,
// };

// humanOne.age = 22;

// console.log(humanOne.age);
// console.log(humanTwo.age);

// const firstName = "Asia";
// const secondName = "Zielinska";

// function hello() {
//   return `Witaj na mojej stronie homepage. Jestem ${firstName} ${secondName}`;
// }
// console.log(hello());

// if ('JavaSrcipt!="Java') {
//   console.log("Java to nie JS");
// }
// if (2 < 4) {
//   console.log("2 jest mniejsze od 4");
// }
// if ("2" === 2) {
//   console.log("to jest prawda ");
// }

const button = document.querySelector(".page-header__button--js");

button.addEventListener("click", (e) => {
  // const header = document.querySelector(".page-header__button--js");
  // header.innerHTML = "klik,klik!"

  document.documentElement.style.setProperty("--backgroundColor", "tomato");
});

//date-fns

const { differenceInCalendarYears } = require("date-fns");

const result = differenceInCalendarYears(
  new Date(2025, 5, 9),
  new Date(1992, 9, 18)
);

console.log("Difference in calendar years is about: " + result);
console.log(substrackNumbers(7, 5));
