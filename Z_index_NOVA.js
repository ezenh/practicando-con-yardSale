/*CODIGO DE PANTALLA LOGIN*/
/*1 . Declaracion de los elementos del HTML*/
const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');

const loginButton = document.querySelector('.login-button');
      loginButton.addEventListener('click', loginIntent)
const signUpButton = document.querySelector('.signup-button');


/*2. Funciones dentro del HTML*/
function loginIntent(event) {
    event = event.preventDefault();
    console.log(emailField.value);
    console.log(passwordField.value);
if (emailField.value === 'ezenh87@gmail.com' && passwordField.value === '12345') {
    loginButton.setAttribute('href', './main.html');
    function submit() {
        
    }
    submit();
    console.log('Login si va');
} else {
    console.log('Login no va');
}
};


