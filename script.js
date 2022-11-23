const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const clear = document.querySelector('.btn.clear');
const del = document.querySelector('.del');
const equ = document.querySelector('.equ');
const e = document.querySelector('.e');
const pi = document.querySelector('.pi');
const xPow = document.querySelector('.x');
const xNegative = document.querySelector('.xNegative');
const resPrev = document.querySelector('.prev-move');
const resCurrent = document.querySelector('.current-move');
resCurrent.innerHTML = '0';
const plusMinus = document.querySelector('.plus-minus');
const message = document.querySelector('.message');
let currentMove = '';
let prevMove = '';
let operation = undefined;

function count() {
  let move;
  if(!prevMove || !currentMove) {
    return;
  }
  const prev = parseFloat(prevMove);
  const current = parseFloat(currentMove);
  if(isNaN(prev) || isNaN(current)){
    return;
  }
  switch(operation) {
    case '+' :
      move = prev + current;
      move = fixTheNumber(move);
      message.style.color = 'black';
      message.innerHTML = `${prev} + ${current} = ${move}`;
      break;
     
    case '-' :
      move = prev - current;
      move = fixTheNumber(move);
      message.style.color = 'black';
      message.innerHTML = `${prev} - ${current} = ${move}`;
      break; 
    case '×' :
      move = prev * current;
      move = fixTheNumber(move);
      message.style.color = 'black';
      message.innerHTML = `${prev} × ${current} = ${move}`;   
      break;   
    case '÷' :
      if(current === 0) {
        clearAll();
        message.style.color = 'red';
        message.innerHTML = 'ERROR!You can`t divide by zero 🤔, I used the clear all function so it`s ok 👌';
        return;
      }
      move = prev / current;
      move = fixTheNumber(move);
      message.style.color = 'black';
      message.innerHTML = `${prev} ÷ ${current} = ${move}`;
      break;
    case '√' :
       if(current === '0') {
        move = '0';
        operation = undefined;
        prevMove = '';
        return;
      }
      move = Math.pow(prev, 1 / current);
      move = fixTheNumber(move);
     
      message.style.color = 'black';
      message.innerHTML = `${prev} √ ${current} = ${move}`;
      break;
    case '%' :
      move = prev / 100 * current;
      move = fixTheNumber(move);
      message.style.color = 'black';
      message.innerHTML = `${prev} % ${current} = ${move}`;
      break;
    case '^' :
      move = prev ** current;
      move = fixTheNumber(move);
      message.style.color = 'black';
      message.innerHTML = `${prev} ^ ${current} = ${move}`;
      break;    
    case 'log' :
      if(prev <= 0 || current <= 0) {
        clearAll();
        move = '0';
        message.style.color = 'red';
        message.innerHTML = 'Log must be more than 0 🤔, let me use clear all function for you';
        return;
      }
      move = Math.log(prev) / Math.log(current);
      move = fixTheNumber(move);
      message.style.color = 'black';
      message.innerHTML = `${prev} log ${current} = ${move}`
      break;
    default : 
      return;           
  }
  if(isNaN(move) || move === Infinity) {
    clearAll();
    message.style.color = 'red';
    message.innerHTML = 'Oops, some error here 🤔, let me clean for you';
    return
  }
  currentMove = move;
  operation = undefined;
  prevMove = '';
}

function fixTheNumber(result) {
  result = result.toString();
  result = result.split('');
  let index = result.findIndex(el => el === '.');
  let afterDot;
  if(index) {
    afterDot = result.slice(index,result.length);
  }
  if(afterDot.length > 9) {
    result = result.join('');
    result = Number(result);
    return result = result.toFixed(8);
  } 
  if(afterDot.length <= 9){
    result = result.join('');
    result = Number(result);
    return result;
  }
}

function chooseOperation(currentOperation) {
  if(currentMove === '0'  && prevMove === '') {
    return;
  } 
  const current = resCurrent.innerHTML;
  const prev = resPrev.innerText;
  if(currentMove !== '0' || current !== '0') {
   if(prevMove !== '') {
      if(currentMove.toString() === '0' && prev[prev.length - 1] === '÷') {
        clearAll();
        message.style.color = 'red';
        message.innerHTML = 'ERROR!You can`t divide by zero 🤔, I used the clear all function so it`s ok 👌';
        return;
      }
    }
    count();
    prevMove = currentMove;
    currentMove = '0';
    if(message.innerHTML === 'Oops, some error here 🤔, let me clean for you') {
      clearAll();
      message.style.color = 'red';
      message.innerHTML = 'Oops, some error here 🤔, let me use clear all function';
      return;
    }
  }
  operation = currentOperation;
}

