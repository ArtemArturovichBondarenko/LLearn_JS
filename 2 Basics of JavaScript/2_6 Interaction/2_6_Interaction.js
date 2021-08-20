//Создайте страницу, которая спрашивает имя у пользователя и выводит его.

let name = prompt("Enter your neme", "Your name");

while (name === "Your name") {
  name = prompt("Enter your neme", "Your name");
}

if (name !== null) {
  alert(name);
}
