import { windowsData, WindowModel } from '../data/windows';

class WindowSlider {
  private navList: HTMLElement;
  private wrapper: HTMLElement;
  private slides: HTMLElement[] = [];
  private navButtons: HTMLElement[] = [];

  constructor(container: HTMLElement) {
    const navList = container.querySelector('.slider__nav-list');
    const wrapper = container.querySelector('.slider__wrapper');

    if (!navList || !wrapper) {
      throw new Error('Required slider elements not found');
    }

    this.navList = navList as HTMLElement;
    this.wrapper = wrapper as HTMLElement;

    this.init();
  }

  private init(): void {
    this.renderSlides();
    this.renderNav();
    this.showSlide(0);
  }

  private renderSlides(): void {
    this.slides = windowsData.map((data: WindowModel, index: number) => {
      const slide = document.createElement('div');
      slide.className = `slider__slide ${index === 0 ? 'active' : ''}`;
      slide.innerHTML = this.createSlideHTML(data);
      return slide;
    });
    
    this.slides.forEach(slide => this.wrapper.appendChild(slide));
  }

  private createSlideHTML(data: WindowModel): string {
    const featuresList = data.features
      .map(f => `
        <li class="slide__feature">
          <img src="${f.icon}" alt="" class="slide__feature-icon">
          <span class="slide__feature-text">${f.text}</span>
        </li>
      `)
      .join('');
    
    return `
      <div class="slide__content">
        <div class="slide__left">
          <div class="slide__left-row">
            <img src="${data.image}" alt="${data.name}" class="slide__image">
            <div class="slide__text">
              <p class="slide__category">${data.category}</p>
              <h3 class="slide__title">${data.name}</h3>
              <p class="slide__description">${data.description}</p>
            </div>
          </div>
          <ul class="slide__features">
            ${featuresList}
          </ul>
        </div>
        <div class="slide__right">
          <div class="slide__efficiency">
            <img src="${data.efficiencyIcon}" class="efficiency__icon">
            <span class="efficiency__value">${data.efficiency}</span>
            <span class="efficiency__label">${data.efficiencyLabel}</span>
          </div>
        </div>
      </div>
    `;
  }

  private renderNav(): void {
    windowsData.forEach((data: WindowModel, index: number) => {
      const li = document.createElement('li');
      li.className = 'slider__nav-item';
      
      const button = document.createElement('button');
      button.className = `slider__nav-button ${index === 0 ? 'active' : ''}`;
      button.textContent = data.name;
      button.addEventListener('click', () => this.goToSlide(index));
      
      li.appendChild(button);
      this.navList.appendChild(li);
      this.navButtons.push(button);
    });
  }

  private showSlide(index: number): void {
    // Показываем нужный слайд
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.slides[index].classList.add('active');
    
    // Обновляем активную кнопку
    this.navButtons.forEach(btn => btn.classList.remove('active'));
    this.navButtons[index].classList.add('active');
  }

  public goToSlide(index: number): void {
    if (index >= 0 && index < this.slides.length) {
      this.showSlide(index);
    }
  }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.slider');
  if (sliderContainer) {
    new WindowSlider(sliderContainer as HTMLElement);
  }
});