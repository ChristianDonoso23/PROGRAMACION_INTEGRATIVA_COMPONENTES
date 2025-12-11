import { LitElement, html, unsafeCSS } from "lit";
import boostrap from "bootstrap/dist/css/bootstrap.min.css?inline";

export class Padre extends LitElement {
    static styles = [
        unsafeCSS(boostrap)
    ];

    static properties = {
        mensaje_recibido: { type: String }
    };

    constructor() {
        super();
        this.mensaje_recibido = "Mensaje inicial del padre";
        this._mensajeInicial = this.mensaje_recibido;
    }

    _mostrarTexto(event) {
        const texto = (event.detail && event.detail.texto) ? String(event.detail.texto) : "";
        if (texto === "") {
            this.mensaje_recibido = this._mensajeInicial;
        } else {
            this.mensaje_recibido = texto;
        }
    }

    render() {
        return html`
            <div class="container mt-4">
                <componente-hijo 
                    placeholder="${this._mensajeInicial}"
                    @texto-cambiado=${this._mostrarTexto}>
                </componente-hijo>

                <h1>${this.mensaje_recibido}</h1>
            </div>
        `;
    }
}

customElements.define("componente-padre", Padre);
