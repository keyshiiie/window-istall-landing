import { calculatorSections } from '../data/calculator';
import { CalculatorState } from '../types/calculator.types';

class WindowCalculator {
    private formContainer: HTMLElement;
    private resultElement: HTMLElement;
    private state: CalculatorState = {
        windowType: 'single',
        width: 1200,
        height: 1400,
        color: 'white',
        glassType: 'double',
        buildingType: 'brick',
        installation: true // true = монтаж "Да"
    };

    constructor(formContainer: HTMLElement, resultElement: HTMLElement) {
        this.formContainer = formContainer;
        this.resultElement = resultElement;
        this.render();
        this.calculatePrice();
    }

    private render(): void {
        // Разделяем секции на две группы
        const windowTypeSection = calculatorSections.find(s => s.id === 'windowType');
        const dimensionsSection = calculatorSections.find(s => s.id === 'dimensions');
        const colorSection = calculatorSections.find(s => s.id === 'color');
        const glassTypeSection = calculatorSections.find(s => s.id === 'glassType');
        const buildingTypeSection = calculatorSections.find(s => s.id === 'buildingType');
        const installationSection = calculatorSections.find(s => s.id === 'installation');
        
        const sectionsHTML = `
            <!-- Тип окна отдельно -->
            ${windowTypeSection ? this.renderSection(windowTypeSection) : ''}
            
            <!-- Объединенный контейнер для размеров и установки -->
            <div class="calculator__combined-container-top">
                <div class="calculator__combined-left">
                    ${dimensionsSection ? this.renderSection(dimensionsSection) : ''}
                </div>
                <div class="calculator__combined-right">
                    ${buildingTypeSection ? this.renderSection(buildingTypeSection) : ''}
                </div>
            </div>
            
            <div class="calculator__combined-container-bottom">
                ${colorSection ? this.renderSection(colorSection) : ''}
                ${glassTypeSection ? this.renderSection(glassTypeSection) : ''}
                ${installationSection ? this.renderSection(installationSection) : ''}
            </div>
        `;
        
        this.formContainer.innerHTML = sectionsHTML;
        this.attachListeners();
    }

    private renderSection(section: any): string {
        switch (section.type) {
            case 'radio':
                return this.renderRadioSection(section);
            case 'number':
                return this.renderNumberSection(section);
            default:
                return '';
        }
    }

    private renderRadioSection(section: any): string {
        // Для секции с типом окна добавляем картинки
        if (section.id === 'windowType') {
            const optionsHTML = section.options.map((opt: any) => {
                const isChecked = opt.id === this.state[section.id as keyof CalculatorState];
                return `
                    <div class="calculator__radio-card ${isChecked ? 'active' : ''}">
                        <input type="radio" 
                            name="${section.id}" 
                            value="${opt.id}" 
                            ${isChecked ? 'checked' : ''}
                            class="calculator__radio-input-hidden"
                            id="window-${opt.id}">
                        <label for="window-${opt.id}" class="calculator__radio-label-card">
                            <img src="${opt.image}" alt="${opt.label}" class="calculator__radio-image">
                            <span class="calculator__radio-text">${opt.label}</span>
                        </label>
                    </div>
                `;
            }).join('');

            return `
                <div class="calculator__section" data-section="${section.id}">
                    <h3 class="calculator__section-title">${section.title}</h3>
                    <div class="calculator__radio-grid">
                        ${optionsHTML}
                    </div>
                </div>
            `;
        } 
        // Для секции монтажа (специальная обработка для boolean)
        else if (section.id === 'installation') {
            const optionsHTML = section.options.map((opt: any) => {
                // Преобразуем 'yes' в true, 'no' в false для сравнения с состоянием
                const isChecked = (opt.id === 'yes') === this.state.installation;
                return `
                    <label class="calculator__radio-label">
                        <input type="radio" 
                                name="${section.id}" 
                                value="${opt.id}" 
                                ${isChecked ? 'checked' : ''}
                                class="calculator__radio-input">
                        <span class="calculator__radio-text">${opt.label}</span>
                    </label>
                `;
            }).join('');

            return `
                <div class="calculator__section" data-section="${section.id}">
                    <h3 class="calculator__section-title">${section.title}</h3>
                    <div class="calculator__radio-group">
                        ${optionsHTML}
                    </div>
                </div>
            `;
        }
        // Для остальных секций обычные радио
        else {
            const optionsHTML = section.options.map((opt: any) => {
                const isChecked = opt.id === this.state[section.id as keyof CalculatorState];
                return `
                    <label class="calculator__radio-label">
                        <input type="radio" 
                                name="${section.id}" 
                                value="${opt.id}" 
                                ${isChecked ? 'checked' : ''}
                                class="calculator__radio-input">
                        <span class="calculator__radio-text">${opt.label}</span>
                    </label>
                `;
            }).join('');

            return `
                <div class="calculator__section" data-section="${section.id}">
                    <h3 class="calculator__section-title">${section.title}</h3>
                    <div class="calculator__radio-group">
                        ${optionsHTML}
                    </div>
                </div>
            `;
        }
    }

