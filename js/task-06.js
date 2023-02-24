const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', validationCheck);

function validationCheck(event)  {
    const inputTextLength = event.currentTarget.value.length;
    const obligatoryTextLength = inputEl.getAttribute('data-length');
  
    
    if (inputTextLength != obligatoryTextLength) {
     
        event.currentTarget.classList.add('invalid');
    } else {
         event.currentTarget.classList.add('valid');
    }
    
    
};