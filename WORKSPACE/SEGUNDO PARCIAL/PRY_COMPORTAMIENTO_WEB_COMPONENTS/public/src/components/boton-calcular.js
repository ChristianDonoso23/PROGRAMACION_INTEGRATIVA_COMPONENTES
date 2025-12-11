export class BotonCalcular extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                button {
                    padding: 10px 20px;
                    background: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 16px;
                    cursor: pointer;
                }
                button:hover {
                    background: #0056b3;
                }
            </style>

            <button>Calcular</button>
        `;
    }

    connectedCallback() {
        const btn = this.shadowRoot.querySelector("button");

        btn.addEventListener("click", () => {
            this.dispatchEvent(new CustomEvent("calcular-click", {
                bubbles: true,
                composed: true
            }));
        });
    }
}

customElements.define("boton-calcular", BotonCalcular);
