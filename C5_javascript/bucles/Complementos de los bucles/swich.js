//EJEMPLO DE SWICH
var fruta = "Mango"
switch (fruta){
    case "Naranjas":
        console.log("el kilo de naranjas esta a 2000 pesos")
        break
    case "mango":
    case "papalla":
        console.log("el kilo de mangos y papallas esta a 2500 pesos")
        break
    case "platanos":
        console.log("el kilo de platanos esa a 2000 pesos")
        break
    default :
    console.log("lo sentimos pero por el momento no disponemos de " + fruta + ".")
}
console.log("hay algo mas que quisiera comprar?")
// si se olvida colocar break el comando se seguira ejecutando desde donde olvidamos colocar el brack 