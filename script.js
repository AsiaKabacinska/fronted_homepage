// function different(arr1, arr2) {
//   const result = [];
//   for (let index = 0; index < arr1.length; index++) {
//     if (!arr2.includes(arr1[index])) {
//       result.push(arr1[index]);
//     }
//   }
//   for (let index = 0; index < arr2.length; index++) {
//     if (!arr1.includes(arr2[index])) {
//       result.push(arr2[index]);
//     }
//   }

//   return result;
// }
// const arr_1 = [1, 2, 3, 4];
// const arr_2 = [1, 3, 45, 66, 4];

// // const result = (arr1, arr2) => arr1.filter((val) => arr2.includes(val));
// // console.log(result(arr_1, arr_2));
// //TODO zapytac lukasza czemu tej funkcji nie moglam zrobic tak jak wyzej tylko !
// function different2(arr1, arr2) {
//   const filteredArr1 = arr1.filter((val) => !arr2.includes(val));
//   const filteredArr2 = arr2.filter((val) => !arr1.includes(val));
//   return [...filteredArr1, ...filteredArr2];
// }

// // console.log(different(arr_1, arr_2));
// // console.log(different2(arr_1, arr_2));

// const tablica3 = ["a", "a", "b", "c", "d", "d"];

// function valuePerKeyMethod(arr) {
//   const result = {};
//   //TODO Łukasz dlaczego nie moze byc <= ???
//   for (let i = 0; i < arr.length; i++) {
//     if (result.hasOwnProperty(arr[i])) {
//       result[arr[i]] += 1;
//     } else {
//       result[arr[i]] = 1;
//     }
//   }
//   return result;
// }

// console.log(valuePerKeyMethod(tablica3));
//OBLICZANIE ROKU PRZESTEPNEGO

// function isPrzestepny(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
//   // }

// console.log(isPrzestepny(2019));
// console.log(isPrzestepny(2020));
// console.log(isPrzestepny(2021));

//   const dayInMOth = (year, month) => new Date(year, month).getDate();

//   // console.log(dayInMOth(2019, 6));

//   function getAge(year, month, day) {
//     const birthDate = new Date(year, month - 1, day);
//     const today = new Date();
//     const yearsDifference = today.getFullYear() - birthDate.getFullYear();
//   }

function randomNumber(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber(3, 5));
console.log(randomNumber(3, 5));
console.log(randomNumber(7, 3));

//
function fibonnaci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonnaci(n - 1) + fibonnaci(n - 2);
}

console.log(fibonnaci(10));

alert("WTF!!???");

const header = document.querySelector("h1");
console.log(header);

const text = document.querySelector("p");
console.log(text);

const title = document.querySelector("title");
console.log(title);

header.innerHTML = "ZMIANA !!! :D:D:D:D";
console.log(header.style);
header.style.color = "red";
