function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  var PalabraSeparada = ' '
  var ultimaPalabra = ' '
  for (var i = 0 ; i< array.length ; i ++){
    PalabraSeparada = array[i].split('')
  if (PalabraSeparada.length >= 5){
    ultimaPalabra = array[i]
    break
  }
  }
  console.log(PalabraSeparada)
  console.log(ultimaPalabra)
  return ultimaPalabra
}
obtenerPrimerStringLargo(["hola", "como ", "estan", "culeros"]) 
module.exports = obtenerPrimerStringLargo;
