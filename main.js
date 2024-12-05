const buttons = document.querySelector('.buttons');
const input = document.querySelector('.input');
const switcher = document.querySelector('.switcher');

let number = '';
let result = '';

function calculate(event) {
    let pressed = event.target;
    let pressedClasses = event.target.classList;
    if(!pressedClasses.contains('btn')) return;

    // launching functions by pressing certain buttons
    if(pressedClasses.contains('value')) {
        if(!pressedClasses.contains('act')) {
            if(pressedClasses.contains('dot') && number == '') number = '0';

            number += pressed.innerText;
            input.innerText = number;
        } else {     
            if(number !== '') {
                number += pressed.innerText;
                result += number;
                number = ''; 
            }
        }
    }

    if(pressedClasses.contains('ac')) clearAll();

    if(pressedClasses.contains('del')) deleteItem();

    if(pressedClasses.contains('percent')) percent();

    if(pressedClasses.contains('equal')) showResults();
}

function percent() {
    if(input.innerText !== '0') number = input.innerText * 1 / 100;

    input.innerText = number;
}

function deleteItem() {
    number = input.innerText.slice(0, -1);

    if(number == '') input.innerText = '0';
    else input.innerText = number;
}

function clearAll() {
    number = '';
    result = '';
    input.innerText = '0';
}

function showResults() {
    result += number;

    if(result !== '') result = eval(result);
    else input.innerText = '0';

    // rounding the result
    input.innerText = Math.round(result * 100) / 100;
    number = result;
    result = '';
}

function nightMode() {
    // searching for elements to change the theme
    const numbers = document.querySelectorAll('.number');
    const operations = document.querySelectorAll('.operation');
    const body = document.querySelector('body');
    const calculator = document.querySelector('.calculator');

    // changing theme for all elements with a delay
    setTimeout(() => {
        body.classList.toggle('day-body');
        calculator.classList.toggle('day-theme');
        input.classList.toggle('day-input');
        numbers.forEach(item => {
            item.classList.toggle('day-number');
    });
    operations.forEach(item => {
        item.classList.toggle('day-operation');
    })
    }, 800)
}

buttons.addEventListener('click', calculate);
switcher.addEventListener('click', nightMode);