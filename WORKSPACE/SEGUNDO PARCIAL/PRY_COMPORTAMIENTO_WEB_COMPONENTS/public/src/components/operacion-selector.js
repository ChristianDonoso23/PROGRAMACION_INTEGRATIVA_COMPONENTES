export class OperacionSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                select {
                    padding: 8px;
                    font-size: 15px;
                    border-radius: 5px;
                    border: 1px solid #aaa;
                }
            </style>

            <select id="op">
                <option value="suma" selected>Suma</option>
                <option value="resta">Resta</option>
                <option value="multiplicacion">Multiplicación</option>
                <option value="division">División</option>
            </select>
        `;
    }

    connectedCallback() {
        const select = this.shadowRoot.querySelector("#op");

        // Evento principal: operación seleccionada
        select.addEventListener("change", () => {
            this.dispatchEvent(new CustomEvent("operacion-cambiada", {
                detail: select.value,
                bubbles: true,
                composed: true
            }));
        });

        // Para detectar clic en el selector (si lo usas)
        select.addEventListener("click", () => {
            this.dispatchEvent(new CustomEvent("selector-click", {
                bubbles: true,
                composed: true
            }));
        });
    }
}

customElements.define("operacion-selector", OperacionSelector);
