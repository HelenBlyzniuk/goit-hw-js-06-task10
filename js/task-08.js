 
const formEl = document.querySelector('.login-form');
console.log(formEl)

formEl.addEventListener("submit", handleSubmit);


let userInf = {};

function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    
    const {
        email,
        password,
    } = formElements;
    
    if (email.value === '' || password.value === '') {
        return alert('Not all fields are filled in');
    }

    userInf.email = email.value;
    userInf.password = password.value;
    console.log(userInf);
    
    event.currentTarget.reset();
}
    



