<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Directorio donde se guardarán los archivos subidos
    $uploadDir = 'uploads/';

    // Crear el directorio si no existe
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    // Manejo de la foto
    if (isset($_FILES['foto']) && $_FILES['foto']['error'] == UPLOAD_ERR_OK) {
        $fotoTmpPath = $_FILES['foto']['tmp_name'];
        $fotoName = basename($_FILES['foto']['name']);
        $fotoPath = $uploadDir . time() . '-' . $fotoName;

        // Mover el archivo al directorio de destino
        move_uploaded_file($fotoTmpPath, $fotoPath);
    } else {
        $fotoPath = null;
    }

    // Manejo del historial académico
    if (isset($_FILES['historial']) && $_FILES['historial']['error'] == UPLOAD_ERR_OK) {
        $historialTmpPath = $_FILES['historial']['tmp_name'];
        $historialName = basename($_FILES['historial']['name']);
        $historialPath = $uploadDir . time() . '-' . $historialName;

        // Mover el archivo al directorio de destino
        move_uploaded_file($historialTmpPath, $historialPath);
    } else {
        $historialPath = null;
    }

    // Acceder y sanitizar los datos del formulario
    $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
    $apellidoPaterno = filter_var($_POST['apellido-paterno'], FILTER_SANITIZE_STRING);
    $apellidoMaterno = filter_var($_POST['apellido-materno'], FILTER_SANITIZE_STRING);
    $rfc = filter_var($_POST['rfc'], FILTER_SANITIZE_STRING);
    $telefono = filter_var($_POST['telefono'], FILTER_SANITIZE_STRING);
    $celular = filter_var($_POST['celular'], FILTER_SANITIZE_STRING);
    $correo = filter_var($_POST['correo'], FILTER_SANITIZE_EMAIL);
    $cuenta = filter_var($_POST['cuenta'], FILTER_SANITIZE_STRING);
    $carrera = filter_var($_POST['carrera'], FILTER_SANITIZE_STRING);
    $semestre = filter_var($_POST['semestre'], FILTER_SANITIZE_STRING);
    $promedio = filter_var($_POST['promedio'], FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);

    // Crear el registro
    $registro = array(
        'nombre' => $nombre,
        'apellidoPaterno' => $apellidoPaterno,
        'apellidoMaterno' => $apellidoMaterno,
        'rfc' => $rfc,
        'telefono' => $telefono,
        'celular' => $celular,
        'correo' => $correo,
        'cuenta' => $cuenta,
        'carrera' => $carrera,
        'semestre' => $semestre,
        'promedio' => $promedio,
        'fotoPath' => $fotoPath,
        'historialPath' => $historialPath,
        'createdAt' => date('Y-m-d H:i:s')
    );

    // Ruta al archivo donde se guardarán los registros
    $filePath = 'registros.json';

    // Leer registros existentes
    if (file_exists($filePath)) {
        $data = file_get_contents($filePath);
        $registros = json_decode($data, true);
    } else {
        $registros = array();
    }

    // Añadir el nuevo registro
    $registros[] = $registro;

    // Guardar los registros actualizados
    file_put_contents($filePath, json_encode($registros, JSON_PRETTY_PRINT));

    // Redirigir al usuario a una página de agradecimiento
    header('Location: /index.html');
    exit();
} else {
    // Redirigir al formulario si se accede directamente
    header('Location: /index.html');
    exit();
}
?>
