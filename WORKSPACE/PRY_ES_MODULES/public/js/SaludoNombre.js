export class SaludoNombre extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        var nombres = this.getAttribute("nombres");
        var apellidos = this.getAttribute("apellidos");
        shadow.innerHTML = `<h1>Hola ${nombres} ${apellidos}. Buenas noches</h1>`;
    }
}

customElements.define("saludo-nombre", SaludoNombre);