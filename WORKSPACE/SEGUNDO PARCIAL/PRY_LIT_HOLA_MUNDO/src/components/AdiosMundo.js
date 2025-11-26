import { LitElement, html, css } from "lit";

export class AdiosMundo extends LitElement {
    render() {
        return html `
            <h1>Adios Mundo desde LIT</h1>
        `;
    }
}
customElements.define('adios-mundo', AdiosMundo);