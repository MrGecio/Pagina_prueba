<?php
header('Content-Type: application/json');

$nombre = $_POST['nombre_empleado'] ?? '';
$puesto = $_POST['puesto_empleado'] ?? '';

if (!empty($nombre) && !empty($puesto)) {

    echo json_encode([
        "exito" => true,
        "mensaje" => "¡Empleado " . $nombre . " guardado correctamente!"
    ]);
} else {
    echo json_encode([
        "exito" => false,
        "mensaje" => "Faltan datos obligatorios."
    ]);
}
?>