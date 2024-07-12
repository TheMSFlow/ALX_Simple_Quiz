function addNumbers (number1,number2){
  return number1 + number2;
};

function subtractNumbers (number1,number2){
  return number1 - number2;
};

function multiplyNumbers (number1,number2){
  return number1 * number2;
};

function divideNumbers (number1,number2){
  return number1 / number2;
};

//Add Button
const addBtn = document.getElementById('add');
addBtn.addEventListener('click', function (){
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0 ;
  const result = addNumbers(number1,number2);
  const calcResult = document.getElementById('calculation-result');
  calcResult.textContent = result;
});

//Subtract Button
const subtractBtn = document.getElementById('subtract');
subtractBtn.addEventListener('click', function (){
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0 ;
  const result = subtractNumbers(number1,number2);
  const calcResult = document.getElementById('calculation-result');
  calcResult.textContent = result;
});

//Multiply Button
const multiplyBtn = document.getElementById('multiply');
multiplyBtn.addEventListener('click', function (){
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0 ;
  const result = multiplyNumbers(number1,number2);
  const calcResult = document.getElementById('calculation-result');
  calcResult.textContent = result;
});

//Divide Button
const divideBtn = document.getElementById('divide');
divideBtn.addEventListener('click', function (){
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0 ;
  const result = divideNumbers(number1,number2);
  const calcResult = document.getElementById('calculation-result');
  calcResult.textContent = result;
});