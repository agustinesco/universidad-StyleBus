$(document).ready(function() {
    
    /*
    vamos a ver el uso del LocalStorage para capturar un valor ingresado por el usuario en
    un formulario y darle un mensaje de bienvenida. 
    */
    var usuario = localStorage.getItem('nombre');
    
    var password = localStorage.getItem('pass');

    if ( usuario ===  "user" && password === "user" ) {
        //Notar los accesos al DOM, tomamos los elementos del DOM y les damos un comportamiento
        alert("login exitoso")
        
        $("#salir").show();

        $("#noLogueado").hide();

        $("#saludo").append("Bienvenido "+ usuario);

        $("#login").hide()
    }else{
        
        $("#salir").hide();
      
    }

    $("#salir").click( function() {
        localStorage.removeItem('nombre');
        localStorage.clear();
        location.reload();
    });




}); 

function saludar() {
    var nombre = $("#nombre").val();
    localStorage.setItem('nombre', nombre);
}

function mostrarLogin(){
    var form = document.getElementById("miFormulario");
    if (form.style.display === "none") {
        form.style.display = "block";
      } else {
        form.style.display = "none";
      }
}