const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Middleware para parsear application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Configuración de Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Carpeta donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
        // Personaliza el nombre del archivo si lo deseas
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Configurar Multer para aceptar múltiples campos de archivo
const cpUpload = upload.fields([
    { name: 'foto', maxCount: 1 },
    { name: 'historial', maxCount: 1 }
]);

// Ruta para manejar el formulario
app.post('/register', cpUpload, (req, res) => {
    // Acceder a los datos del formulario
    const {
        nombre,
        'apellido-paterno': apellidoPaterno,
        'apellido-materno': apellidoMaterno,
        rfc,
        telefono,
        celular,
        correo,
        cuenta,
        carrera,
        semestre,
        promedio
    } = req.body;

    // Acceder a los archivos subidos
    const foto = req.files['foto'] ? req.files['foto'][0] : null;
    const historial = req.files['historial'] ? req.files['historial'][0] : null;

    // Crear el objeto de datos a guardar
    const registro = {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        rfc,
        telefono,
        celular,
        correo,
        cuenta,
        carrera,
        semestre,
        promedio,
        fotoPath: foto ? foto.path : null,
        historialPath: historial ? historial.path : null,
        createdAt: new Date()
    };

    // Leer el archivo existente o crear uno nuevo si no existe
    const filePath = path.join(__dirname, 'registros.json');
    let registros = [];

    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        registros = JSON.parse(data);
    }

    // Añadir el nuevo registro
    registros.push(registro);

    // Guardar de vuelta en el archivo
    fs.writeFileSync(filePath, JSON.stringify(registros, null, 2));

    // Enviar una respuesta al cliente
    res.send('Formulario recibido y datos guardados correctamente en el archivo.');
});

// Servir archivos estáticos (tu archivo HTML y otros recursos)
app.use(express.static(__dirname));

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
