
//VAR:
// var nombre = 'Wolverine';
// //console.log(nombre);

// if(true){
//     var nombre='Magneto';
// }

// console.log(nombre);//nombre va a tener el valor de la última asignación

//LET:
//Puedo cambiar el valor de un let, pero no puedo volver a inicializarlo:
let nombre = 'Wolverine1';
// let nombre = 'Wolverine';//ERROR
nombre = 'Wolverine2';
nombre = 'Wolverine3';
nombre = 'Wolverine4';

// let nombre = 'Wolverine';
// //console.log(nombre);

if(true){
    let nombre='Magneto';
    console.log(nombre)
}

console.log(nombre);//nombre va a tener el valor de la última asignación

//DIFERENCIAS VAR vs LET en CICLOS:

for (var i=0;i<=5;i++){
    console.log(`i: ${i}`);
}
console.log(i);//i queda con valor 6


// for (let i=0;i<=5;i++){
//     console.log(`i: ${i}`);
// }
// console.log(i);//ERROR: i no está definida