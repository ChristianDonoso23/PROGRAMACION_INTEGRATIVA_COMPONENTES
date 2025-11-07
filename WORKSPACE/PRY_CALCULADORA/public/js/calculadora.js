import { BotonesOperacion } from "./botonOperacion.js";

export class CalculadoraBasica extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <link rel="stylesheet" href="./public/vendor/bootstrap/css/bootstrap.min.css" />
      <div class="card bg-dark text-white">
        <div class="card-header">
          <input type="text" id="txt_numero" class="form-control form-lg text-center" placeholder="Resultado" disabled>
        </div>
        <div class="card-body">
          <!-- Fila 1 -->
          <div class="row">
            <div class="col-sm-3"><button data-value="1" class="btn btn-warning w-100">1</button></div>
            <div class="col-sm-3"><button data-value="2" class="btn btn-warning w-100">2</button></div>
            <div class="col-sm-3"><button data-value="3" class="btn btn-warning w-100">3</button></div>
            <div class="col-sm-3"><botones-operacion data-operacion="+"></botones-operacion></div>
          </div>

          <!-- Fila 2 -->
          <div class="row mt-1">
            <div class="col-sm-3"><button data-value="4" class="btn btn-warning w-100">4</button></div>
            <div class="col-sm-3"><button data-value="5" class="btn btn-warning w-100">5</button></div>
            <div class="col-sm-3"><button data-value="6" class="btn btn-warning w-100">6</button></div>
            <div class="col-sm-3"><botones-operacion data-operacion="-"></botones-operacion></div>
          </div>

          <!-- Fila 3 -->
          <div class="row mt-1">
            <div class="col-sm-3"><button data-value="7" class="btn btn-warning w-100">7</button></div>
            <div class="col-sm-3"><button data-value="8" class="btn btn-warning w-100">8</button></div>
            <div class="col-sm-3"><button data-value="9" class="btn btn-warning w-100">9</button></div>
            <div class="col-sm-3"><botones-operacion data-operacion="*"></botones-operacion></div>
          </div>

          <!-- Fila 4 -->
          <div class="row mt-1">
            <div class="col-sm-3"><button data-value="0" class="btn btn-warning w-100">0</button></div>
            <div class="col-sm-3"><botones-operacion data-operacion="/"></botones-operacion></div>
            <div class="col-sm-6"><button id="btn-igual" class="btn btn-success w-100">=</button></div>
          </div>
        </div>
      </div>
    `;

    this.display = shadow.getElementById("txt_numero");
    this.expresion = "";
    this.mostrarResultado = false;

    shadow.querySelectorAll("button[data-value]").forEach(btn => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-value");
        if (this.mostrarResultado) {
          this.expresion = val;
          this.mostrarResultado = false;
        } else {
          this.expresion += val;
        }
        this.display.value = this.expresion;
      });
    });

    shadow.querySelectorAll("botones-operacion").forEach(btnOp => {
      btnOp.onOperacionClick = (valor) => this.aplicarOperacion(valor);
    });

    shadow.getElementById("btn-igual").addEventListener("click", () => this.calcular());
  }

  aplicarOperacion(valor) {
    if (this.mostrarResultado) this.mostrarResultado = false;
    this.expresion += valor;
    this.display.value = this.expresion;
  }

  calcular() {
    try {
      this.expresion = String(Function(`return ${this.expresion}`)());
      this.mostrarResultado = true;
    } catch {
      this.expresion = "Error";
      this.mostrarResultado = true;
    }
    this.display.value = this.expresion;
  }
}

customElements.define("calculadora-basica", CalculadoraBasica);