function resultRender() {
  resCurrent.innerText = currentMove;
  if(operation && prevMove === '') {
    resPrev.innerText = '';
    return;
  } 
  if(operation && prevMove !== '' && currentMove || operation != null) {
    resPrev.innerText = prevMove + operation;
  } else {
     resPrev.innerText = '';
  }
}
function addNumber(num) {
  if(num === '•') {
    if(currentMove.includes('.')) {
      return;
    }
    num = '.';
  }
  if(currentMove.length < 20) {
    currentMove = currentMove.toString() + num.toString();
   
  }else if(currentMove.length === 20) {
      message.innerHTML = 'I`m sorry, I can`t accept more numbers.☹️ 20 - is the limit';
    }
  if(currentMove[0] === '0' && currentMove[1] !== '.') {
    currentMove = num;
  }
  if(currentMove[0] === '.') {
    currentMove = '0' + num;
  }
}

function minusPlus() {    
  if(currentMove !== '0') {
    currentMove = currentMove * -1; 
  }
}

function getE() {
  currentMove = Math.E;
}

function getPi() {
  currentMove = Math.PI;
}

function getPow() {
  const current = resCurrent.innerHTML;
  if(currentMove === '0' || current === '0') {
    currentMove = '0';
    return
  } 
  if(currentMove !== '0' || current !== '0') {
    currentMove = Math.pow(currentMove, 2);
    currentMove = fixTheNumber(currentMove);
  }
  if(currentMove === Infinity || currentMove === 'Infinity') {
    clearAll();
    message.style.color = 'red';
    message.innerHTML = 'The number is too big';
  }
}

function getNegative() {
  const current = resCurrent.innerHTML;
  if(currentMove === '0' || current === '0') {
    currentMove = '0';
    return;
  } 
  if(currentMove !== '0' || current !== '0') {
    currentMove = Math.pow(currentMove, -1);
    currentMove = fixTheNumber(currentMove);
    if(currentMove === Infinity || currentMove === 'Infinity' || isNaN(currentMove)) {
      clearAll();
      message.style.color = 'red';
      message.innerHTML = 'I can`t do it, but most likely the answer is Infinity 🤫';
      return;
    }
  }
}

function deleteNumber() {
  currentMove = currentMove.toString();
  currentMove = currentMove.split('');
  let index = currentMove.findIndex(el => el === '.');
  let afterDot;
  if(index) {
    afterDot = currentMove.slice(index,currentMove.length);
  }
  currentMove = currentMove.join('');
  if(currentMove.toString()[0] !== '0' && currentMove || index && afterDot[0] === '.') {
    currentMove = currentMove.toString().slice(0, -1);
  }
  if(currentMove === '' || currentMove === '-') {
    currentMove = '0';
  }
}

function clearAll() {
  currentMove = '0';
  prevMove = '';
  operation = undefined;
  message.style.color = 'black';
  message.innerHTML = 'Okay, let`s try again.';
}

numbers.forEach(num => {
  num.addEventListener('click', () => {
    addNumber(num.innerText);
    resultRender();
  })
})

del.addEventListener('click', () => {
  deleteNumber();
  resultRender();
})

operations.forEach(op => {
  op.addEventListener('click', () => {
    chooseOperation(op.innerText);
    resultRender();
  })
})

equ.addEventListener('click', () => {
  count();
  resultRender();
})

clear.addEventListener('click', () => {
  clearAll();
  resultRender();
})

plusMinus.addEventListener('click', () => {
  minusPlus();
  resultRender();
})

e.addEventListener('click', () => {
  getE();
  resultRender();
})

pi.addEventListener('click', () => {
  getPi();
  resultRender();
})

xPow.addEventListener('click', () => {
  getPow();
  resultRender();
})

xNegative.addEventListener('click', () => {
  getNegative();
  resultRender();
})
