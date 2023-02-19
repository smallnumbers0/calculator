let total = ''
//how do I select all buttons and for every button clicked the text content of the buttons are displayed like: 786-498
document.getElementById('zero').addEventListener('click', zero)
document.getElementById('one').addEventListener('click', one)
document.getElementById('two').addEventListener('click', two)
document.getElementById('three').addEventListener('click', three)
document.getElementById('four').addEventListener('click', four)
document.getElementById('five').addEventListener('click', five)
document.getElementById('six').addEventListener('click', six)
document.getElementById('seven').addEventListener('click', seven)
document.getElementById('eight').addEventListener('click', eight)
document.getElementById('nine').addEventListener('click', nine)

function zero() {
  total += '0'
  document.getElementById('current').innerText = total
  }


function one() {
  total += '1'
  document.getElementById('current').innerText = total
}

function two() {
  total += '2'
  document.getElementById('current').innerText = total
}


function three() {
  total += '3'
  document.getElementById('current').innerText = total
}


function four() {
  total += '4'
  document.getElementById('current').innerText = total
}


function five() {
  total += '5'
  document.getElementById('current').innerText = total
}


function six() {
  total += '6'
  document.getElementById('current').innerText = total
}


function seven() {
  total += '7'
  document.getElementById('current').innerText = total
}


function eight() {
  total += '8'
  document.getElementById('current').innerText = total
}


function nine() {
  total += '9'
  document.getElementById('current').innerText = total
}

document.getElementById('clear').addEventListener('click', clear)

function clear() {
  total = ''
  document.getElementById('current').innerText = total
}

document.getElementById('divide').addEventListener('click', divide)

function divide() {
  if(!(total.includes('+') || total.includes('-') || total.includes('/') || total.includes('*'))) {
  total += ' / '
  document.getElementById('current').innerText = total
}
}

document.getElementById('multiply').addEventListener('click', multiply)

function multiply() {
  if(!(total.includes('+') || total.includes('-') || total.includes('/') || total.includes('*'))) {
  total += ' * '
  document.getElementById('current').innerText = total
}
}

document.getElementById('add').addEventListener('click', add)

function add() {
  if(!(total.includes('+') || total.includes('-') || total.includes('/') || total.includes('*'))) {
  total += ' + '
  document.getElementById('current').innerText = total
}
}

document.getElementById('subtract').addEventListener('click', subtract)

function subtract() {
  if(!(total.includes('+') || total.includes('-') || total.includes('/') || total.includes('*'))) {
  total += ' - '
  document.getElementById('current').innerText = total
}
}

document.getElementById('equal').addEventListener('click', solve)

function solve() { //How do I turn the string in current display into maths
  total = document.getElementById('current').textContent
  total = Function("return " + total)()
  document.getElementById('current').textContent = total
  console.log(total)
}

document.getElementById('decimal').addEventListener('click', decimal)
function decimal() {
  if(!(total.includes('.'))) {
  total += "."
  document.getElementById('current').innerText = total
  }
}

document.getElementById('sign').addEventListener('click', sign)

function sign() {
  //if clicked after an operation button it turns display into NaN
  total *= -1
  document.getElementById('current').innerText = total
  }

  document.getElementById('percent').addEventListener('click', percent)

  function percent() {
    total /= 100
    document.getElementById('current').innerText = total
  }
// function operate(a, operator, b) {
//   if(operator === '+') {
//     return a + b
//   }
//   else if(operator === '-') {
//     return a - b
//   }
//   else if(operator === '/') {
//     return a / b
//   }
//   else if(operator === '*') {
//     return a * b
//   }
// }
