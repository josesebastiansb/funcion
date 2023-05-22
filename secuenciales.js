const leer = require('prompt -sync')()
const Escribir = console 

class secunciales{
    ejercicio1(){
    let a,b,c,resultado 
    a=0,b=0,c=0,resultado=0
    a=leer("digite un valor a:")    
    b=leer("digite un valor b:")
	c=leer("digite un valor c:")
	resultado = (-b+Math.sqrt(b**2-4*a*c))/(2*a)
	console.log  ("el resultado es:"),resultado
    }
}

//
ejercicio2();{
    let a,b, resultado 
    a=0,b=0,resultado=Boolean
	
	a=leer("digite el valor de a:")
	b=leer("el valor de b:")
	resultado = ((3+5*8)<3 && ((-6/3*4)+2<2)) || (a>b)
	
	console.log("el resultado es:"),resultado
}
   //
   ejercicio3();{
    let a,b,aux 
	a=leer("digite el valor de a:")
	b=leer ("digite el valor de b:");

	
	aux=a
	a=b
	b=aux
	
	console.log (" el nuevo valor de a es :"),a;
	console.log ("el nuevo valor de b es:"),b;
   }
   //
 ejercicio4();{
// este sera nuiestro primer programa
let a,b,c, resultado
a = 10
b = 20
c=leer ("digite un numero: ")
resultado = a+b+c;
console.log ("el resultado es:"),resultado

}

//
ejercicio5();{
	// este sera nuestro primer programa  
	let a,b,resultado
	a = 10
	b=leer("digite un numero:")
	resultado = a+b
	console.log ("el resultado es:"),resultado
}
//
ejercicio6();{
    let a,b,resultado
	a=10
    b=leer("Digite un numero:");
	//sumamos a y b y el resultado lo almacenamos
	resultado=a+b;
	console.log ("el resultado es:"),resultado
}

//
ejercicio7();{
    //ejercicio 1: calcular la cantidad de segundos que se estan incluidos en el 
	//numero de horas, minutos y segundo ingresado por el usuario
	let horas,minutos,seg 
	let horas_seg, minutos_seg, total_seg
	horas=leer ("digite las horas:")
	minutos=leer ("digite los minutos:")
	seg=("digite los segundos.")
	
	//calcular el equivalente en segundos
	horas_seg <-horas*3600;
	minutos_seg<-minutos*60;
	total_seg<- horas_seg+minutos_seg+seg;
	console.log ("los segundo equivalentes son:"),total_seg
}

//
ejercicio8();{
    // ejercicio 2: hacer un programa para ingresar el radio de un circulo y se  
	// reporte su area y la longitud de la circunferencia.
	// area = pi * raadio^2
	// longitud = 2 * pi * radio
	let radio,area,lon
	radio=leer ("digite el valor de radio:")
	area = Math.PI*Math.pow(radio,2)
	lon = 2*Math.PI*radio
	console.log ("el area de la circunferencia es:"),area
	console.log ("la longitud es:"),lon
}

//
ejercicio9();{
    // ejercicio3: un maestro desea saber que procentaje de hombre y que 
	// porcentaje de mujeres hay en un grupo de estudiantes.
	let num_hombres, num_mujeres 
	let total_estudiantes
	let procentajeh, procentajem 
	num_hombres=leer ("digite el numero de hombres")
	num_mujeres=leer ("digite el numero de mujeres")
	total_estudiantes = num_hombres + num_mujeres;
	procentajeh = num_hombres / total_estudiantes*100
	procentajem = num_mujeres / total_estudiantes*100
	console.log ("el procentaje de hombres es:"),procentajeh,"%"
	console.log ("el procentaje de mujeres es:"),procentajem,"%"
}
//
ejercicio10();{
//ejercicio4: un profesor prepara tres cuestionario para una evaluación
	//final:A,B,C, se sabe que se trada 5 minutos en revisar el cuestionario
	//A, 8 en revisar el cuestionrio B y 6 en el C. la cantidad de exámenes 
	//de cada tipo se entran por teclad. ¿cuántas horas y cuántos minutos se 
	//tardará en revisar todas las evaluaciones?
	let cantidadA, cantidadB, cantidadC 
	let tiempoA, tiempoB, tiempoC
	let tiempo_total 
	let horas, minutos
	cantidadA=leer ("digite la cantidad de cuestionarios A:")
	cantidadB=leer ("digite la cantidad de cuestionario b:")
	cantidadC=leer ("digite la cnatidad de cuestionario C:")
	
	// calcularf los minutos que se tardara por cada cuestionario
	tiempoA=cantidadA*5;
	tiempoB=cantidadB*8;
	tiempoC=cantidadC*6;
	//calculamos el tiempo total que le toma revisar todos los cuestionarios
	tiempo_total<- tiempoA + tiempoB + tiempoC;
	// calculamos las horas y minutos
	horas= Math.trunc(tiempo_total/60)
	minutos= tiempo_total%60
	
	console.log ("se tardara ",horas, " horas y ",minutos," minutos")
}

