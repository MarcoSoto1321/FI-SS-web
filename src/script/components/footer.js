class FooterComponent extends HTMLElement {
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
            <link rel="stylesheet" href="../css/footer.css">
        </head>
        <body>
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-section">
                        <h2 class="footer-title">Facultad de <span>Ingeniería</span></h2>
                        <button class="contact-button">Contacto</button>
                        <a class="privacy-notice">Aviso de Privacidad</a>
                    </div>
                    <div class="footer-section">
                        <h3>Universidad Nacional Autónoma de México</h3>
                        <p>Facultad de Ingeniería, Av. Universidad 3000,</p>
                        <p>Ciudad Universitaria, Coyoacán, Cd. Mx., CP 04510</p>
                        <p>Teléfono: </p>
                        <p>eMail: </p>
                        <div class="social-icons">
                            <a href="#">F</a>
                            <a href="#">T</a>
                            <a href="#">I</a>
                            <a href="#">Y</a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-content">
                        <p class="small-text" >Todos los derechos reservados © 1999 - 2024 / Facultad de Ingeniería / UNAM /</p>
                        <p class="small-text">Esta es la página electrónica institucional de la Facultad de Ingeniería de la UNAM. Puede ser reproducida con fines no lucrativos, siempre y cuando no se mutile, se cite la fuente completa y su dirección electrónica. Contiene enlaces con diversos portales de entidades y organizaciones académicas, estudiantiles y profesionales, así como con páginas personales de profesores e investigadores cuyos contenidos son de la responsabilidad exclusiva de sus titulares.</p>
                        <p class="small-text">Última actualización 15-09-2024</p>
                    </div>
                </div>
            </footer>
        <body>
        `;
    }
}

// Definir el nuevo elemento
customElements.define('footer-component', FooterComponent);