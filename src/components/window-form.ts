class WindowForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.initMask();
        this.initSubmit();
    }

    private render() {
        const discount = this.getAttribute('discount') || '30';
        const buttonText = this.getAttribute('button-text') || `Получить скидку ${discount}%`;
        const placeholder = this.getAttribute('placeholder') || '+7 (___) ___-__-__';
        const baseClass = this.className;
        
        this.innerHTML = `
        <div class="${baseClass}-row">
            <input type="tel" class="${baseClass}-input" placeholder="${placeholder}">
            <button class="${baseClass}-button button button--fill">${buttonText}</button>
        </div>
        <div class="${baseClass}-agreement">
            <label class="${baseClass}-agreement__label">
            <input type="checkbox" class="${baseClass}-agreement__checkbox">
            <span class="${baseClass}-agreement__text">Даю согласие на обработку персональных данных</span>
            </label>
        </div>
        `;
    }

    private initMask() {
        // Маска для телефона
    }

    private initSubmit() {
        const button = this.querySelector('button');
        button?.addEventListener('click', () => {
        const formData = {
            phone: this.querySelector('input')?.value,
            discount: this.getAttribute('discount'),
            formType: this.getAttribute('form-type')
        };
        console.log('Submit:', formData);
        // Отправка на сервер
        });
    }
}

customElements.define('window-form', WindowForm);