/* Función para validar FORMULARIO */

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var edad = document.getElementById("edad").value;
    var sexo = document.querySelector('input[name="sexo"]:checked');
    var terminos = document.getElementById("terminos");

    // Validar que se hayan ingresado todos los datos
    if (nombre == "" || apellido == "" || correo == "" || edad == "" || sexo == null || !terminos.checked) {
        alert("Por favor, complete todos los campos antes de enviar el formulario.");
        return false;
    }

    // Validar que la edad sea un número entero positivo
    if (edad < 1 || edad % 1 !== 0) {
        alert("Por favor, ingrese una edad válida.");
        return false;
    }

    // Mostrar mensaje de confirmación
    alert("¡Gracias por registrarte! Tus datos han sido enviados.");

    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("masculino").checked = false;
    document.getElementById("femenino").checked = false;
    document.getElementById("terminos").checked = false;

    return false;
}

$(function(){

    /* Evento de toogle en ESTUDIOS */

    $("#btn-toogle").click(function(){
        $("#texto").toggle(200);
    });

    $("#btn-toogle1").click(function(){
        $("#texto1").toggle(200);
    });

    $("#btn-toogle2").click(function(){
        $("#texto2").toggle(200);
    });

    /* Evento de más detalles en EXPERIENCÍA */

    $("#masdetalles").hide();
    $("#verdetalles").mouseenter(function(){
        $("#masdetalles").slideDown();
    });

    $("#verdetalles").mouseleave(function(){
        $("#masdetalles").slideUp();
    });

    $("#masdetalles1").hide();
    $("#verdetalles1").mouseenter(function(){
        $("#masdetalles1").slideDown();
    });

    $("#verdetalles1").mouseleave(function(){
        $("#masdetalles1").slideUp();
    });

    $("#masdetalles2").hide();
    $("#verdetalles2").mouseenter(function(){
        $("#masdetalles2").slideDown();
    });

    $("#verdetalles2").mouseleave(function(){
        $("#masdetalles2").slideUp();
    });

    $("#masdetalles3").hide();
    $("#verdetalles3").mouseenter(function(){
        $("#masdetalles3").slideDown();
    });

    $("#verdetalles3").mouseleave(function(){
        $("#masdetalles3").slideUp();
    });

    /* Script para activar y detener MÚSICA*/

    const botonMusica = document.getElementById("boton-musica");
        const audio = document.getElementById("audio");
        let reproduciendo = false;
        botonMusica.addEventListener("click", () => {
          if (reproduciendo) {
            audio.pause();
            reproduciendo = false;
            botonMusica.textContent = "Música";
          } else {
            audio.play();
            reproduciendo = true;
            botonMusica.textContent = "Detener música";
          }
    });

    /* Efecto degradado constante para TODA la WEB */

    window.addEventListener("scroll", function() {
        var scrollTop = window.pageYOffset;
        var newColor = calculateNewColor(scrollTop);
        document.body.style.background = newColor;
    });
    function calculateNewColor(scrollTop) {
    return "linear-gradient(to bottom, #" + r + g + b + ", #ffffff)";
    }
});

/* Función de COMENTARIOS de la página */

function enviarMensaje(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
    alert("Gracias por su mensaje. Hemos recibido sus comentarios.");
    document.getElementById("formulario-contacto").reset();
}

/* Animación para IMÁGENES */

$(document).ready(function() {
    $('#carpinteria, #compu, #soldadura, #electricidad').hover(function() {
      $(this).animate({width: '+=15px', height: '+=15px'}, 'fast');
    }, function() {
      $(this).animate({width: '-=15px', height: '-=15px'}, 'fast');
    });
});

$(document).ready(function() {
    $('#series, #futbol, #videojuegos, #musicaa').hover(function() {
      $(this).animate({width: '+=15px', height: '+=15px'}, 'fast');
    }, function() {
      $(this).animate({width: '-=15px', height: '-=15px'}, 'fast');
    });
});