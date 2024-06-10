function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
var verdadero_o_falso = 0
if (typeof(arr) == 'string' || typeof(arr) == 'number' || arr.length == 0){
  verdadero_o_falso = false
}else {
  verdadero_o_falso = true
}
return verdadero_o_falso
}

module.exports = esArrayNoVacio;