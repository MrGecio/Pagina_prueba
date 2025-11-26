
$(document).ready(function () {
    $("#miFormulario").submit(function (event) {

        event.preventDefault();

        var datosFormulario = $(this).serialize();

        $.ajax({
            url: "procesar.php",
            type: "POST",
            dataType: "json",
            data: datosFormulario,
            success: function (respuesta) {
                if (respuesta.exito) {
                    $("#mensaje").html("<p style='color: green;'><strong>" + respuesta.mensaje + "</strong></p>");
                    $("#miFormulario")[0].reset();
                } else {
                    $("#mensaje").html("<p style='color: red;'>" + respuesta.mensaje + "</p>");
                }
            },
            error: function () {
                $("#mensaje").html("<p style='color: red;'>Error en la comunicación con el servidor. No se pudo completar la petición AJAX.</p>");
            }
        });
    });
});