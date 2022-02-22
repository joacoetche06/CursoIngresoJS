/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    var prod1;
    var prod2;
    var prod3;
    var suma;
    prod1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    prod2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    prod3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    suma = prod1 + prod2 + prod3
	alert(suma)
}
function Promedio () 
{
	var prod1;
    var prod2;
    var prod3;
    var suma;
    var promedio;
    prod1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    prod2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    prod3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    suma = prod1 + prod2 + prod3
    promedio = suma / 3
    alert(promedio)
}
function PrecioFinal () 
{
	var prod1;
    var prod2;
    var prod3;
    var suma;
    var precioFinal;
    prod1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    prod2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    prod3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    suma = prod1 + prod2 + prod3
    precioFinal = suma * 1.21;
    alert(precioFinal)
}