let numbers = document.querySelectorAll('[data-num]');
let operators = document.querySelectorAll('[data-op]');
let displayBottom = document.querySelector('.display-bottom');
let clearAll = document.querySelector('.AC');
let result = document.querySelector('.RESULT');
let inputArr1 = [];
let inputArr2 = [];
let currentOperation;

operators.forEach(btn => {
  btn.onclick = () => {
    if (typeof currentOperation !== 'undefined') {
      let buffer = operate(inputArr1, inputArr2, currentOperation);
      console.log(buffer)
      clearArrays();
      inputArr1.push(buffer);
    }
    currentOperation = btn.innerHTML;
    console.log(currentOperation);
  }
})

numbers.forEach(btn => {
  btn.onclick = () => {
    if (typeof currentOperation !== 'undefined') {
      inputArr2.push(btn.innerHTML);
      console.log(inputArr2);
      return;
    }
    inputArr1.push(btn.innerHTML);
    console.log(inputArr1);
  }
})

function clearArrays() {
  inputArr1 = [];
  inputArr2 = [];
}
result.onclick = () => {

}


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
  a = Number(a.join(''));
  b = Number(b.join(''));

  switch (true) {
    case opt === "+":
      return add(a, b);
    case opt === "−":
      return subtract(a, b);
    case opt === "×":
      return multiply(a, b);
    case opt === "÷":
      return divide(a, b);
  }
}