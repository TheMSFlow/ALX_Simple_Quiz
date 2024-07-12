function addNumbers() {
  const calcResult = document.getElementById('calculation-result');
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0 ;
  calcResult.textContent = number1 + number2;
};

function subtractNumbers() {
  const calcResult = document.getElementById('calculation-result');
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0 ;
  calcResult.textContent = number1 - number2;
};

function multiplyNumbers() {
  const calcResult = document.getElementById('calculation-result');
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0 ;
  calcResult.textContent = number1 * number2;
};

function divideNumbers() {
  const calcResult = document.getElementById('calculation-result');
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0 ;
  calcResult.textContent = number1 / number2;
};



//Add Button
const addBtn = document.getElementById('add');
addBtn.addEventListener('click', addNumbers);

//Subtract Button
const subtractBtn = document.getElementById('subtract');
subtractBtn.addEventListener('click', subtractNumbers);

//Multiply Button
const multiplyBtn = document.getElementById('multiply');
multiplyBtn.addEventListener('click', multiplyNumbers);

//Divide Button
const divideBtn = document.getElementById('divide');
divideBtn.addEventListener('click', divideNumbers);