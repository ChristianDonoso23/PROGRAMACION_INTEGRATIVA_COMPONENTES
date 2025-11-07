export class BotonNumero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const valor = this.getAttribute("data-value") || "0";

    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./public/vendor/bootstrap/css/bootstrap.min.css" />
      <button class="btn btn-success w-100">${valor}</button>
    `;

    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      if (typeof this.onNumeroClick === "function") {
        this.onNumeroClick(valor);
      }
    });
  }
}

customElements.define("boton-numero", BotonNumero);
