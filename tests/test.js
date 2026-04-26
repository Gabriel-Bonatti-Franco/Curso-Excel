import { jest } from '@jest/globals';

// Importa os componentes (ESSENCIAL para registrar no customElements)
import '../src/components/banner/banner.js';
import '../src/components/main_menu/main_menu.js';
import '../src/components/card_carrossel/card_carrossel.js';

describe('Web Components Tests', () => {
    
    // Mock da funcão fetch, simulação controlada de fetch em produção
    beforeEach(() => {
        global.fetch = jest.fn(() =>
        Promise.resolve({
            text: () => Promise.resolve(`<div id="content"></div>`)
        })
        );
    });

    // Remoção dos mock
    afterEach(() => {
        jest.resetAllMocks();
        document.body.innerHTML = '';
    });


    // Teste de definição dos componentes, para verificar se os componentes existem
    test('MainBanner component should be defined', () => {
        expect(customElements.get('main-banner')).toBeDefined();
    });

    test('MainMenu component should be defined', () => {
        expect(customElements.get('main-menu')).toBeDefined();
    });

    test('CardCarrossel component should be defined', () => {
        expect(customElements.get('card-carrossel')).toBeDefined();
    });

    // Teste de utilização dos componentes, para verificar se estão com o comportamento esperado
    test('MainBanner should attach shadow DOM', () => {
        const banner = document.createElement('main-banner');
        document.body.appendChild(banner);

        expect(banner.shadowRoot).toBeDefined();
    });

    test('MainMenu should attach shadow DOM', () => {
        const mainMenu = document.createElement('main-menu');
        document.body.appendChild(mainMenu);

        expect(mainMenu.shadowRoot).toBeDefined();
    });

    test('CardCarrossel should attach shadow DOM', () => {
        const card = document.createElement('card-carrossel');
        document.body.appendChild(card);

        expect(card.shadowRoot).toBeDefined();
    });

});