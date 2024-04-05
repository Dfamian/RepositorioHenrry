function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   var stringMasLargo = Math.max(str1.length, str2.length , str3.length)
   var nuevoString = ""

   console.log(str1);
   console.log(str2);
   console.log(str3);
   console.log(stringMasLargo)
   
   for (i = 0 ; i <= stringMasLargo ; i++){

   if(str1[i] !== undefined){
      nuevoString = nuevoString + str1[i]
   }
   if (str2[i] !== undefined){
      nuevoString = nuevoString + str2[i]
   }
   
   if (str3[i] !== undefined){
      nuevoString = nuevoString + str3[i]
   }
}
   console.log(nuevoString)
   return nuevoString
}

combine ("abc","12345", "67")

module.exports = combine;
