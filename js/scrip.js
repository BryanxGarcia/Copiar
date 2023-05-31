
let Lista = [];
let text;

function guardarTarea() { 
    text ="";
    let dato = document.getElementById("nombre").value;
 
     Lista.push(dato);
  
    document.getElementById("nombre").value = "";
    mostrarTareas();
}


function mostrarTareas(){

for (var i = 0; i < Lista.length; i++) {

     text += '<li>'+Lista[i] +'</li>';

document.getElementById("listar-tarea").innerHTML = text; 

}

}