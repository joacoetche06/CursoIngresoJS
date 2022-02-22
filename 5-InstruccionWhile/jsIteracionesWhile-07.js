/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta='si';

	
	while(respuesta == "si"){

		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		acumulador += numeroIngresado;
		contador ++;
		console.log(contador);
		console.log(numeroIngresado);
		console.log(acumulador);
		respuesta = prompt("Quiere continuar?");
	}

	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN