/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.  
2-Suma de los positivos.  
3-Cantidad de positivos.  
4-Cantidad de negativos.  
5-Cantidad de ceros.      
6-Cant de números pares.  
7-Promedio de positivos.  
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaPositivos;
	var sumaNegativos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	sumaPositivos = 0;
	sumaNegativos=0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	promedioPositivos = 0;
	promedioNegativos = 0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt('Ingrese un numero'));
		if (numeroIngresado > 0){
			contadorPositivos ++;
			sumaPositivos += numeroIngresado;
			promedioPositivos = sumaPositivos / contadorPositivos;
		}
		else if (numeroIngresado == 0) {
			contadorCeros ++;
		}
		else{
			contadorNegativos ++;
			sumaNegativos += numeroIngresado;
			promedioNegativos = sumaNegativos / contadorNegativos;
		}

		if(numeroIngresado % 2 == 0){
			contadorPares ++;
		}

		respuesta=prompt("desea continuar?");
	}//fin del while
	diferencia = contadorPositivos - contadorNegativos;

	document.getElementById('resultado1').innerHTML=("<h4>la suma de negativos es : </h4>"+ sumaNegativos);
	document.getElementById('resultado2').innerHTML=("<h4>la suma de positivos es : </h4>"+ sumaPositivos);
	document.getElementById('resultado3').innerHTML=("<h4>la cantidad de negativos es : </h4>"+ contadorNegativos);
	document.getElementById('resultado4').innerHTML=("<h4>la cantidad de positivos es : </h4>" + contadorPositivos);
	document.getElementById('resultado5').innerHTML=("<h4>la cantidad de ceros es : </h4>" + contadorCeros);
	document.getElementById('resultado6').innerHTML=("<h4>la cantidad de pares es : </h4>" + contadorPares);
	document.getElementById('resultado7').innerHTML=("<h4>el promedio de positivos es : </h4>" + promedioPositivos);
	document.getElementById('resultado8').innerHTML=("<h4>el promedio de negativos es : </h4>" + promedioNegativos);
	document.getElementById('resultado9').innerHTML=("<h4>la diferencia entre positivos y negativos es : </h4>" + diferencia);
}//FIN DE LA FUNCIÓN