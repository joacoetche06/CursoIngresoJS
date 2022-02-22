/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	


}//FIN DE LA FUNCIÓN
function piedra()
{
	

}//FIN DE LA FUNCIÓN
function papel()
{


}//FIN DE LA FUNCIÓN
function tijera()
{
	

}//FIN DE LA FUNCIÓN




function CalcularPrecio () {
    let cant;
    let precioTotal;
    let marca;
    cant = document.getElementById("txtIdCantidad").value;
    cant = parseInt(cant);
    precioTotal = cant * 35;
    marca = document.getElementById("Marca").value;

    /* Parte A */

    if(cant >= 6) {
        precioTotal = precioTotal * 0.5;
    }

    /* Parte B */

    if (cant == 5) {
        if (marca == "ArgentinaLuz"){
            precioTotal = precioTotal * 0.6;
        }
        else{
        precioTotal = precioTotal * 0.7;

    }
        
    }

    /* Parte C */

    if (cant == 4) {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            precioTotal = precioTotal * 0.75;
        }
        else {
            precioTotal = precioTotal * 0.8;

        }
    }

    /* Parte D */

    if (cant == 3) {
        if (marca == "ArgentinaLuz") {
            precioTotal = precioTotal * 0.85;
        }
        else{
            if (marca == "FelipeLamparas"){
                precioTotal = precioTotal * 0.9;
            }
            else{
                precioTotal = precioTotal * 0.95;
            }
        }
    }

    /* Parte E */
    console.log(precioTotal)

    if (precioTotal >= 120) {
        let iiBB;
        iiBB = precioTotal * 0.1
        precioTotal = precioTotal + iiBB
        alert(`Usted pago $${iiBB} de IIBB.`)
    }



    document.getElementById("txtIdprecioDescuento").value = precioTotal;

}