/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';


	while (respuesta == "si"){
		numeroIngresado = parseInt(prompt('Ingrese un numero'));
		console.log(numeroIngresado)
		contador ++;
		if(numeroIngresado > 0){
			sumaPositivos += numeroIngresado;
		}
		else{
			multiplicacionNegativos *= numeroIngresado
		}
		console.log(sumaPositivos)
		console.log(multiplicacionNegativos)
		respuesta = prompt("Quiere continuar?");
	
	}

	document.getElementById('txtIdSuma').value=sumaPositivos;
	document.getElementById('txtIdProducto').value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN