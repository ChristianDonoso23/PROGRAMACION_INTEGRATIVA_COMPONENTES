class CapturaDatosPersona extends HTMLElement {
    /*constructor() {
        super();
        this.attachShadow({'mode':'open'});
    }*/

    connectedCallback() {
            this.innerHTML = `
                <fieldset>
                    <input type="text" id="txt_apellidos" placeholder="INGRESE SU APELLIDOS">
                    <input type="text" id="txt_nombres" placeholder="INGRESE SUS NOMBRES">
                    <input type="number" id="txt_edad" placeholder="INGRESE SU EDAD">
                    <select id="txt_sexo">
                        <option value="">Seleccione sexo</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                    </select>

                    <button type="button" id="btn_enviar">ENVIAR</button>
                    <p id="txt_resultado"></p>
                </fieldset>
                
            `;
        
        let nombre = this.querySelector('#txt_nombres');
        let apellido = this.querySelector('#txt_apellidos');
        let edad = this.querySelector('#txt_edad');
        let sexo = this.querySelector('#txt_sexo');

        let btn_enviar = this.querySelector('#btn_enviar');
        let resultado = this.querySelector('#txt_resultado');

        

        btn_enviar.addEventListener('click',function(){
            let ed;
            if(parseInt(edad.value) >= 18) {
                ed = "Mayor de edad";
            } else {
                ed = "Menor de edad";
            }
            resultado.textContent = `
                hola soy ${nombre.value} ${apellido.value} y mi edad es ${edad.value} años, y soy ${ed}, y mi genero es: ${sexo.value}
            `
        });
        
    }


}

customElements.define('capturar-datos',CapturaDatosPersona);