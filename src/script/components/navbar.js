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
            <link rel="stylesheet" href="../css/navbar.css">
        </head>
        <body>
            <nav class="navbar">
                <div class="logo-container">
                    <a href="https://www.unam.mx/"><img src="../images/Encabezado/UNAM.png" alt="Escudo 1"></img></a>
                    <a href="https://www.ingenieria.unam.mx/"><img src="../images/Encabezado/FI2.png" alt="Escudo 2"></img></a>
                    <img src="../images/Encabezado/logo_die2.png" alt="Escudo 1"></img>
                </div>
                <input type="checkbox" id="toggle" class="toggle">
                <label for="toggle" class="hamburguer">☰</label>
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="../../index.html" class="nav-link">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Organización </a>
                        <ul class="dropdown">
                            <li class="dropdown-item">
                                <a href="../pages/organizacion-mision.html" class="dropdown-link">Misión</a>
                            </li>
                            <li class="dropdown-item">
                                <a href="../pages/organizacion-organigrama.html" class="dropdown-link">Organigrama</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="https://pcpuma.unam.mx/" target="_blank" class="nav-link">PC puma</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Programa de Becarios</a>
                        <ul class="dropdown">
                            <li class="dropdown-item">
                                <a href="../pages/becarios-registro.html" class="dropdown-link">Registro</a>
                            </li>
                            <li class="dropdown-item">
                                <a href="../pages/becarios-convocatoria.html" class="dropdown-link">Convocatoria</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Cursos</a>
                        <ul class="dropdown">
                            <li class="dropdown-item">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScGRw5pPQwgY2e4MKzFQkw8zuiy6osJ7G3xvRHI1bYKB1sKNQ/viewform" class="dropdown-link">Registro</a>
                            </li>
                            <li class="dropdown-item">
                                <a href="../pages/cursos-temario.html" class="dropdown-link">Temario</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Plataformas Educativas</a>
                        <ul class="dropdown">
                            <li class="dropdown-item">
                                <a href="../pages/plataformas-educafi.html" class="dropdown-link">EDUCAFI</a>
                            </li>
                            <li class="dropdown-item">
                                <a href="../pages/plataformas-google-suite.html" class="dropdown-link">Google Suite</a>
                            </li>
                            <li class="dropdown-item"></li>
                                <a href="../pages/plataformas-office-365.html" class="dropdown-link">Office 365</a>
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
