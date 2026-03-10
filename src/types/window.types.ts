// Тип для эффективности
export interface Efficiency {
  value: string; // "80%"
  label: string; // "Больше тепла"
} 

// Тип для преимущества с иконкой
export interface Feature {
  text: string;      // текст преимущества
  icon: string;      // путь к иконке
}

// Главный тип для модели окна
export interface WindowModel {
  id: number;
  name: string;
  category: string;
  description: string;
  features: Feature[];  // теперь массив объектов с текстом и иконкой
  efficiencyIcon: string;
  efficiency: string;
  efficiencyLabel: string;
  image: string;
}

// Тип для состояния слайдера
export interface SliderState {
  currentSlide: number;
  totalSlides: number;
}