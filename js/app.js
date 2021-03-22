let email = document.querySelector('input#email-txt');
let password = document.querySelector('input#password-txt');
let invalid = document.querySelector('.login')
let mensageInvalid = document.createElement('p')
invalid.appendChild(mensageInvalid);

function signup() {
    
    if (email.value === 'client@user.com' && password.value === '6903') {
        email.style.borderColor = '';
        password.style.borderColor = '';
        mensageInvalid.innerHTML = 'Done';
        mensageInvalid.style.color = '#28db46'
    }
    else {
        email.style.borderColor = 'red';
        password.style.borderColor = 'red';
        mensageInvalid.innerHTML = 'e-mail or password invalid!'
        mensageInvalid.style.color = 'red'
    }
}