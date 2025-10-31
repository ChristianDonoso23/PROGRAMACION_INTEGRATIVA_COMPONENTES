class SaludarPersona extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        let nombre = this.getAttribute('nombre') || 'SIN NOMBRE';
        let apellido = this.getAttribute('apellido') || 'SIN APELLIDO';
        let edad = parseInt(this.getAttribute('edad')) || 'SIN EDAD';
        let sexo = this.getAttribute('sexo') || 'SIN SEXO';
        
        let r_edad = edad > 18 ? `SOY MAYOR DE EDAD` : `SOY MENOR DE EDAD`;
        let d_sexo = sexo == "Hombre" ? "HOMBRE" : "MUJER";

        this.shadowRoot.innerHTML = 
        `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
        <table class="table table-bordered border-primary">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Legalidad</th>
                    <th scope="col">Sexo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>${nombre}</td>
                    <td>${apellido}</td>
                    <td>${edad}</td>
                    <td>${r_edad}</td>
                    <td>${d_sexo}</td>
                </tr>
            </tbody>
        </table>
        `
    }
}

customElements.define('saludar-persona', SaludarPersona);