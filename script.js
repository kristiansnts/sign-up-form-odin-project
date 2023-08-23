const cta = document.querySelector('button[type="submit"]');
const password = document.getElementById('password');
const confirm = document.getElementById('password-confirm');

cta.addEventListener('click', () => {
    if(password.value == confirm.value) {
        console.log('selamat')
        password.classList.remove('error');
        confirm.classList.remove('error');
        const errorText = document.querySelector('.error-text');
        if(errorText){
            errorText.textContent = ''
        }
        password.value = ''
        confirm.value = ''
        return;
    }
    const el = document.createElement('p');
    const parentEl = password.parentNode;
    const para = parentEl.appendChild(el);
    para.textContent = `* Password do not match`;
    para.classList.add('error-text');
    password.classList.toggle('error');
    confirm.classList.toggle('error');
    password.value = ''
    confirm.value = ''
})