let name = prompt("Enter your neme", "Your name");

while (name === "Your name") {
  name = prompt("Enter your neme", "Your name");
}

if (name !== null) {
  alert(name);
}
