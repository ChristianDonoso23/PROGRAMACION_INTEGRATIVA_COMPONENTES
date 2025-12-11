import { LitElement, html, css } from "lit";

export class Ui extends LitElement {

    static styles = css `
        button {
            background-color: var(--color-fondo, blue);
            color: var(--color-texto, white);
            padding: 10px;
            border-radius: 5px;
            font-size: 16px;
        }
    `;

    render(){
        return html `
            <button>Haz clic aquí</button>
        `;
    }
}

customElements.define("u-i", Ui);