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
    return new Promise( (resolve, reject)=> {

        let empleadoDB = empleados.find(empleado => {
       
            return empleado.id === id;
        })
        
        if(!empleadoDB){
            reject(`No existe un empleado con el ID ${id}`)
        }else{
            resolve(empleadoDB);
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
            console.log('Otra línea después.');
        }else{
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

getEmpleado(10).then(empleado => {
    return getSalario(empleado);
})
.then(resp => {
    console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
})
//Cuando alguna de las promesas anteriores falle, se va a capturar el error con un catch:
.catch(error => {
    console.log(error);
})