    private renderNumberSection(section: any): string {
        return `
            <div class="calculator__section" data-section="dimensions">
                <h3 class="calculator__section-title">Размер окна</h3>
                <div class="calculator__dimensions">
                    <label class="calculator__dimension-label">
                        <input type="number" 
                            class="calculator__dimension-input" 
                            id="width" 
                            value="${this.state.width}"
                            min="300" 
                            max="3000"
                            placeholder="1200">
                    </label>
                    <span class="calculator__multiplier">X</span>
                    <label class="calculator__dimension-label">
                        <input type="number" 
                            class="calculator__dimension-input" 
                            id="height" 
                            value="${this.state.height}"
                            min="300" 
                            max="3000"
                            placeholder="1400">
                    </label>
                </div>
            </div>
        `;
    }

    private attachListeners(): void {
        // Слушатели для скрытых радио (карточки с картинками)
        const hiddenRadioInputs = this.formContainer.querySelectorAll('.calculator__radio-input-hidden');
        
        hiddenRadioInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                const target = e.target as HTMLInputElement;
                const sectionName = target.name as keyof CalculatorState;
                const value = target.value;
                
                if (sectionName in this.state) {
                    // Обновляем состояние
                    this.state[sectionName] = value;
                    
                    // Обновляем классы active на карточках
                    const cards = this.formContainer.querySelectorAll(`[data-section="${sectionName}"] .calculator__radio-card`);
                    cards.forEach(card => {
                        const cardInput = card.querySelector('input');
                        if (cardInput && cardInput.value === value) {
                            card.classList.add('active');
                        } else {
                            card.classList.remove('active');
                        }
                    });
                    
                    this.calculatePrice();
                }
            });
        });

        // Слушатели для обычных радио
        const regularRadioInputs = this.formContainer.querySelectorAll('.calculator__radio-input');
        regularRadioInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                const target = e.target as HTMLInputElement;
                const sectionName = target.name as keyof CalculatorState;
                const value = target.value;
                
                if (sectionName === 'installation') {
                    // Для монтажа преобразуем 'yes'/'no' в boolean
                    this.state.installation = value === 'yes';
                } else if (sectionName in this.state) {
                    this.state[sectionName] = value;
                }
                
                this.calculatePrice();
            });
        });

        // Слушатели для размеров
        const widthInput = document.getElementById('width') as HTMLInputElement;
        const heightInput = document.getElementById('height') as HTMLInputElement;

        if (widthInput) {
            widthInput.addEventListener('input', (e) => {
                const value = parseInt((e.target as HTMLInputElement).value) || 0;
                this.state.width = value;
                this.calculatePrice();
            });
        }

        if (heightInput) {
            heightInput.addEventListener('input', (e) => {
                const value = parseInt((e.target as HTMLInputElement).value) || 0;
                this.state.height = value;
                this.calculatePrice();
            });
        }
    }

    private calculatePrice(): void {
        let price = 0;
        
        // Базовая цена за площадь
        const basePricePerM2 = 8000;
        const area = (this.state.width * this.state.height) / 1000000;
        price += area * basePricePerM2;
        
        // Находим секции с ценами в опциях
        const windowTypeSection = calculatorSections.find(s => s.id === 'windowType');
        const windowTypeOption = windowTypeSection?.options?.find(opt => opt.id === this.state.windowType);
        if (windowTypeOption?.price) {
            price += windowTypeOption.price;
        }
        
        const colorSection = calculatorSections.find(s => s.id === 'color');
        const colorOption = colorSection?.options?.find(opt => opt.id === this.state.color);
        if (colorOption?.price) {
            price += colorOption.price;
        }
        
        const glassTypeSection = calculatorSections.find(s => s.id === 'glassType');
        const glassTypeOption = glassTypeSection?.options?.find(opt => opt.id === this.state.glassType);
        if (glassTypeOption?.price) {
            price += glassTypeOption.price;
        }
        
        const buildingTypeSection = calculatorSections.find(s => s.id === 'buildingType');
        const buildingTypeOption = buildingTypeSection?.options?.find(opt => opt.id === this.state.buildingType);
        if (buildingTypeOption?.price) {
            price += buildingTypeOption.price;
        }
        
        // Монтаж - используем цену из опций
        if (this.state.installation) {
            const installationSection = calculatorSections.find(s => s.id === 'installation');
            const installationOption = installationSection?.options?.find(opt => opt.id === 'yes');
            if (installationOption?.price) {
                price += installationOption.price;
            }
        }
        
        const resultValue = this.resultElement.querySelector('.calculator__result-value');
        if (resultValue) {
            resultValue.textContent = Math.round(price).toLocaleString() + ' ₽';
        }
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.querySelector('.calculator__form');
    const resultElement = document.querySelector('.calculator__result');
    
    if (formContainer && resultElement) {
        new WindowCalculator(formContainer as HTMLElement, resultElement as HTMLElement);
    }
});