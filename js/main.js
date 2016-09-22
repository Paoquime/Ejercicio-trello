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