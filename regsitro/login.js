let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
console.log( usuarios)
function loguin (e){
    e.preventDefault();
    let username = document.getElementById('user').value;
    let password = document.getElementById('pass').value; 
    usuarios.forEach(element => {
       console.log(element)
        if( element.usuario==username && element.contrasena==password){
          location.href='bienvenido.html'
       }
   });
}
 
