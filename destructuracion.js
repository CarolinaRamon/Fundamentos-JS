let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}  `
    }//this en este caso hace referencia al objeto
}

console.log(deadpool.getNombre());

// let nombre = deadpool.nombre;//lo guardo en una variable
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

//DESTRUCTURACIÓN:
// let {nombre, apellido, poder}=deadpool;//creo variables y las tomo de deadpool
// console.log(nombre, apellido, poder);

//si les quiero dar otro nombre:
let {nombre: PrimerNombre, apellido, poder}=deadpool;
console.log(PrimerNombre, apellido, poder);