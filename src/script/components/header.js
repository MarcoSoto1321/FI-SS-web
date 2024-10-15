class HeaderComponent extends HTMLElement {
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
            <link rel="stylesheet" href="../css/header.css">
        </head>
        <body>
            <header>
                <div class="encabezado-escudos">
                    <div class="header-content">
                        <div class="izquierda">
                            <a href="https://www.unam.mx/"><img src="../images/Encabezado/UNAM.png" alt="Escudo 1" class="escudo"></img></a>
                            <a href="https://www.ingenieria.unam.mx/"><img src="../images/Encabezado/FI.png" alt="Escudo 2" class="escudo"></img></a>
                        </div>
                        <h1 class = "titulo-header">Transformación Digital</h1>
                        <div class="derecha">
                            <img src="../images/Encabezado/logo_die2.png" alt="Escudo 3" class="escudo"></img>
                        </div>
                    </div>
                </div>
            </header>
        <body>
        `;
    }
}

// Definir el nuevo elemento
customElements.define('header-component', HeaderComponent);