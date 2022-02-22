function mostrar()
{
	var destinoIngresado = document.getElementById('txtIdDestino').value;
	switch(destinoIngresado){
		case 'Bariloche':
		case 'Ushuaia':
			alert("Frío");
			break;
		case 'Cataratas':
		case 'Mar del plata':
			alert("Calor");
			break;

	}	
}//FIN DE LA FUNCIÓN