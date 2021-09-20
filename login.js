let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
console.log(typeof usuarios)
function loguin (e){
    e.preventDefault();
    let username = document.getElementById('user').value;
    let password = document.getElementById('pass').value; 
    //console.log(username,password)
   // console.log(usuarios.lenght)
   // console.log(usuarios)
   //for(let i=0; i< usuarios.lenght; i++){
      //  console.log(usuarios[i])
       // console.log("estoy adentro")
       // if( usuarios[i].usuario==username && usuarios[i].contraseña==password){
     //       location.href='bienvenido.html'
       // }
    //} 
    usuarios.forEach(element => {
        console.log(element)
         if( element.usuario==username && element.contraseña==password){
           location.href='bienvenido.html'
        }
    });

}
 
