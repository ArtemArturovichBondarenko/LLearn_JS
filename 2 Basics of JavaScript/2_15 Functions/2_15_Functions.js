//Перепишите функцию, используя оператор '?' или '||'

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Родители разрешили?");
//   }
// }

function checkAge1(age) {
  return age > 18 ? console.log(true) : confirm("Родители разрешили?");
}

checkAge1(19);

function checkAge2(age) {
  return age > 18 || confirm("Родители разрешили?");
}

checkAge2(19);

//===========================================================
//Функция min(a, b)
//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
  return a > b ? b : a;
}

console.log(min(10, 15));

//Функция pow(x,n)
const num = +prompt("Enter the number", "");
const multiply = +prompt("Enter the number", "");

function multiplication(num, multiply) {
  return Math.round(num) ** Math.round(multiply);
}

console.log(multiplication(num, multiply));
