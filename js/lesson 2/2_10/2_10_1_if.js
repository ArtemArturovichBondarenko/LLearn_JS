// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

const titleOfJS = prompt("Какое «официальное» название JavaScript?");

if (titleOfJS === "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}
