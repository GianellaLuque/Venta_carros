//document.getElementById('ButtonCliente').addEventListener('click', guardarclientes);

var listaClientes = [];
function registrarCLiente(Nnombre,NDNI){
		 
		 var cliente = {
		 	nombre : Nnombre,
		 	dni :  NDNI
		 };
		 console.log(cliente);
		 listaClientes.push(cliente);
		 localStoragelistacliente(listaClientes);
};
function guardarclientes(){
	var nom = document.getElementById('nombre').value;
	var dni = document.getElementById('dni').value;
	
	registrarCLiente(nom,dni);
	LlenartablaC();
};
function LlenartablaC() {
	var lista = getlistaClientes();
	tbody = document.getElementById('tbodyCliente');
	tbody.innerHTML = ' ';
	for (var i = 0; i < lista.length; i++) {
		var fila = tbody.insertRow(i);
		var columnaNombre = fila.insertCell(0);
		var columnaDNI = fila.insertCell(1);
		
		columnaNombre.innerHTML = lista[i].nombre;
		columnaDNI.innerHTML = lista[i].dni;

		tbody.appendChild(fila);
	}
};
function getlistaClientes(){
	var storedlista = localStorage.getItem('localcliente');
	if(storedlista == null){
		listaClientes = [];
	}else{
		listaClientes = JSON.parse(storedlista);
	}
	return(listaClientes);
};
function localStoragelistacliente(vlista){
	localStorage.setItem('localcliente',JSON.stringify(vlista));
};