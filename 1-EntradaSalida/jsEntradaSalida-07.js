/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
	nro1 = parseInt(txtIdNumeroUno.value) 
	nro2 = parseInt(txtIdNumeroDos.value)
	var suma;
	suma = nro1 + nro2
	alert(suma);	
}

function restar()
{
	nro1 = parseInt(txtIdNumeroUno.value) 
	nro2 = parseInt(txtIdNumeroDos.value)
	var restar;
	restar = nro1 - nro2
	alert(restar);
}

function multiplicar()
{ 
	nro1 = parseInt(txtIdNumeroUno.value) 
	nro2 = parseInt(txtIdNumeroDos.value)
	var mult;
	mult = nro1 * nro2
	alert(mult);
}

function dividir()
{
	nro1 = parseInt(txtIdNumeroUno.value) 
	nro2 = parseInt(txtIdNumeroDos.value)
	var div;
	div = nro1 / nro2
	alert(div);
}

