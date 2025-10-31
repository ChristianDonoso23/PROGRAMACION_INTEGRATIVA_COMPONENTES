class AlertaSimple extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
    <link rel="stylesheet" href="/public/css/alerta_simple.css">
    <div class="alerta-simple">
        <h1>¡Alerta Simple!</h1> 
        <p>COMPONENTE WEB CON SHADOW DOM</p>
    </div>
    `;
  }
}

customElements.define("alerta-simple", AlertaSimple);
