// setTimeout(function(){
//     console.log('Hola, Mundo!');
// }, 3000);

setTimeout(() => {
    console.log('Hola, Mundo!');
}, 3000);//se ejecuta después de 3 segundos

let getUsuarioById = (id, callback) => {

let usuario = {
    nombre: 'Carolina',
    //id: id //Esto es redundante.
    //En ECMA Script 6 ya no hace falta tener una propiedad cuyo valor sea igual a la variable.
    //Si la variable se llama igual que el parámetro lo puedo escribir directamente así:
    id
}

if(id===20){
    callback(`El usuario con id ${id}, no existe en la BD.`)
}else{
    callback(null, usuario);
}

}

getUsuarioById(1, (err, usuario)=>{

if(err){
    return console.log(err);
}

console.log('Usuario de base de datos', usuario);
});//va a la base de datos y trae datos