// export function sumFromArr(arr) {
//   let result = 0;
//   for (var i = 0; i < arr.length; i++) {
//     result += arr[i];
//   }

//   console.log(`Wynik funkcji sumującej to ${result}`);
// }

// const arr = [2, 2, 3];
// console.log(sumFromArr(arr));

// 2 rozwiazanie

export function sumaLiczb(tab) {
  return tab.reduce((a, b) => a + b, 0);
}

const tab = [9, 2, 3];

console.log(sumaLiczb(tab));
