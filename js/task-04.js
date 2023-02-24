const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const result = document.querySelector('#value');

buttonDecrement.addEventListener('click', makeDecrement);
buttonIncrement.addEventListener('click', makeIncrement);

let value = 0;

function makeDecrement(event) {
    
    value -= 1;
    result.textContent = `${value}`;
    
};

function makeIncrement(event) {
    
    value += 1;
    result.textContent = `${value}`;
     
};