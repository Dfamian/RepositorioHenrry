//for (var i = 1 ; i<= 100 ; i + i + 2){
//    console.log(i);
//}


//function monstrarNumeros(Limite){
 //   for (var i = 0; i <= Limite ; i++)
//    console.log(i)
//}
//monstrarNumeros(800)

function esNUmeroPrimo(numero){
    //la funcion recibe un argumento "numero"
    //determina si este corresponde a un numero primo.
    //De ser asi , retorna true
    //De lo contrario retorna flase
    //IMPORTANTE recuerda que el numero primo es aquel que
    //solo es divisible por si mosmo y por 1 
    //Tu codigo :
    for (var i = 2 ; i < numero ; i++){
        if ( numero % 1 === 0){
            return false
        }
        else {
            return true
        }
    }
}