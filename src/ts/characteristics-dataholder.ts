import { characteristicsData } from '../data/characteristics';
import { CharacteristicCard } from '../types/characteristic.types';

class CharacteristicsCards {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.render();
  }

  private render(): void {
    const cardsHTML = characteristicsData.map((card: CharacteristicCard) => this.createCardHTML(card)).join('');
    this.container.innerHTML = cardsHTML;
    this.addColorListeners(); // добавляем обработчики после рендера
  }

  private createCardHTML(card: CharacteristicCard): string {
    const specsList = card.specs.map((spec: string) => `<li class="characteristic__list-item">${spec}</li>`).join('');
    
    // Добавляем data-атрибуты для идентификации
    const colorsList = card.colors.map((color: string, index: number) => 
      `<button class="color-holder__button ${index === 0 ? 'active' : ''}" 
               style="background-color: ${color};" 
               data-color="${color}"
               data-card-id="${card.id}"></button>`
    ).join('');

    return `
      <div class="characteristic__card" data-card-id="${card.id}">
        <h3 class="card__title">${card.title}</h3>
        <p class="card__price">от ${card.price} ₽/м²</p>
        <div class="card__image-wrapper">
          <img src="${card.image}" alt="${card.title}" class="card__img">
        </div>
        <div class="card__color-holder">
          ${colorsList}
        </div>
        <ul class="characteristic__list">
          ${specsList}
        </ul>
        <button class="characteristic__order-button button button--fill">Заказать</button>
      </div>
    `;
  }

  private addColorListeners(): void {
    // Находим все кнопки цветов
    const colorButtons = this.container.querySelectorAll('.color-holder__button');
    
    colorButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const clickedButton = e.target as HTMLElement;
        const cardId = clickedButton.dataset.cardId;
        
        // Находим все кнопки цветов в этой карточке
        const cardButtons = this.container.querySelectorAll(
          `.characteristic__card[data-card-id="${cardId}"] .color-holder__button`
        );
        
        // Убираем active у всех кнопок в этой карточке
        cardButtons.forEach(btn => btn.classList.remove('active'));
        
        // Добавляем active нажатой кнопке
        clickedButton.classList.add('active');
      });
    });
  }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  const cardsContainer = document.querySelector('.characteristic__card-holder');
  if (cardsContainer) {
    new CharacteristicsCards(cardsContainer as HTMLElement);
  }
});