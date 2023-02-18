let num = 0;

document.querySelector('#clear').addEventListener('click',)
document.querySelector('#sign').addEventListener('click',)
document.querySelector('#percent').addEventListener('click',)
document.querySelector('#divide').addEventListener('click',)
document.querySelector('#seven').addEventListener('click',)
document.querySelector('#eight').addEventListener('click',)
document.querySelector('#nine').addEventListener('click',)
document.querySelector('#multiply').addEventListener('click',)
document.querySelector('#four').addEventListener('click',)
document.querySelector('#five').addEventListener('click',)
document.querySelector('#six').addEventListener('click',)
document.querySelector('#subtract').addEventListener('click',)
document.querySelector('#one').addEventListener('click',)
document.querySelector('#two').addEventListener('click',)
document.querySelector('#three').addEventListener('click',)
document.querySelector('#add').addEventListener('click',)
document.querySelector('#zero').addEventListener('click',)
document.querySelector('#decimal').addEventListener('click',)
document.querySelector('#equal').addEventListener('click',)

function clearAll() {
    return num = 0;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
function multiply(a ,b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function percentage(a) {
    return a / 100;
}
function solve(operator, a, b) {
    if(operator == "+") {
         add()
    }
}

document.querySelector('#display').innerHTML = solve //change display
