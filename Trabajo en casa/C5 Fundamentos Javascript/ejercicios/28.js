function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:
  var holaMensaje = String("Hola ")
  var concatena = (holaMensaje + nombre + "!")
  return concatena;
}

module.exports = obtenerSaludo;