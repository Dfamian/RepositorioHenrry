function viajar(destino){
    if (destino === "Brasil")
     {console.log("Gire a la izquierda")}

    else if (destino === "Argentina")
     {console.log("Gire a la derecha")}
     else {console.log("nos perdimos")}
}

viajar("Argentna");

function puedeManejar(edad){
    if (edad >= 18) {
        console.log(true);
    }
    else if (edad <= 17){
        console.log(false)
    }
    else {
        console.log("inserte un valor correcto")
    }
}
 