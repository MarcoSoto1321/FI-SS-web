class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="encabezado-escudos">
                    <div class="header-content">
                        <div class="izquierda">
                            <a href="https://www.unam.mx/"><img src="/src/images/Encabezado/UNAM.png" alt="Escudo 1" class="escudo"></img></a>
                            <a href="https://www.ingenieria.unam.mx/"><img src="/src/images/Encabezado/FI.png" alt="Escudo 2" class="escudo"></img></a>
                        </div>
                        <div class="derecha">
                            <img src="/src/images/Encabezado/logo_die2.png" alt="Escudo 3" class="escudo"></img>
                        </div>
                    </div>
                </div>
            </header>
        `;
    }
}

// Definir el nuevo elemento
customElements.define('header-component', HeaderComponent);