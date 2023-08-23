const cta = document.querySelector('button[type="submit"]');
const password = document.getElementById('password');
const confirm = document.getElementById('password-confirm');

cta.addEventListener('click', () => {
    if(password.value === confirm.value) {
        alert('Selamat!');
    }
    const el = document.createElement('p');
    const parentEl = password.parentNode;
    const para = parentEl.appendChild(el);
    para.textContent = `* Password do not match`;
    para.classList.add('error-text');
    password.classList.toggle('error');
    confirm.classList.toggle('error');
})