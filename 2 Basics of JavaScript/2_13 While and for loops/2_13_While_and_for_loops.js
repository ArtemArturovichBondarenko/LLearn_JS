//Выведите чётные числа

for (let i = 0; i <= 10; i += 1) {
  if (i % 2 === 1) continue;
  console.log(i);
}

//=================================

//Замените for на while
// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

let i = 0;

while (i < 3) {
  console.log(`number ${i}`);
  i += 1;
}

//==============================================

// Повторять цикл, пока ввод неверен

let numUser = prompt("Enter a number greater than 100", "");

while (numUser !== null && +numUser <= 100) {
  numUser = prompt("Enter a number greater than 100", "");
}

console.log(numUser);

//==================================================

// Вывести простые числа

const num = 10;
const arr = [];

for (let i = 2; i <= num; i += 1) {
  for (let j = 1; j < i; j += 1) {
    if (i % j === 0) {
      arr.push(i);
    }
  }
}

const newArr = arr.filter(
  (el, idx, ar) => ar.indexOf(el) === ar.lastIndexOf(el)
);

console.log(newArr);
