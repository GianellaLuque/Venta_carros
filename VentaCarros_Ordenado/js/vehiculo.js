function vehiculo() {
	this.color1 = "";
	this.placa = "";
	this.tipo = "";
	this.AFabricacion = "";
	this.cilindraje = 0;
	this.potencia = 0;

	this.obtenerPlaca = function () {
		return this.placa;
	};
	this.registrarCar = function (Ncolor,Nplaca,Ntipo,NaFabricacion,Ncilindraje,Npotencia){
		 this.color1 = Ncolor;
		 this.placa =  Nplaca;
		 this.tipo = Ntipo;
		 this.AFabricacion = NaFabricacion;
		 this.cilindraje = Ncilindraje;
		 this.potencia = Npotencia;
	};
	this.cambiarNombre = function (nuevoNombre){
		 this.placa = nuevoNombre;	
	};
};
function registrar() {

	var tabla = document.getElementById("tablita");
	var col = document.getElementById('color').value;
	var placa = document.getElementById('placa').value;
	var tipo = document.getElementById('tipo');
	var fabri = document.getElementById('AFabricacion').value;
	var cili = document.getElementById('cilindraje').value;
	var potencia = document.getElementById('potencia').value;

	Vehiculo1.registrarCar(col,placa,tipo,fabri,cili,potencia);

	var fila = document.createElement("tr");
	var columnaColor = document.createElement("td");
	var columnaPlaca = document.createElement("td");
	var columnaTipo = document.createElement("td");
	var columnaFabri = document.createElement("td");
	var columnaCili = document.createElement("td");
	var columnaPotencia = document.createElement("td");

	columnaColor.innerHTML = col;
	columnaPlaca.innerHTML = placa;
	columnaTipo.innerHTML = tipo.options[tipo.selectedIndex].innerHTML;
	columnaFabri.innerHTML = fabri;
	columnaCili.innerHTML = cili;
	columnaPotencia.innerHTML = potencia;

	fila.append(columnaColor);
	fila.append(columnaPlaca);
	fila.append(columnaTipo);
	fila.append(columnaFabri);
	fila.append(columnaCili);
	fila.append(columnaPotencia);
	tabla.append(fila);

	localStorage.setItem("auto", JSON.stringify(Vehiculo1));

	var autoJSON = JSON.parse(localStorage.getItem("auto"));

	console.log(autoJSON);
	//document.write(""+localStorage.getItem("auto")+"</br>");
};
var Vehiculo1 = new vehiculo();
var Prueba = "Hola";


