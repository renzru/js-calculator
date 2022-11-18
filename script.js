let numbers = document.querySelectorAll('[data-num]');
let operators = document.querySelectorAll('[data-op]');
let displayBottom = document.querySelector('.display-bottom');
let clearAll = document.querySelector('.AC');
let result = document.querySelector('.RESULT');
let displayArray = [];
let expressArray = [];


numbers.forEach(btn => {
  btn.addEventListener('click', () => {
    displayArray.push(btn.innerHTML);
    displayBottom.innerHTML = displayArray.join('');
  });
});

operators.forEach(btn => {
  btn.addEventListener('click', () => {
    transferArray(btn);
  })
})

result.addEventListener('click', () => {
  transferArray(displayArray.join(''));
  let numberArray = expressArray.join('');
  console.log(numberArray)
});

function transferArray(btn) {
  for (let i = 0; i < displayArray.length; i++) {
    expressArray.push(displayArray[i]);
    displayArray.splice(i, 1);
    i--;
  }
  expressArray.push(btn.innerHTML);
  clearDisplay();
}

clearAll.addEventListener('click', () => clearDisplay());

function clearDisplay() {
  displayArray = [];
  displayBottom.innerHTML = displayArray.join('');
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