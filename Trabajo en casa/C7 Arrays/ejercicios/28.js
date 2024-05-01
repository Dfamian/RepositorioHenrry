function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  var verdadero  = true
  var falso = false
  for (var i = 0 ; i < arr.length ; i++){
    if (arr.length > 1){
      return verdadero
    }
    else return falso
  }
  console.log(verdadero)
}
esArrayNoVacio = ([1,2,3])
module.exports = esArrayNoVacio;