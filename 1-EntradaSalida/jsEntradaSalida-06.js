/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	nro1 = parseInt(txtIdNumeroUno.value);

	nro2 = parseInt(txtIdNumeroDos.value);

	var suma;
	
	suma = nro1 + nro2


	alert("La suma es " + suma);
}

