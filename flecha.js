
//FUNCIÓN DE FLECHA:

// function sumar(a,b){
//     return a+b;
// }

//Sinónimo de la anterior:
let sumar = (a,b) => a+b;
console.log(sumar(10,20));

// function saludar(){
//     return 'Hola, Mundo!';
// }

let saludar = () => 'Hola, Mundo!';
console.log(saludar());

//si no recibe argumentos o si recibe más de uno, tengo que incluir los paréntesis
//si solo recibe un argumento, puedo no incluir los paréntesis
let saludar2 = nombre => `Hola ${nombre}`
console.log(saludar2('Carolina'));

// let deadpool = {
//     nombre: 'Wade',
//     apellido: 'Winston',
//     poder: 'Regeneracion',
//     getNombre: function(){
//         return `${this.nombre} ${this.apellido} - poder: ${this.poder}  `
//     }
// }


let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    //Una forma simple de hacer la función normal:
    getNombre () {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}  `
    }
}

console.log(deadpool.getNombre());
