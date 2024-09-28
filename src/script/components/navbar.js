class NavbarComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Inicio</title>
            <link rel="stylesheet" href="/src/css/navbar.css">
        </head>
        <body>
            <nav class="navbar">
                <div class="hamburguer">☰</div>
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="/index.html" class="nav-link">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">organización </a>
                        <ul class="dropdown">
                            <li class="dropdown-item">
                                <a href="/src/pages/organizacion-mision.html" class="dropdown-link">Misión</a>
                            </li>
                            <li class="dropdown-item">
                                <a href="/src/pages/organizacion-organigrama.html" class="dropdown-link">Organigrama</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="/src/pages/pc-puma.html" class="nav-link">PC puma</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Programa de Becarios</a>
                        <ul class="dropdown">
                            <li class="dropdown-item">
                                <a href="/src/pages/becarios-registro.html" class="dropdown-link">Registro</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Cursos</a>
                        <ul class="dropdown">
                            <li class="dropdown-item">
                                <a href="/src/pages/cursos-calendario.html" class="dropdown-link">Calendario</a>
                            </li>
                            <li class="dropdown-item">
                                <a href="/src/pages/cursos-temario.html" class="dropdown-link">Temario</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Plataformas Educativas</a>
                        <ul class="dropdown">
                            <li class="dropdown-item">
                                <a href="/src/pages/plataformas-educafi.html" class="dropdown-link">EDUCAFI</a>
                            </li>
                            <li class="dropdown-item">
                                <a href="/src/pages/plataformas-google-suite.htm" class="dropdown-link">Google Suite</a>
                            </li>
                            <li class="dropdown-item"></li>
                                <a href="/src/pages/plataformas-office-365.html" class="dropdown-link">Office 365</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        <body>
        `;
    }
}

// Definir el nuevo elemento
customElements.define('navbar-component', NavbarComponent);