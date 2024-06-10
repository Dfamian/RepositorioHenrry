function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
var palabrasMayusculas = []
for (var i = 0 ; i < array.length; i ++){
  palabrasMayusculas.push(array[i].toUpperCase())
}
console.log(palabrasMayusculas)
return palabrasMayusculas
}
convertirStringAMayusculas (['hola','mundo'])
module.exports = convertirStringAMayusculas;