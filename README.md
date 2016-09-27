# Ejercicio-trello

**Versión 0.0.1**

  Un elemento en el HTML con el mensaje "Añadir una lista", que al dar click muestre un input y un botón (formulario) para que el usuario ingrese el nombre de la lista.

![Sin titulo](http://i64.tinypic.com/2954zs1.png) ![Sin titulo](http://i66.tinypic.com/20f4uir.png) 

* solución:

 - En nuestro **index.html** creamos un div contenedor y dentro de este, un input que contendra el mensaje "Añadir una lista".
 - Despues creamos un form con un input y un boton (el formulario que menciona el enunciado) en donde el usuario ingresara el nombre de la lista.
 - En el **main.css** nos encargamos de darle forma para que se parezca lo más posible a Trello.
 - En nuestro **main.js**  creamos el evento que al terminar de cargar la página pase a ejecutar lo que esta dentro de la función:
 
            window.addEventListener("load", function() {
          	var notaUno = document.getElementById("nota-inicial");
          	var notaDos = document.getElementById("nota");
          	var boton = document.getElementById("boton");
          	var fondo = document.getElementById("fondo");
          
          	notaUno.addEventListener("click", function(e){
          		mostrarInput(notaDos);
          	});
          
          	function mostrarInput(notaDos){
          		notaUno.style.display = "none";
          		notaDos.style.display = "block";
          		boton.style.display =  "block";
          		fondo.style.display = "block";
          	}
          });

 - Con lo cual obtenemos que al dar click al primer input("añadir lista") se muestre el formulario en donde el usuario podra escribir el nombre de su lista; para ello como se muestra lineas arriba hacemos uso de la propiedad **display**que nos permite ocultar y mostrar elementos.