//
ejercicio11();{
	// ejrcicio5 : una tienda ofrece un descuento del 15 MOD  sobre el total de la compra y un cliente desea 
	// saber cuánto deberá pagar finalmente por su comprar.
	let precio,descuento,precio_final
	precio=leer ("digite el precio a pagar:")
	descuento = precio * 0.15;
	precio_final <- precio - descuento;
	console.log ("el precio a pagar es de:") ,precio_final
}

//
ejercicio12();{
	// un alumno desea saber cuál será su calificacion final en la materia de algoritmos.
	// dicha calificacion se compone de los siguientes porcentajes:
	// 55 MOD  del promedio de sus tres calificaciones parciales.
	// 30 MOD  de la calificación del examen.
	// 15 MOD  de la calificacion de un trabajo final.
	let parcial1,parcial2,parcial3, promedioP, notasparcial 
	let examen_final, notaexamen 
	let notatrabajo, notafinaltrabajo 
	let notafinal 
	parcial1,parcial2,parcial3=leer ('digite las 3 notas de los parciales:')
	promedioP=(parcial1+parcial2+parcial3)/3
	notasparcial=promedioP* 0.55;
	examen_final=leer ("digite la nota del examen final:")
	notaexamen=examen_final*0.3;
	notatrabajo=leer ("digite la nota del trabajo final:")
	notafinaltrabajo = notatrabajo * 0.15
	notafinal = notasparcial+notaexamen+notafinaltrabajo
	console.log ("la calificacion final es:"), notafinal
}

//
ejercicio13();{
// ingrese un número entero y reportar si es par o impar.
let  num

num=leer ("digite un num:")
if(num % 2 == 0){
leer ("el numero ", num, " es par")
}
else{ 
	leer ("el numero ", num, " es,impar")
}
}

//
ejercicio14();{

	// ejercicio2: determinar si un alumno aprueba o reprueba un curso, 
	// sabiendo que aprobará si su promedio de tres calificaciones
	// es mayor o igual a 70; reprueba caso contrario.
	let nota1, nota2, nota3 
	let promedio 
	nota1,nota2,nota3= leer ("digite las 3 calificaciones:")
	promedio=(nota1+nota2+nota3)/3
	
	if (promedio>=70){
		leer ("el alumno esta aprobado"),promedio
	}
	else{
		leer ("el alumno esta desaprobado:"), promedio
	}

}

//
ejercicio15();{
	// ejercicio3: en un almacen se hace un 20 MOD  descuento a los clientes cuya compra supere 
	// los $100.¿cuál sera la cantidad que pagará una persona por su comprar?
	let compra 
	let descuento, precio_final 
	compra=leer ("digite la cantidad a pagar:")

	if (compra>100){
		descuento = compra *0.2;
	}
	else{
		descuento <- 0;
	}
	precio_final = compra - descuento;
	console.log ("el precio a pagar es:"),precio_final
}

//
ejercicio16();{
//ejercicio4: leer 2 nu´meros. si son iguales que los multiplique, si el 
	//primero es mayor que el segundo que los reste y si no que los sume.
	let num1, num2, resultado 
	num1,num2=leer ("digite 2 numeros:")

	if (num1 = num2){
		//si son iguales los multiplicamos
		resultado = num1 * num2
	}
	else{
		if (num1 > num2) {
			// si el primer numero es mayor los restamos
			resultado = num1- num2;
		}
	else{
		resultado<- num1 + num2;
	}
	}
	console.log ("el resultado es: "),resultado
}
	
ejercicio17();{

	// ejercicio5: leer tres números diferentes e imprimir el número mayor de los tres.
	let num1, num2, num3 
	num1,num2,num3=leer ("digite 3 num:")
	
	if (num1>num2 && num1>num3){
		leer= ("el mayor es: "),num1
	}
	else{
		if (num2>num1 && num2> num3){ 
			leer= ("el mayor es :"), num2
		}
		else{
		 leer= ("el mayor es:"),num3
		}
			
	}
		
}

//

