import { LitElement, html, css } from "lit";

export class SumaNumeros extends LitElement {

    static properties = {
        num1: { type: Number },
        num2: { type: Number },
        num3: { type: Number }
    }

    soloNumero(value) {
        const n = Number(value);
        return isNaN(n) ? 0 : n; 
    }

    render() {
        const n1 = this.soloNumero(this.num1);
        const n2 = this.soloNumero(this.num2);
        const n3 = this.soloNumero(this.num3);

        const suma = n1 + n2 + n3;

        return html`
            <h1>La suma de ${n1} + ${n2} + ${n3} es ${suma}</h1>
        `;
    }
}

customElements.define('suma-numeros', SumaNumeros);