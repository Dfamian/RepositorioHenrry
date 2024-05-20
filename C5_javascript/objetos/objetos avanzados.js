// En javascript existe una funcion : Objet , que extiende diferentes metodos a los objetos
//hasOwnProperty
var libro = {
    autor: 'Borjes',
    genero: 'policial',
    año: 1990
}
var tienePropiedad = libro.hasOwnProperty('nombre')
console.log(tienePropiedad)
var tienePropiedad = libro.hasOwnProperty('autor')
console.log(tienePropiedad)

//KEYS
//devuelve un arreglo con el nombre de todas las propiedades de un objeto

var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades)

//for in . recorrer arreglos

var mundo = {
    continentes: 7 ,
    paises: 195,
    oceanos: 5
};
for (var prop in mundo){
    console.log("esta es la propiedad " + prop)
}

//This ,  funcionalidad particularidad . Referencia al Contexto
// hay 2 casas una con chimenea y aotra con garaje 
// si digo casa con chimenea hago contexto a la primera casa
// si digo casa azul ago contexto a la segunda casa 
var mascota = {
    animal: 'perro',
    raza: 'Ovejero aleman',
    amistoso: true,
    dueña: 'Maria lopez',
    info: function(){
        console.log('mi perro es un ' + this.raza)
    }
};
mascota.info();
