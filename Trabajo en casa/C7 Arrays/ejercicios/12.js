function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var mayuscula = []
  for ( var i = 0 ; i < array.length ; i ++){
    mayuscula.push(array[i].toUpperCase())
  }
  return mayuscula


}
convertirStringAMayusculas (['hola','volvi', 'cabrones'])
module.exports = convertirStringAMayusculas;
