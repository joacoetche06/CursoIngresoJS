function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	contador=0;
	acumulador=0;

	while(contador < 5){
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		acumulador += numeroIngresado;
		contador ++;
		console.log(contador)
	}
	
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/5;
}//FIN DE LA FUNCIÓN