export class OperacionRadio extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                .ops {
                    display: flex;
                    gap: 15px;
                    align-items: center;
                }
                label { cursor: pointer; }
            </style>

            <div class="ops">
                <label><input type="radio" name="op" value="suma"> Suma</label>
                <label><input type="radio" name="op" value="resta"> Resta</label>
                <label><input type="radio" name="op" value="multiplicacion"> Multiplicación</label>
                <label><input type="radio" name="op" value="division"> División</label>
            </div>
        `;
    }

    connectedCallback() {
        const radios = this.shadowRoot.querySelectorAll("input");

        radios.forEach(r => {
            r.addEventListener("change", () => {
                this.dispatchEvent(new CustomEvent("operacion-radio-cambiada", {
                    detail: r.value,
                    bubbles: true,
                    composed: true
                }));
            });
        });
    }
}

customElements.define("operacion-radio", OperacionRadio);