ejercicio18();{
	let preciok, kilos, precioI 
	let descuento,precio_final 
	preciok=leer("cuanto cuesta el kilo de manzanas")
	kilos=leer ("cuantos kilos de manzana a comprado")
	precioI = preciok * kilos
	if (kilos>=0 && kilos<=2){
		descuento = 0;
	}
	else{
		if (kilos>=2.01 && kilos<=5){
			descuento = precioI * 0.1
		}
		else{
			if (kilos>=5.01 && kilos<=10){
				descuento = precioI * 0.15
			}
			else{
				descuento = precioI * 0.2
			}
			}
	}
	precio_final = precioI-descuento
	console.log("el precio a pagar es: $ "),precio_final
}

//
ejercicio19();{

	//ejercicio7: elaborar un programa que me muestre los diás de las semanas 
	//cuando ingrese los siete primeros números.
	let num 
	num=leer ("digite un numero de (1-7):")
	switch (num){ 
		case 1: 
		console,log  ("lunes")
		break
		case 2: 
		console.log ("martes")
		break
		case 3:  
		console.log  ("miercoles")
		break
		case 4: 
		console.log ("jueves")
		break
		case 5: 
		console.log ("viernes")
		break
		case 6: 
		console,log ("sabado")
		break
		case 7: 
		console.log ("domingo")
		default:
			console.log("error, no existe dia para ese número")
		}
}

// 
ejercicio20();{
	// ejercicio8: elaborar un programa que me muestre el significado de aniversario
	// de cada década hasta los 60.
	let decada
	decada=leer ("digite una decada")
	switch (decada){
		case 10:
		    console.log ("bodas de hojalatas")
			break
		case 20:
			console.log ("bodas de porcelana")
			break
		case 30:
			console.log ("bodas de perlas")
		case 40:
			console.log ("bodas de rubí")
		case 50:
			console.log ("bodas de oro")
		case 60:
			console.log ("bodas de diamante")
		default:
			console,log ("decada no existente")
		}

}

//
ejercicio21();{
// hacer un programa que tenga un menú con las siguientes opiciones:
	// opción1: elevar un numero a una potencia x
	// opción2: sacar la raiz cuadrada de un número
	// opción3: salir
	let opcion 
	console.log ("menu")
	console.log ("1. elevar un numero a una potencia x")
	console.log ("2. sacar la raiz cuadrada de un numero")
	console.log ("3. salir")
	console.log ("digite una opcion:")
    opcion=leer
	switch (opcion){
		case 1:
			let num,pot,resultado 
			num=leer ("digite un numero")
			pot=leer ("digite la potencia")
			resultado = Math.pow(num,pot)
			console.log("el resultado es:"),resultado
		case 2:
			let (num,resultado)			
			num=leer("digite un numero")
			resultado <- rc(num);
			console.log ("el resultadoes:"),resultado
		case 3:
		default:
			console.log ("se equivoco de opcion de menu")
		}
	
}

//
ejercicio22();{
	let i 
	for (i=1;i<=10;i++){
		console.log (i)
	}
	}
//
ejercicio23();{
	let i 
	i = 1;
	while (i<= 10) 
		console.log (i)
		i=i+1
	}
//
ejercicio24();{
	let i 
	i = 1;
	do{
	console.log (i) 
		i = i + 1
	}
	while (i>=10)
}
//
ejercicio25();{
//ejercicio 1 : calcualar la suma de los "N" pirmeros números.
let n, suma, i 
num=leer ("digite la cantidad de numeros a sumarse:")
suma = 0;

for (i=1;i<=n;i++){
	suma = suma + i
}

console.log ("la suma es:"),suma
}

//
ejercicio26();{
// se desea calcular independiente la suma de los números pares e impares
	// comprendidos entre 1 y 50
	let suma_pares, suma_impares, i 
	suma_pares = 0
	suma_impares = 0
	for (i=2;i<=49;i++){ 
		if (i%2 == 0){
			suma_pares=suma_pares+i
		}
		else{
			suma_impares=suma_impares+i 
		}
		}		
	console.log ("la suma de pares es;"), suma_pares
	console.log ("la suma de impares es:"), suma_impares

}

//
ejercicio27();{
// ejercicio 3: leer 10 números e imprimir cuantos son positivos,
	// cuantos negativos y cuantos neutros.
	let num, i 
	let conteo_positivos, conteo_negativos, conteo_neutros 
	conteo_positivos = 0
	conteo_negativos = 0
	conteo_neutros = 0
	for (i=1;i<=10;i++){		
	    num=leer (i,"digite un numero:")
		if (num=0){
			conteo_neutros = conteo_neutros +1
		}
		else{
			if(num>0){
				conteo_positivos = conteo_positivos+1
			}
			else{
				conteo_negativos = conteo_negativos + 1
			}
		}
	}
	console.log ("la cantidad de positivos es:") ,conteo_positivos
	console.log ("la cantidad de negativos es:"),conteo_negativos
	console.log("la cantidad de neutros es:"),conteo_neutros
}

