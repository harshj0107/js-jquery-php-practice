const button = document.querySelector("#press_button");

function greet() {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener("click", greet);