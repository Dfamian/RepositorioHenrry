function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var suma = 1 
  if(n === 0){
    return 0
  }
  else {
    for ( var i = 2; i <= n ; i ++ ){
      suma = suma += i
    }
    return suma
  }
}
sumarHastaN(0)
module.exports = sumarHastaN;
