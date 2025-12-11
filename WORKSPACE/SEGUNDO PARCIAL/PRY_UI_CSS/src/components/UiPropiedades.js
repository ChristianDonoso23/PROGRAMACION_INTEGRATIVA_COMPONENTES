import { LitElement, html, css } from "lit";

export class UiPropiedades extends LitElement {

    static properties = {
        nombre: { type: String },
        color: { type: String },
        fondo: { type: String }
    };

    constructor() {
        super();
        this.nombre = "Mi botón";
        this.color = "white";
        this.fondo = "blue";
    }

    static styles = css `
        button {
            background-color: var(--btn-fondo);
            color: var(--btn-color);
            padding: 10px;
            border-radius: 5px;
            font-size: 16px;
        }
    `;

    render(){
        return html `
            <button style="--btn-fondo: ${this.fondo}; --btn-color: ${this.color};">${this.nombre}</button>
        `;
    }
}

customElements.define("ui-propiedades", UiPropiedades);