//
ejercicio28();{
// suponga que se tiene un conjunto de calificaciones de un grupo de 10 alunmo.
	//realizar un algoritmo para calcular la calificacion mas baja de todo el grupo.
	let calificacion_promedio, calificacion_baja
	let calificacion, suma 
	let i 
	suma = 0 
	calificacion_baja = 9999
	
	for (i=1;i<=10;i++){
		calificacion=leer (i, "digite una calificacion:")
		// suma iterativa de las calificacion
		suma=suma + calificacion
		//calculamos la menor calificacion
		if (calificacion < calificacion_baja){
			calificacion_baja=calificacion
		}
		}
	
	calificacion_promedio = suma/10
	console.log ("la calificacion promedio es: "), calificacion_promedio
	console.log ("la calificacion mas baja es: "), calificacion_baja
}


//
ejercicio29();{
	// calcular el factorial de un número mayor o igual a 0.
	let num 
	let i, factorial
	do {
		num=leer ("digite un numero:")
	}
	while (num>=0)
	i = 1
	factorial = 1
	while (i<=num) {
		factorial = factorial *i
		i=i +1
	}

	console.log("el factorial es:"),factorial
}

//
ejercicio30();{
// calcular la siguiente sumatoria de los "N"elementos:
	// s= 1+4+9....
	let n_elementos 
	let i, suma 
	n_elementos=leer ("digite la cantidad de elementos a sumarse:")
	i = 1
	suma = 0
	while (i<=n_elementos) {
		suma = suma+Math.pow(i,2)
		i = i +1
	}
	console.log ("la suma es:"), suma 
}

//
ejercicio31();{
// ingresar "N" enteros, visualizar la suma de los números pares de la lista,
	//cuantos números pares existen y cuál es el promedio de los números impares.
	let n_elementos, i, num 
	let suma_pares, conteo_pares 
	let suma_impares, conteo_impares 
    let promedio_impares 
	
	n_elementos=leer ("digite la cantidad de elementos a ingresar:")
	
	i = 1
	suma_pares = 0
	conteo_pares = 0
	
	suma_impares = 0
	conteo_impares = 0
	while (i <= n_elementos){
		num=leer (i,". digite un numero")
		
		if (num % 2 == 0){
			// el mun es par 
			//suma iterativa de pares
			suma_pares = suma_pares+ num
			// conteo de pares
			conteo_pares = conteo_pares + 1
		}
		else{
			// el mum es impar 
			// suma interativa de impares
			suma_impares = suma_impares + num
			// conteo de impares
			conteo_impares = conteo_impares + 1
		}
	
		i = i + 1
	}
	
	if (conteo_pares = 0){ 
		console.log ("no se han digitado numeros pares")}
	else{
		console.log (" la suma de los numeros pares es:"), suma_pares
		console.log ("el conteo de los numeros pares es:"), conteo_pares
	}
	if (conteo_impares = 0){
		console.log ("no se han digitado num impares ")}
	else{
		promedio_impares = suma_impares/ conteo_impares
		console.log ("el promedio de impares es :"), promedio_impares
	 }
}

const Secunciales = new secunciales()
Secunciales.ejercicio1()
Secunciales.ejercicio2()
Secunciales.ejercicio3()
Secunciales.ejercicio4()
Secunciales.ejercicio5()
Secunciales.ejercicio6()
Secunciales.ejercicio7()
Secunciales.ejercicio8()
Secunciales.ejercicio9()
Secunciales.ejercicio10()
Secunciales.ejercicio11()
Secunciales.ejercicio12()
Secunciales.ejercicio13()
Secunciales.ejercicio14()
Secunciales.ejercicio15()
Secunciales.ejercicio16()
Secunciales.ejercicio17()
Secunciales.ejercicio18()
Secunciales.ejercicio19()
Secunciales.ejercicio20()
Secunciales.ejercicio21()
Secunciales.ejercicio22()
Secunciales.ejercicio23()
Secunciales.ejercicio24()
Secunciales.ejercicio25()
Secunciales.ejercicio26()
Secunciales.ejercicio27()
Secunciales.ejercicio28()
Secunciales.ejercicio29()
Secunciales.ejercicio30()
Secunciales.ejercicio31()