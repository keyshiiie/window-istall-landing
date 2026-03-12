// Типы для опций
export interface CalculatorOption {
  id: string;
  label: string;
  price?: number;
  image?: string; // путь к картинке для этого типа окна
}

// Типы для секций
export interface CalculatorSection {
  id: keyof CalculatorState;
  title: string;
  type: 'radio' | 'select' | 'number';
  options?: CalculatorOption[];
  defaultValue?: string | number;
  unit?: string;
}

// Состояние калькулятора
export interface CalculatorState {
  windowType: string;
  width: number;
  height: number;
  color: string;
  glassType: string;
  buildingType: string;
  installation: boolean;
  [key: string]: string | number | boolean;
}