const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const mail = document.getElementById('mail');

let users = JSON.parse(localStorage.getItem('usuarios')) || [];
    let listado = document.getElementById('listadoUsuarios');
users.forEach(usuario => {agregaraLista(usuario)
});

function agregaraLista(newUsuario){
    let newuser = document.createElement('li');
    newuser.append( 'USUARIO: '+newUsuario.usuario +' '+'CONTRASEÑA: '+newUsuario.contrasena +' '+' EMAIL: '+newUsuario.email+'');
    listado.append(newuser);
    let eliminado = document.createElement('button');
    eliminado.append('eliminar');
    newuser.append(eliminado);
}
form.addEventListener('submit',function(event){
    
    event.preventDefault();
    let user =
        {
            usuario: username.value,
            contrasena: password.value,
            email: mail.value
        }
    users.push(user)
    localStorage.setItem('usuarios',JSON.stringify(users));
    agregaraLista(user);
});

