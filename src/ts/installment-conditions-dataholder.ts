import { installmentConditionData } from '../data/installment-conditions';
import { InstallmentConditionCard } from '../types/installment-condition.types';

class CharacteristicsCards {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.render();
  }

  private render(): void {
    const cardsHTML = installmentConditionData.map((card: InstallmentConditionCard) => this.createCardHTML(card)).join('');
    this.container.innerHTML = cardsHTML;
  }

  private createCardHTML(card: InstallmentConditionCard): string {
    return `
      <div class="installment__card" data-card-id="${card.id}">
        <h3 class="installment__card-title">${card.title}</h3>
        <p class="installment__card-description">${card.description}</p>
      </div>
    `;
  }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  const cardsContainer = document.querySelector('.installment__card-holder');
  if (cardsContainer) {
    new CharacteristicsCards(cardsContainer as HTMLElement);
  }
});