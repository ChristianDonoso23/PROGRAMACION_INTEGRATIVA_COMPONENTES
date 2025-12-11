import "./input-number.js";
import "./operacion-selector.js";
import "./operacion-radio.js";
import "./boton-calcular.js";

export class OperacionesComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                .fila {
                    display: flex;
                    gap: 20px;
                    align-items: center;
                    margin-bottom: 20px;
                }

                #resultado {
                    padding: 10px;
                    background: #e9f7ef;
                    border-radius: 6px;
                    width: 250px;
                    text-align: center;
                    font-size: 18px;
                    font-weight: bold;
                    color: #145a32;
                }
            </style>

            <div class="fila">
                <input-number id="a"></input-number>
                <input-number id="b"></input-number>
                <operacion-selector id="select"></operacion-selector>
                <boton-calcular id="btn"></boton-calcular>
                <operacion-radio id="radio"></operacion-radio>
            </div>

            <div id="resultado">Resultado: 0</div>
        `;
    }

    connectedCallback() {
        const a = this.shadowRoot.querySelector("#a");
        const b = this.shadowRoot.querySelector("#b");
        const selectOp = this.shadowRoot.querySelector("#select");
        const radioOp = this.shadowRoot.querySelector("#radio");
        const btn = this.shadowRoot.querySelector("#btn");
        const result = this.shadowRoot.querySelector("#resultado");

        let v1 = 0;
        let v2 = 0;

        // MODO Y OPERACIÓN POR DEFECTO
        let operacion = "suma";   // por defecto
        let modo = "auto";        // inicia automático

        // =======================================================
        // FUNCIÓN CALCULAR ACTUALIZADA
        // =======================================================
        const calcular = () => {

            // Si no hay operación (aunque ya no ocurre)
            if (!operacion) {
                if (!v1 && !v2) {
                    result.textContent = "Resultado: 0";
                    return;
                }
                if (v1 && !v2) {
                    result.textContent = "Resultado: " + v1;
                    return;
                }
                if (v2 && !v1) {
                    result.textContent = "Resultado: " + v2;
                    return;
                }
                result.textContent = "Resultado: " + v2;
                return;
            }

            let r = 0;
            switch (operacion) {
                case "suma": r = v1 + v2; break;
                case "resta": r = v1 - v2; break;
                case "multiplicacion": r = v1 * v2; break;
                case "division": r = v2 ? v1 / v2 : "Error"; break;
            }

            result.textContent = "Resultado: " + r;
        };

        // =========================
        // INPUT A
        // =========================
        a.addEventListener("valor-cambiado", e => {
            v1 = e.detail;
            if (modo === "auto") calcular();
        });

        // =========================
        // INPUT B
        // =========================
        b.addEventListener("valor-cambiado", e => {
            v2 = e.detail;
            if (modo === "auto") calcular();
        });

        // =========================
        // SELECT → MODO AUTOMÁTICO
        // =========================
        selectOp.addEventListener("operacion-cambiada", e => {
            modo = "auto";
            operacion = e.detail;
            calcular();
        });

        // =========================
        // RADIO → MODO MANUAL
        // =========================
        radioOp.addEventListener("operacion-radio-cambiada", e => {
            modo = "manual";
            operacion = e.detail;
        });

        // =========================
        // BOTÓN → SOLO MANUAL
        // =========================
        btn.addEventListener("calcular-click", () => {
            if (modo === "manual") calcular();
        });
    }
}

customElements.define("operaciones-component", OperacionesComponent);
