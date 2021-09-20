const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const mail = document.getElementById('mail');

form.addEventListener('submit',function(event){
    
    event.preventDefault();
    
    let user =

    
        {
            usuario: username.value,
            contraseña: password.value,
            email: mail.value

        }
    
    
    let users = JSON.parse(localStorage.getItem('usuarios')) || [];
    users.push(user)
    localStorage.setItem('usuarios',JSON.stringify(users));
    location.href='bienvenido.html'
    
});