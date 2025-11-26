import { LitElement, html, css } from "lit";

export class SaludoNombre extends LitElement {
    
    static properties = {
        nombre: { type: String },
        edad: { type: Number }
    }

    render() {
        //let nombre = this.getAttribute("nombre") || "Invitado";
        //let saludo = this.nombre + ", tienes " + this.edad + " años";
        return html`
            <h1>Hola ${this.nombre}, tienes ${this.edad} años</h1>
        `;
        
    }
}

customElements.define('saludo-nombre', SaludoNombre);
// quiero que en un parrafo me muestra la suma de 5 + 5 + 5 es 15