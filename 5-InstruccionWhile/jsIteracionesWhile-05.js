/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	let fem;
	let masc;
	sexoIngresado = ''
	fem = 'f';
	masc = 'm';

	do{
		sexoIngresado = prompt("ingrese f ó m .");
	}

	while (sexoIngresado != fem && sexoIngresado != masc){

		document.getElementById('txtIdSexo').value = sexoIngresado;
	}



}
//FIN DE LA FUNCIÓN