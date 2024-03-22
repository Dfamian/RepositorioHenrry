function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  var longitudp1 = (str1.length);
  var longitudp2 = (str2.length);
  if(longitudp1 == longitudp2){
    return true;
  }
  else{
    return false;
  }
}

module.exports = tienenMismaLongitud;