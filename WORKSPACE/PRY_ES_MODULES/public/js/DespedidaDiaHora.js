export class DespedidaDiaHora extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        var dia = this.getAttribute("dia");
        var hora = this.getAttribute("hora");
        shadow.innerHTML = `<h1>Adios nos vemos el día ${dia} a las ${hora}</h1>`;
    }
}

customElements.define("despedida-dia-hora", DespedidaDiaHora);