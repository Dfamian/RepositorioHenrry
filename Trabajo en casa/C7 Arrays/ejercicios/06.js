function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  var Invertir = array.split("")
  Invertir = Invertir.reverse(array)
  Invertir = Invertir.join("")
  console.log(Invertir)
  return Invertir
}
module.exports = invertirArray;
