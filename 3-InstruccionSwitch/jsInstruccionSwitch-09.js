function mostrar()
{
	let estacionIngresada =document.getElementById('txtIdEstacion').value;
	let destinoIngresado = document.getElementById('txtIdDestino').value;
	let precioBase = 15000;
	let precioFinal;
	switch(estacionIngresada){
		case 'Invierno':
			switch(destinoIngresado){
				case 'Bariloche':
					precioFinal= precioBase * 1.2;
					alert("$" + precioFinal);
					break;
				case 'Cataratas':
				case 'Cordoba':
					precioFinal= precioBase * 0.9;
					alert("$" + precioFinal);
					break;
				default:
					precioFinal= precioBase * 0.8;
					alert("$" + precioFinal);
					break;
			}
		break;	
		
		case 'Verano':
			switch(destinoIngresado){
				case 'Bariloche':
					precioFinal= precioBase * 0.8;
					alert("$" + precioFinal);
					break;
				case 'Cataratas':
				case 'Cordoba':
					precioFinal= precioBase * 1.1;
					alert("$" + precioFinal);
					break;
				default:
					precioFinal= precioBase * 1.2;
					alert("$" + precioFinal);
					break;
			}
		break;

		default:
			switch(destinoIngresado){
				case 'Bariloche':
				case 'Cataratas':
				case 'Mar del plata':
					precioFinal= precioBase * 1.1;
					alert("$" + precioFinal);
					break;
				default:
					precioFinal= precioBase;
					alert("$" + precioFinal);
					break;
			}
		break;
	}

}//FIN DE LA FUNCIÓN