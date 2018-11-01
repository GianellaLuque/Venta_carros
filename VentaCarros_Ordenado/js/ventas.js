window.addEventListener("load",()=>{
	//
	var nombreCliente = document.getElementById("nombreCliente");
	var precioVenta = document.getElementById("precioVenta");
	var nroFactura = document.getElementById("nroFactura");
	var fechaVenta = document.getElementById("fechaVenta");
    var ventaBotonAceptar = document.getElementById("ventaAceptar");
    var tablaRegistroVentas = document.getElementById("TablaRegistroVentas");
    
    //Procedimientos
	ventaBotonAceptar.addEventListener("click",()=>{
		var fila = document.createElement("tr");
		var colNombreCliente = document.createElement("td");
		var colPrecioVenta = document.createElement("td");
		var colNroFactura = document.createElement("td");
		var colFechaVenta = document.createElement("td");

		colNombreCliente.innerHTML = nombreCliente.value;
		colPrecioVenta.innerHTML = precioVenta.value;
		colNroFactura.innerHTML = nroFactura.value;
		colFechaVenta.innerHTML = fechaVenta.value;

		fila.append(colNombreCliente);
		fila.append(colPrecioVenta);
		fila.append(colNroFactura);
        fila.append(colFechaVenta);
        tablaRegistroVentas.append(fila);

        console.log(Prueba);
	});
});