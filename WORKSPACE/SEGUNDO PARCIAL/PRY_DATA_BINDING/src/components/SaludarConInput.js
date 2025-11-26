import { LitElement, html, css } from "lit";

export class SaludarConInput extends LitElement {
    static properties = {
        nombre: { type: String }
    };

    constructor() {
        super();
        this.nombre = "Christian";
    };

    actualizarNombre(e) {
        this.nombre = e.target.value;
    }


    render() {
        return html
        `
            <input value="${this.nombre}" @input="${this.actualizarNombre}">
            <p>Tu nombre es: ${this.nombre} </p>
            <img src="${this.nombre}">  
        `;
    }
}
customElements.define("saludar-con-input", SaludarConInput);