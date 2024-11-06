// Función para actualizar el texto del label y el estilo cuando se selecciona un archivo
function handleFileSelect(inputElement, labelElement) {
    inputElement.addEventListener('change', function() {
        if (inputElement.files.length > 0) {
            labelElement.textContent = inputElement.files[0].name;  // Muestra el nombre del archivo seleccionado
            labelElement.classList.add('file-selected');  // Añade una clase para cambiar el estilo
        } else {
            labelElement.textContent = 'Subir archivo';  // Vuelve a mostrar el texto original si no hay archivo
            labelElement.classList.remove('file-selected');
        }
    });
}

// Obtener referencia al formulario
const form = document.getElementById('registro-form');

// Función para guardar los datos en localStorage
function saveFormData() {
    const formData = new FormData(form);
    const data = {};

    for (let [key, value] of formData.entries()) {
        // No almacenamos los archivos en localStorage
        if (key !== 'foto' && key !== 'historial') {
            data[key] = value;
        }
    }

    localStorage.setItem('formData', JSON.stringify(data));
}

// Función para cargar los datos desde localStorage
function loadFormData() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
        const data = JSON.parse(savedData);
        for (let key in data) {
            if (form.elements[key]) {
                form.elements[key].value = data[key];
            }
        }
    }
}

// Evento para guardar datos cuando el usuario cambia un campo
form.addEventListener('input', saveFormData);

// Cargar los datos cuando la página se carga
window.addEventListener('load', loadFormData);
