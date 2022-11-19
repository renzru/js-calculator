let numbers = document.querySelectorAll('[data-num]');
let operators = document.querySelectorAll('[data-op]');
let displayBottom = document.querySelector('.display-bottom');
let clearAll = document.querySelector('.AC');
let result = document.querySelector('.RESULT');
let inputArr1 = [];
let inputArr2 = [];
let currentOperation;
let inputResult;

operators.forEach(btn => {
  btn.onclick = () => {
    if (typeof currentOperation !== 'undefined') {
      preEvaluate();
      inputArr1.push(inputResult);
    }
    currentOperation = btn.innerHTML;
    displayBottom.innerHTML = currentOperation;
  }
})

numbers.forEach(btn => {
  btn.onclick = () => {
    if (typeof currentOperation !== 'undefined') {
      inputArr2.push(btn.innerHTML);
      displayBottom.innerHTML = inputArr2.join('');
      return;
    }
    inputArr1.push(btn.innerHTML);
    displayBottom.innerHTML = inputArr1.join('');
  }
})

clearAll.onclick = () => {
  clearArrays();
  displayBottom.innerHTML = '';
}

result.onclick = () => {
  preEvaluate();
}

function preEvaluate() {
  inputResult = evaluate(inputArr1, inputArr2, currentOperation);
  displayBottom.innerHTML = inputResult;
  clearArrays();
}

function clearArrays() {
  inputArr1 = [];
  inputArr2 = [];
}

function evaluate(a, b, opt) {
  a = Number(a.join(''));
  b = Number(b.join(''));
  if (opt === '÷' && (a === 0 || b === 0)) {
    return 'Error';
  }

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