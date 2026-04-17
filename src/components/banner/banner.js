class MainBanner extends HTMLElement {
  async connectedCallback() {
    // shadow DOM isola o CSS do componente
    const shadow = this.attachShadow({ mode: 'open' });

    const text_content = this.getHTML()

    // Busca o HTML externo e injeta no Shadow DOM
    const res = await fetch('/src/components/banner/banner.html');
    const html = await res.text();

    shadow.innerHTML = html;
    shadow.querySelector('#content').innerHTML = text_content
  }
}

customElements.define('main-banner', MainBanner);