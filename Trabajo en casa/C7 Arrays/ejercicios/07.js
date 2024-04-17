function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

var ContieneNumeros = false
var ContieneLetras = false
var NoContieneNada = false
// para mirar cada elemento se hace asi 



for (var i = 0 ; i < array.length; i++){
  if (typeof array[i] === "number"){
    ContieneNumeros = true
  }
  else if (typeof array [i] === "string"){
    ContieneLetras = true
  }
  else if (typeof array [i] === null || undefined || ""){
    NoContieneNada = true 
  }
}

if (ContieneNumeros){
  return (array.sort((a,b) => a-b))
} else if (ContieneLetras){
  return ( array.sort())
} else if (NoContieneNada){
  return (array.sort())
}

} 


module.exports = ordenarArray;
