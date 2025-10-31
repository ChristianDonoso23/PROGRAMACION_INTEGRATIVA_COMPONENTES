export class DespedidaPorClase extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow. innerHTML = `<h1>ADIOS MUNDO CRUEL</h1>`;
    }
}

customElements.define("despedida-por-clase", DespedidaPorClase);