import { LitElement, html, css } from "lit";

export class UiPropiedades extends LitElement {

    static properties = {
        fondoDiv: { type: String }
    };

    constructor() {
        super();
        this.fondoDiv = "red";
    }

    static styles = css`
        .caja {
            width: 200px;
            height: 150px;
            border-radius: 8px;
            margin-top: 15px;
            background-color: var(--color-fondo);
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
            border: 2px solid black;
        }

        input {
            padding: 8px;
            width: 200px;
        }
    `;

    actualizarFondo(event) {
        this.fondoDiv = event.target.value;
    }

    render() {
        return html`
            <div>
                <h3>Escriba un color para cambiar el fondo:</h3>

                <input 
                    type="text" 
                    placeholder="Ej: blue, yellow, black"
                    @input="${this.actualizarFondo}"
                >

                <div class="caja" style="--color-fondo: ${this.fondoDiv}">
                    ${this.fondoDiv}
                </div>
            </div>
        `;
    }
}

customElements.define("cambiar-color-div", UiPropiedades);