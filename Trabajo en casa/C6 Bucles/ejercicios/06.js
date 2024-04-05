function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
var NumALetra = num.toString()
if ( NumALetra.length === 3){
  return true
}
else if ( NumALetra != 3){
  return false;
}
}

module.exports = tieneTresDigitos;
