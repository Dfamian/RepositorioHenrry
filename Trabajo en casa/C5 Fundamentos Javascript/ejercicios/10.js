function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
 
if (fecha == "invalid date "){
  return false ;
}
if (fecha instanceof Date){
  return true
}
}

module.exports = esFechaValida;