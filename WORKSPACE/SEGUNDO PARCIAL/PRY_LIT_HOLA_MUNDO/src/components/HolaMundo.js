import { LitElement, html, css } from "lit";

export class HolaMundo extends LitElement {
    render() {
        return html `
            <h1>Hola Mundo desde LIT!</h1>
        `;
    }
}

customElements.define('hola-mundo', HolaMundo);