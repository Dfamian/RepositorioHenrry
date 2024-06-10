//un calbacks, funciones que se pasan por parametreoa a otras funciones , por ejemplo 

//Funcion 1 ( llama a ) ----------------------> funcion2
//Aseguran que una funcion no se va a ejeccutar antes de que se complete una tarea

var devuelvoUsuario = function(){
    return 'camilo'
}

var devuelvoSaludo = function(){
    return 'hola'
}

var saludar = function(cb1 , cb2){
    return cb1() + ' ' + cb2();
};

var resultado = saludar(devuelvoSaludo , devuelvoUsuario)
console.log(resultado)

// -------------------------------------------------------------------------
var devuelvoFrase = function(comida){
    return "hoy quiero comer " + comida;
};

var hablar = function(comida,cb){
    return cb(comida);
};

var frasefinal = hablar('pizza', devuelvoFrase)
console.log(frasefinal)
