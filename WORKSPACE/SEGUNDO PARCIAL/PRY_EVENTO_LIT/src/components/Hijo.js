import { html, LitElement, unsafeCSS } from "lit";
import boostrap from "bootstrap/dist/css/bootstrap.min.css?inline";

export class Hijo extends LitElement {

    static styles = [unsafeCSS(boostrap)];

    // Recibimos el atributo HTML "placeholder"
    static properties = {
        placeholder: { type: String }
    };

    _enviarTexto(event) {
        this.dispatchEvent(new CustomEvent("texto-cambiado", {
            detail: {
                texto: event.target.value
            },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
            <input 
                @input=${this._enviarTexto}
                class="form-control"
                type="text"
                placeholder="${this.placeholder}"
            />
        `;
    }
}

customElements.define("componente-hijo", Hijo);
