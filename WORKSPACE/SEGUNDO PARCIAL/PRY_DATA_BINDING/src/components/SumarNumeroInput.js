import { LitElement, html } from "lit";

export class SumarNumeroInput extends LitElement {
  static properties = {
    numero1: { type: Number },
    numero2: { type: Number },
    mensajeError: { type: String },
  };

  constructor() {
    super();
    this.numero1 = 0;
    this.numero2 = 80;
    this.mensajeError = "";
  }

  actualizarNumero(e) {
    const id = e.target.id;
    let valor = e.target.value;

    if (valor === ".") {
      this.mensajeError = "Solo se permiten números";
      return;
    } else {
      this.mensajeError = "";
    }

    valor = valor.replace(/[^0-9.-]/g, "");

    if (valor.indexOf("-") > 0) {
      valor = valor.replace(/-/g, "");
    }

    const partes = valor.split("-");
    if (partes.length > 2) {
      valor = "-" + partes.slice(1).join("");
    }

    const partesDecimal = valor.split(".");
    if (partesDecimal.length > 2) {
      valor = partesDecimal[0] + "." + partesDecimal.slice(1).join("");
    }

    e.target.value = valor;

    const valorNumerico = valor === "" || valor === "-" ? 0 : Number(valor);

    if (id === "numero1") {
      this.numero1 = valorNumerico;
    } else if (id === "numero2") {
      this.numero2 = valorNumerico;
    }
  }

  get suma() {
    return this.numero1 + this.numero2;
  }

  render() {
    return html`
      <div>
        <input  value="${this.numero1}" id="numero1" inputmode="decimal" @input=${this.actualizarNumero} />
        <input  value="${this.numero2}" id="numero2" inputmode="decimal" @input=${this.actualizarNumero} />

        ${this.mensajeError
          ? html`<p style="color:red; font-weight:bold;">${this.mensajeError}</p>`
          : ""
        }

        <p>Resultado: ${this.suma}</p>
      </div>
    `;
  }
}

customElements.define("sumar-numero-input", SumarNumeroInput);
