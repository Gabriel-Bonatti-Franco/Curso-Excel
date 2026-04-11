class NavMenu extends HTMLElement {
  async connectedCallback() {
    // shadow DOM isola o CSS do componente
    const shadow = this.attachShadow({ mode: 'open' });

    // Busca o HTML externo e injeta no Shadow DOM
    const res = await fetch('/components/nav_menu.html');
    const html = await res.text();

    shadow.innerHTML = html;
  }
}

customElements.define('nav-menu', NavMenu);