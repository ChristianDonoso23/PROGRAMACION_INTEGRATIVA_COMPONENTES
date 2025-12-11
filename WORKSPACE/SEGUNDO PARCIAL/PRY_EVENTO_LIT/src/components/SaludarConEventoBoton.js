import { LitElement, html, css, unsafeCSS} from "lit";
import boostrap from "bootstrap/dist/css/bootstrap.min.css?inline";

export class SaludarConEventoBoton extends LitElement {
    
    static styles = 
    unsafeCSS(boostrap);

    static properties = {
        mensaje: {type: String}
    };

    constructor(){
        super();
        this.mensaje = "";
    }

    funcion_saludar(){
        this.mensaje = "HOLA, BIENVENIDO A LIT";
    }

    render(){
        return html`
            <button @click=${this.funcion_saludar} class="btn btn-success text-white">HAGA CLICK PARA MOSTRAR SALUDO</button>
            <h1>${this.mensaje}</h1>
        `;
    }
}

customElements.define("saludar-con-evento-boton", SaludarConEventoBoton);