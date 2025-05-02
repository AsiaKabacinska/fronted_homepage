const humanOne = {
  name: "Asia",
  age: 18,
};

const humanTwo = {
  name: "Basia",
  age: humanOne.age,
};

humanOne.age = 22;

console.log(humanOne.age);
console.log(humanTwo.age);

const firstName = "Asia";
const secondName = "Zielinska";

function hello() {
  return `Witaj na mojej stronie homepage. Jestem ${firstName} ${secondName}`;
}
console.log(hello());

