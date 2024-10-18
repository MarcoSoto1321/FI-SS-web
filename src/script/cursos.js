const courses = [
            {
                id: 1,
                title: "Introducción a la Programación",
                description: "Aprende los fundamentos de la programación con Python.",
                duration: "8 semanas",
                url: "#"
            },
            {
                id: 2,
                title: "Desarrollo Web Frontend",
                description: "Domina HTML, CSS y JavaScript para crear sitios web interactivos.",
                duration: "10 semanas",
                url: "#"
            },
            {
                id: 3,
                title: "Ciencia de Datos",
                description: "Explora el análisis de datos y el aprendizaje automático.",
                duration: "12 semanas",
                url: "#"
            },
            {
                id: 4,
                title: "Diseño UX/UI",
                description: "Aprende a crear interfaces de usuario atractivas y funcionales.",
                duration: "6 semanas",
                url: "#"
            },
            {
                id: 5,
                title: "Diseño UX/UI",
                description: "Aprende a crear interfaces de usuario atractivas y funcionales.",
                duration: "6 semanas",
                url: "#"
            },
            {
                id: 5,
                title: "Diseño UX/UI",
                description: "Aprende a crear interfaces de usuario atractivas y funcionales.",
                duration: "6 semanas",
                url: "#"
            }
        ];
        
        function createCourseCard(course) {
            return `
                <div class="course-card">
                    <div class="card-header">
                        <h3 class="card-title">${course.title}</h3>
                        <p class="card-duration">${course.duration}</p>
                    </div>
                    <div class="card-content">
                        <p class="card-description">${course.description}</p>
                    </div>
                    <div class="card-footer">
                        <a href="${course.url}" class="btn" target="_blank" rel="noopener noreferrer">Más información</a>
                    </div>
                </div>
            `;
        }
        
        function renderCourses() {
            const courseList = document.getElementById('courseList');
            courseList.innerHTML = courses.map(createCourseCard).join('');
        }
        
        document.addEventListener('DOMContentLoaded', renderCourses);