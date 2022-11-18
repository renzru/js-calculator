let numbers = document.querySelectorAll('[data-num]');
let operators = document.querySelectorAll('[data-op]');
let displayBottom = document.querySelector('.display-bottom');
let clearAll = document.querySelector('.AC');
let result = document.querySelector('.RESULT');
let displayArray = [];
let expressArray = [];


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