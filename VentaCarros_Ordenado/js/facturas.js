function genera_tabla() {

    var body = document.getElementsByTagName("body")[0];
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
   
    for (var i = 0; i < 2; i++) {
      var hilera = document.createElement("tr");
      for (var j = 0; j < 2; j++) {
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
      tblBody.appendChild(hilera);
    }
   
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
  } 
  document.write(`<input type="button" value="Genera factura " onclick="genera_tabla()">`);