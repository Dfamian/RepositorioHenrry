//se pueden trabajar de 2 maneras 

//1.Dot-Notacion .
//se llama no notacion porque se unsa un . para acceder a las propiedades 

var deportes = {
    conBalon: [ "futball" , "basquetball", "rugby"],
    sinBalon: ["boxeo", "surf", "treking"]
}
var persona = {
    nombre: "lucas",
    edad: 26,
    estudios:  (esProgramador => true)
}
console.log(persona.edad)
persona.nombre = "martin" ;
console.log(persona.nombre)
persona.edad = 32
console.log(persona.edad)

var autos = {};
autos.marcas = ["ford", "audi", "ferrari"]
console.log(autos)

delete autos.marcas

console.log(autos)


var miFunciones = {
    saludar: function (){
        console.log('hola')
    }
}
miFunciones.saludar();
console.log(miFunciones.saludar())



//2. Bracket-Notation []
// notacion por corchetes []
var atuendos = {
    manos: ["guantes", "anullos"],
    pies: ["Zapatos", "chanclas"]
}
atuendos["piernas"] + ["bermudas","pantalones"]


var comidas = {}
var diferenciaDeNotaciones = function(propUno,PropDos){
    comidas[propUno] = ["frutas","vegetales"]
    comidas[PropDos]=["hamburgesa","papas fritas"]
};
diferenciaDeNotaciones("saludable", "nosaludable");
console.log(comidas)