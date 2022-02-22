/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	let claveIngresada;
	clave = 'utn750'
	
	claveIngresada = prompt("ingrese el número clave.");
	do{
		claveIngresada = prompt("Clave incorrecta. Ingrese la clave correcta");
	}
	while (claveIngresada != clave){

		alert("Clave correcta.")
	}
	
	
}//FIN DE LA FUNCIÓN
