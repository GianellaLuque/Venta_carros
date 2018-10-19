function vehiculo() {
	this.color1 = "";
	this.placa = "";
	this.tipo = "";
	this.AFabricacion = "";
	this.cilindraje = 0;
	this.potencia = 0;
	
	this.obtenerPlaca = function () {
		return this.placa;
	}
	this.cambiarCar = function (Ncolor,Nplaca,Ntipo,NaFabricacion,Ncilindraje,Npotencia){
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
}
function registrar() {
	var tipo = document.getElementById('tipo');
	var col = document.getElementById('color').value
	var placa = document.getElementById('placa').value
	var tipo = tipo.options[tipo.selectedIndex].value;
	var fabri = document.getElementById('AFabricacion').value
	var cili = document.getElementById('cilindraje').value
	var potencia = document.getElementById('potencia').value
    
	Vehiculo1.cambiarCar(col,placa,tipo,fabri,cili,potencia);
	console.log(Vehiculo1);
}

function start(){
      document.getElementById("tipo").addEventListener("change", addActivityItem, false);
}
function addActivityItem(){
      var tipo = document.getElementById('tipo');
      var tipoT = tipo.options[tipo.selectedIndex].value;
      console.log(tipoT);	 
}

//window.addEventListener("load", start, false);
function tabla() {
	var tipo = document.getElementById('tipo');
	var col = document.getElementById('color').value
	var placa = document.getElementById('placa').value
	var tipo = tipo.options[tipo.selectedIndex].value;
	var fabri = document.getElementById('AFabricacion').value
	var cili = document.getElementById('cilindraje').value
	var potencia = document.getElementById('potencia').value
    
	//Vehiculo1.cambiarCar(col,placa,tipo,fabri,cili,potencia);
	//console.log(Vehiculo1);
	var fila="<tr><td>"+col+"</td><td>"+placa+"</td><td>"+tipo+"</td><td>"+fabri+"</td><td>"+cili+"</td><td>"+potencia+"</td></tr>";
	document.getElementById("tablita").innerHTML = fila;
}

var Vehiculo1 = new vehiculo();
