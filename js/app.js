function signup() {
    let mail = document.querySelector('input#email-txt')
    let password = document.querySelector('input#password-txt')

    if (mail.value === 'test' && password.value === '6903') {
        alert('Done!')
    } else {
        mail.style.borderColor = 'red'
        password.style.borderColor = 'red'
    }
}