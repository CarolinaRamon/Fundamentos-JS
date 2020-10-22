
//Mini base de datos (2 arreglos):
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

//Función para obtener el empleado por el id:
//Recibo un id y llamo un callback.
let getEmpleado = (id, callback) => {
    //barro el arreglo con la función find:
    let empleadoDB = empleados.find(empleado => {
        //retorna el empleado cuyo id es igual al id que recibí como parámetro:
        return empleado.id === id;//retorna true o false
    })
    //console.log(empleadoDB);
    if(!empleadoDB){//si devuelve false
        callback(`No existe un empleado con el ID ${id}`)
    }else{
        callback(null, empleadoDB);//envío null porque no hubo ningún error
    }
}


let getSalario = (empleado, callback) => {
    
    let salarioDB = salarios.find(salario => {
        return salario.id === empleado.id;
    })
    
    if(!salarioDB){
        callback(`No se encontró un salario para el empleado ${empleado.nombre}`)
    }else{
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}

getEmpleado(10, (err, empleado)=>{
    
    if(err){
        return console.log(err);
    }
    
    //console.log(empleado);

    getSalario(empleado, (err, respuesta)=>{
        
        if(err){
            return console.log(err);
        }

        console.log(`El salario de ${respuesta.nombre} es de $${respuesta.salario}`);
    });

});


