/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero= false;
	numeroMaximo = 0;
	numeroMinimo = 0;
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt('Ingrese un numero'));
		if (banderaDelPrimero == false){
			banderaDelPrimero = true;
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		else{
		if(numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
		}
		if(numeroIngresado < numeroMinimo){
			numeroMinimo = numeroIngresado;
		}
		}
		respuesta=prompt("desea continuar?");
		console.log(numeroMaximo)
		console.log(numeroMinimo)
	}
	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;
}//FIN DE LA FUNCIÓN
