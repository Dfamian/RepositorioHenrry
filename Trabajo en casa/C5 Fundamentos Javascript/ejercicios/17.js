function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  var num_par = (num % 2 );
  if (num_par == 0){
    return true;
  }
  else {
    return false;
  }
}

module.exports = esPar;
