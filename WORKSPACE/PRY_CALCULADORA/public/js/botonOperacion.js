export class BotonesOperacion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const operacion = this.getAttribute("data-operacion") || "+";

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./public/vendor/bootstrap/css/bootstrap.min.css" />
      <button class="btn btn-light w-100">${operacion}</button>
    `;

    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      if (typeof this.onOperacionClick === "function") {
        this.onOperacionClick(operacion);
      }
    });
  }
}

// Registrar el componente
customElements.define("botones-operacion", BotonesOperacion);
