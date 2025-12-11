export class InputNumber extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                input {
                    width: 100px;
                    padding: 8px;
                    font-size: 16px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
            </style>
            <input type="number" id="num">
        `;
    }

    connectedCallback() {
        const input = this.shadowRoot.querySelector("#num");

        // EVENTO KEYPRESS
        input.addEventListener("keypress", (e) => {
            this.dispatchEvent(new CustomEvent("tecla-presionada", {
                detail: e.key,
                bubbles: true,
                composed: true
            }));
        });

        // EVENTO KEYUP
        input.addEventListener("keyup", () => {
            const valor = parseFloat(input.value) || 0;
            this.dispatchEvent(new CustomEvent("valor-cambiado", {
                detail: valor,
                bubbles: true,
                composed: true
            }));
        });

        // EVENTO INPUT (pegar, borrar, arrastrar, etc.)
        input.addEventListener("input", () => {
            const valor = parseFloat(input.value) || 0;
            this.dispatchEvent(new CustomEvent("valor-cambiado", {
                detail: valor,
                bubbles: true,
                composed: true
            }));
        });
    }
}

customElements.define("input-number", InputNumber);
