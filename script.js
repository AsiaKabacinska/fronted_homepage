const header = document.querySelector("h1");
console.log(header);

const text = document.querySelector("p");
console.log(text);

const title = document.querySelector("title");
console.log(title);

header.innerHTML = "ZMIANA !!! :D:D:D:D";
console.log(header.style);
header.style.color = "red";

const contentJs = document.querySelector(".article__content--js");
contentJs.innerHTML = "Jestem wypelniony JSem !!! 🥳 ";
