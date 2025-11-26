import {LitElement, html, css} from 'lit';

export class HolaMundo extends LitElement {
    nombre = "Christian Estiven";
    apellido = "Donoso Cevallos";

    NOMBRE_COMPLETO = `${this.nombre} ${this.apellido}`;

    nombrescompletos = `${this.nombre} ${this.apellido}`;

    nombrescompletos2 = `${this.nombre + " " +  this.apellido}`;

    render(){
        return html
        `
            <p>Hola Mundo</p>
            <p>${this.NOMBRE_COMPLETO}</p>
            <p>${this.nombrescompletos}</p>
            <p>${this.nombrescompletos2}</p>
        `;
    }
}

customElements.define('hola-mundo', HolaMundo);