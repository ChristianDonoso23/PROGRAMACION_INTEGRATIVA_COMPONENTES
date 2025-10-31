export class SaludoPorClase extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow. innerHTML = `<h1>HOLA MUNDO</h1>`;
    }
}

customElements.define("saludo-por-clase", SaludoPorClase);