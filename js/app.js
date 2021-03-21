function signup() {
    let email = document.querySelector('input#email-txt')
    let password = document.querySelector('input#password-txt')

    if (email.value === 'test' && password.value === '6903') {
        alert('Done!')
    } else {
        email.style.borderColor = 'red'
        password.style.borderColor = 'red'
    }
}