// para esta clase vamos a abordar las funciones en como lo es f(x) 
function suma3(x){
    console.log(x + 3)
}
suma3(5)

// para hacer una funcion se basa en 3 pasos primero se debe declarar que es una funcion con la palabra  (function )
// lo siguiente se le da un nombre en el caso anterioor le di el nombre de 'suma3' despues se le tiene que poner un argumento en el caso anterior (x)
// a continuacion e unas llaves se escribe la funcion en si a esto se le conoce como cuerpo de la funcion { console.log (x + 3)},

//EJEMPLO 1 
function sumaTres(x){
    return x + 3;
};


//Ejemplo 2 

var sumaTres = function (x) {   // en esta seccion esta guardando la funcion en una variable 
    return x + 3;
};

//Ejemplo 3

var sumatres = (x) => {    //esta syntaxis es la funcion de flecha , declara la funcion en si 
    return x + 3 ;
};

// ------------------------------------------------------------------------------------------------------------------------------------------//
//                                               ERRORES COMUNES                                                                                //
 //no se debe confundir CONSOLE LOG con RETURN  // console.log da una vista en la consola de una variable, solo se usa como ayuda para programar
                                            
                                                //

var animal = 'caballo';
console.log(animal);

