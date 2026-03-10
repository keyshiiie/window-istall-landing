import { benefitsData } from '../data/benefits';
import { BenefitCard } from '../types/benefit.types';

class BenefitsCards {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.render();
  }

  private render(): void {
    const cardsHTML = benefitsData.map((card: BenefitCard) => this.createCardHTML(card)).join('');
    this.container.innerHTML = cardsHTML;
  }

  private createCardHTML(card: BenefitCard): string {
    return `
      <div class="benefits__card">
        <img src="${card.icon}" alt="${card.title}" class="benefits__card-icon">
        <h3 class="benefits__card-title">${card.title}</h3>
        <p class="benefits__card-description">${card.description}</p>
      </div>
    `;
  }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  const cardsContainer = document.querySelector('.benefits__card-holder');
  if (cardsContainer) {
    new BenefitsCards(cardsContainer as HTMLElement);
  }
});