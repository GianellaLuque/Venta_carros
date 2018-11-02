//document.getElementById('Button').addEventListener('click', guardarVehiculos);

var listaVehiculos = [];
function registrarCar(Ncolor,Nplaca,Ntipo,NaFabricacion,Ncilindraje,Npotencia){
		 
		 var vehiculo = {
		 	color1 : Ncolor,
		 	placa :  Nplaca,
		 	tipo : Ntipo,
		 	AFabricacion : NaFabricacion,
		 	cilindraje : Ncilindraje,
		 	potencia : Npotencia
		 };
		 console.log(vehiculo);
		 listaVehiculos.push(vehiculo);
		 localStoragelistaVehiculo(listaVehiculos);
};
function guardarVehiculos(){
	var tipo = document.getElementById('tipo');
	var col = document.getElementById('color').value;
	var placa = document.getElementById('placa').value;
	var stipo = tipo.options[tipo.selectedIndex].innerHTML;
	var fabri = document.getElementById('AFabricacion').value;
	var cili = document.getElementById('cilindraje').value;
	var potencia = document.getElementById('potencia').value;

	registrarCar(col,placa,stipo,fabri,cili,potencia);
	Llenartabla();
};
function Llenartabla() {
	var lista = getlistaVehiculos();
	tbody = document.getElementById('tbody');
	tbody.innerHTML = ' ';
	for (var i = 0; i < lista.length; i++) {
		var fila = tbody.insertRow(i);
		var columnaColor = fila.insertCell(0);
		var columnaPlaca = fila.insertCell(1);
		var columnaTipo = fila.insertCell(2);
		var columnaFabri = fila.insertCell(3);
		var columnaCili = fila.insertCell(4);
		var columnaPotencia = fila.insertCell(5); 
		columnaColor.innerHTML = lista[i].color1;
		columnaPlaca.innerHTML = lista[i].placa;
		columnaTipo.innerHTML = lista[i].tipo;
		columnaFabri.innerHTML = lista[i].AFabricacion;
		columnaCili.innerHTML = lista[i].cilindraje;
		columnaPotencia.innerHTML = lista[i].potencia;
		tbody.appendChild(fila);
	}
};
function getlistaVehiculos(){
	var storedlista = localStorage.getItem('localvehiculo');
	if(storedlista == null){
		listaVehiculos = [];
	}else{
		listaVehiculos = JSON.parse(storedlista);
	}
	return(listaVehiculos);
};
function localStoragelistaVehiculo(vlista){
	localStorage.setItem('localvehiculo',JSON.stringify(vlista));
};



