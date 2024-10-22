async function loadCourses() {
    const response = await fetch('../cursos.csv');
    const text = await response.text();
    const rows = text.split('\n').slice(1); // Ignorar la primera fila (cabecera)

    const courses = rows.map(row => {
        const columns = row.split(',');

        // Asegúrate de que la fila tiene el número correcto de columnas
        if (columns.length < 6) return null;

        const [id, title, description, duration, rutapdf, rutaimg] = columns.map(col => col.replace(/"/g, '').trim());

        return {
            id: parseInt(id, 10),
            title,
            description,
            duration,
            rutapdf: '../pdfs/cursos/' + rutapdf, // Asegúrate de que aquí está la ruta correcta
            rutaimg: '../images/cursos/' + rutaimg // Asegúrate de que aquí está la ruta correcta
        };
    }).filter(course => course && course.id); // Filtrar cursos con ID válido

    return courses;
}

function createCourseCard(course) {
    return `
        <div class="course-card">
            <div class="card-header" style="background-image: url('${course.rutaimg}');">
                <h3 class="card-title">${course.title}</h3>
                <p class="card-duration">${course.duration}</p>
            </div>
            <div class="card-content">
                <p class="card-description">${course.description}</p>
            </div>
            <div class="card-footer">
                <a href="${course.rutapdf}" class="btn" target="_blank" rel="noopener noreferrer">Más información</a>
            </div>
        </div>
    `;
}

async function renderCourses() {
    const courses = await loadCourses();
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = courses.map(createCourseCard).join('');
}

document.addEventListener('DOMContentLoaded', renderCourses);
