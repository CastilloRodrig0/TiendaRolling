function traer(){
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || 'no existe';
    console.log('usuarios'),
    usuarios.forEach(function (usuario, index) {
    console.log(usuario)
});
let tabla = document.getElementById('usuario')
console.log(tabla)
usuarios.forEach(function(element, index) {
   tabla.innerHTML += `<div>Nombre: ${element.nombre}</div>`
    
});
}