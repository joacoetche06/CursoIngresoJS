function mostrar()
{
	//tomo la hora
	var horaDelDia =document.getElementById('txtIdHora').value;
	horaDelDia = parseInt(horaDelDia)
	
	switch(horaDelDia){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:	
			alert("Es la mañana")
			break;
		
		
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("Es la tarde")
			break;

		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
			alert("Es de noche")
			break;
		
		default:
			alert("Es de madrugada")
			break;
	}

}//FIN DE LA FUNCIÓN