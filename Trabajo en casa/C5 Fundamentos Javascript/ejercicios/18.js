function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  var num_impar = (num % 2);
  if (num_impar != 0){
    return true;
  }
  else {
    return false;
  }
}

module.exports = esImpar;