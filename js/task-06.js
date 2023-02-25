const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', validationCheck);

function validationCheck(event) {
     
    const inputTextLength = event.currentTarget.value.length;
    const obligatoryTextLength = inputEl.getAttribute('data-length');
   
    event.currentTarget.classList.add('invalid');

    
    if (inputTextLength == obligatoryTextLength) {

     event.currentTarget.classList.replace('invalid','valid');
        
    } 
      
};