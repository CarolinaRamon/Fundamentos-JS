
let empleados = [{
    id: 1,
    nombre: 'Carolina'
}, {
    id: 2,
    nombre: 'Melissa'
},{
    id: 3,
    nombre: 'Leonardo'
}];

let salarios = [{
    id: 1,
    salario: 1000
},{
    id:2,
    salario: 2000
}];


let getEmpleado = (id) => {
   //El resolve se va a llamar si la promesa es exitosa y el reject si no es exitosa.
   //Los nombres resolve y reject son opcionales, pero es un estándar llamarlos de esta manera.
    return new Promise( (resolve, reject)=> {

        let empleadoDB = empleados.find(empleado => {
       
            return empleado.id === id;
        })
        
        if(!empleadoDB){
            reject(`No existe un empleado con el ID ${id}`)
        }else{
            resolve(empleadoDB);//En el caso de resolve, solo puedo enviar un argumento.
        }
    });
}

let getSalario = (empleado) => {
     
    return new Promise ((resolve,reject)=>{

        let salarioDB = salarios.find(salario => {
            return salario.id === empleado.id;
        })
        
        if(!salarioDB){
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`)
            // reject(`No se encontró un salario para el empleado ${empleado.nombre}`)
            // reject(`No se encontró un salario para el empleado ${empleado.nombre}`)
            // reject(`No se encontró un salario para el empleado ${empleado.nombre}`)
            //Por más que me equivoque y repita el reject no se vuelve a disparar. Aunque el código sí se sigue ejecutando:
            console.log('Otra línea después.');
            //Si fuera un callback sí se vuelve a disparar.
        }else{
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

getEmpleado(2).then(empleado => {
    //console.log('Empleado de BD', empleado);
    getSalario(empleado).then(respuesta =>{
        console.log(`El salario de ${respuesta.nombre} es de $ ${respuesta.salario}`);
    }, (err) =>{
        console.log(err);
    }); 
    }, (err)=>{
    console.log(err);
});


