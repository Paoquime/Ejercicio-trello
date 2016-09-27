window.addEventListener("load", function() {
	var inicial = document.getElementById("inicial");
	var notaDos = document.getElementById("nota");
	var boton = document.getElementById("boton");
	var fondo = document.getElementById("fondo");
	

	inicial.addEventListener("click", function(){
		mostrarInput();

		inicial.style.display = "none";

    });


	boton.addEventListener("click", function(e) {
		e.preventDefault();
		agregarTitulo(notaDos, this);
		fondo.style.display = "none";
	});


	function mostrarInput(){
		fondo.style.display ="block";
	}

	function agregarTitulo(notaDos, inicial){
		var div = document.createElement("div");
		var btn = document.createElement("button");

		div.classList.add("tituloList");
		btn.classList.add("agregarTar");


		div.innerHTML = notaDos.value;
		btn.textContent = "Añadir una tarjeta...";

		var insertar = inicial.parentElement.parentElement;
		insertar.insertBefore(btn, insertar.childNodes[0]);
		insertar.insertBefore(div, insertar.childNodes[0]);
		notaDos.value="";
	}

});


