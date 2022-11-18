function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, opt) {
  switch (true) {
    case opt === "+":
      return add(a, b);
    case opt === "-":
      return subtract(a, b);
    case opt === "×":
      return multiply(a, b);
    case opt === "÷":
      return divide(a, b);
  }
}

let numbers = document.querySelectorAll('[data-num]');
let displayBottom = document.querySelector('.display-bottom');
let clearAll = document.querySelector('.AC');
let displayArray = [];

numbers.forEach((btn) => {
  btn.addEventListener('click', () => {
    displayArray.push(btn.innerHTML);

    displayBottom.innerHTML = displayArray.join('');
  });
});

clearAll.addEventListener('click', () => clearDisplay());

function clearDisplay() {
  displayArray = [];
  displayBottom.innerHTML = displayArray.join('');
}