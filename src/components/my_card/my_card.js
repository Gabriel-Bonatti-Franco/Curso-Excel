class MyCard extends HTMLElement {
  async connectedCallback() {
    // shadow DOM isola o CSS do componente
    const shadow = this.attachShadow({ mode: 'open' });
    
    const text = this.textContent

    // Busca o HTML externo e injeta no Shadow DOM
    const res = await fetch('/src/components/my_card/my_card.html');
    const html = await res.text();

    shadow.innerHTML = html;
    shadow.querySelector("#content").textContent = text;
    
  }
}

customElements.define('my-card', MyCard);