class MainMenu extends HTMLElement {
  async connectedCallback() {
    // shadow DOM isola o CSS do componente
    const shadow = this.attachShadow({ mode: 'open' });

    // Busca o HTML externo e injeta no Shadow DOM
    const res = await fetch('/src/components/main_menu/main_menu.html');
    const html = await res.text();

    shadow.innerHTML = html;
  }
}

customElements.define('main-menu', MainMenu);