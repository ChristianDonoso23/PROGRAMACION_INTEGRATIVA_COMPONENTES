class SumaDosNumeros extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        //Capturar el atributo 'operacion'
        let operacion = this.getAttribute('operacion');
        console.log(operacion)
        shadow.innerHTML = `
            <link rel="stylesheet" href="/public/css/suma_dos_numeros.css">
            <div class="operaciones-basicas">
                <h2>operacion de dos Números</h2>
                <label for="">Ingrese numero 1:</label>
                <input type="number" id="num1">
                <label for="">Ingrese numero 2:</label>
                <input type="number" id="num2">
                <button id="btnCalcular">${operacion}</button>
                <p id="resultado">Resultado: </p>
            </div>
        `;
        const num1 = shadow.getElementById('num1');
        const num2 = shadow.getElementById('num2');
        const resultado = shadow.getElementById('resultado');
        const btnCalcular = shadow.getElementById('btnCalcular');

        btnCalcular.addEventListener('click', () => {
            switch (operacion) {
                case 'SUMA':
                    const suma = parseFloat(num1.value) + parseFloat(num2.value);
                    resultado.textContent = `Resultado: ${suma}`;
                    break;
                case 'RESTAR':
                     const resta = parseFloat(num1.value) - parseFloat(num2.value);
                    resultado.textContent = `Resultado: ${resta}`;
                    break;
                case 'MULTIPLICACION':
                        const multiplicacion = parseFloat(num1.value) * parseFloat(num2.value);
                        resultado.textContent = `Resultado: ${multiplicacion}`;
                    break;
                case 'DIVISION':
                        const division = parseFloat(num1.value) / parseFloat(num2.value);   
                        resultado.textContent = `Resultado: ${division}`;
                    break;
                default:
                    resultado.textContent = `Operacion no valida`;
                    return;
            }
            
        });

    }

}

customElements.define('operaciones-numeros', SumaDosNumeros);