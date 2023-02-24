const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', addNameIntoSpan);



function addNameIntoSpan(event) {
    const inputText = event.currentTarget.value;
    if (inputText !== '') {
        spanEl.textContent = `${inputText}`;
    }
    
}