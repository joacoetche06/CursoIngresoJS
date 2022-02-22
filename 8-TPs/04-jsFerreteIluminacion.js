/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos Total.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe Total con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
/* function CalcularPrecio () {
    let cant;
    let precioTotal;
    let marca;
    let precioDto;
    cant = document.getElementById("txtIdCantidad").value;
    cant = parseInt(cant);
    precioTotal = cant * 35;
    marca = document.getElementById("Marca").value;
    precioDto = 0

    

    if(cant >= 6) {
        precioDto = precioTotal * 0.5;
    }
    
    else if (cant == 5) {
        if (marca == "ArgentinaLuz"){
            precioDto = precioTotal * 0.6;
        }
        else{
        precioDto = precioTotal * 0.7;

    }
        
    }
    
    else if (cant == 4) {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            precioDto = precioTotal * 0.75;
        }
        else {
            precioDto = precioTotal * 0.8;

        }
    }
    
    else if (cant == 3) {
        if (marca == "ArgentinaLuz") {
            precioDto = precioTotal * 0.85;
        }
        else{
            if (marca == "FelipeLamparas"){
                precioDto = precioTotal * 0.9;
            }
            else{
                precioDto = precioTotal * 0.95;
            }
        }
    }
    else{
        precioDto = precioTotal * 1;
    }
    

    
    console.log(precioTotal)
    console.log(precioDto)

    if (precioDto >= 120) {
        let iiBB;
        iiBB = precioTotal * 0.1
        precioDto = precioDto + iiBB
        alert(`Usted pago $${iiBB} de IIBB.`)
    }
    console.log(precioDto)


    document.getElementById("txtIdprecioDescuento").value = precioDto;

} */


function CalcularPrecio () {
    let cant;
    let precioTotal;
    let marca;
    let precioDto;
    cant = document.getElementById("txtIdCantidad").value;
    cant = parseInt(cant);
    precioTotal = cant * 35;
    marca = document.getElementById("Marca").value;
    precioDto = 0

    
    switch (cant){
        case 1:
        case 2:
            precioDto = precioTotal;
            break;
        case 3:
            if (marca == "ArgentinaLuz"){
                precioDto = precioTotal * 0.85;
            }
            else{
                if(marca == "FelipeLamparas"){
                    precioDto = precioTotal * 0.9;
                }
                else{
                    precioDto = precioTotal * 0.95;
                }
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                precioDto = precioTotal * 0.75;
            }
            else {
                precioDto = precioTotal * 0.8;
            }
            break;
        case 5:    
            if (marca == "ArgentinaLuz"){
                precioDto = precioTotal * 0.6;
            }
            else{
            precioDto = precioTotal * 0.7;
            }
            break;
        default:
            precioDto = precioTotal * 0.5;
            break;

        

    }
    console.log(precioTotal)
    console.log(precioDto)






    if (precioDto >= 120) {
        let iiBB;
        iiBB = precioTotal * 0.1
        precioDto = precioDto + iiBB
        alert(`Usted pago $${iiBB} de IIBB.`)
    }
    console.log(precioDto)


    document.getElementById("txtIdprecioDescuento").value = precioDto;

}