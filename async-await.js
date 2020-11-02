

//La siguiente es una función normal, pero cuando ponemos la palabra async, el resultado/return es transformado en una promesa:
//let getNombre = async() => {
    //undefined.nombre;//Genero un error de prueba: no puedo llamar una propiedad de un objeto undefined.
    //throw new Error ('No existe un nombre para ese usuario')//En lugar del error por defecto puedo decidir yo lo que quiero que aparezca como definición del error.
    //return 'Carolina';
//}
//Esto es lo que estamos haciendo arriba con solo poner la palabra ASYNC:
// let getNombre = () => {
//     return new Promise ((resolve, reject) => {
//         resolve('Fernando');
//     });
// }

//console.log(getNombre());

let getNombre = () => {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {

            resolve('Carolina');
        }, 3000);
    });
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;//este nombre tiene que ser el resultado de la función getNombre
}

// getNombre().then(nombre=>{
//     console.log(nombre);
// })
// .catch (e => {
//     console.log('Error de ASYNC', e);
// })

saludo().then(mensaje=>{
    console.log(mensaje);
})

