import { CalculatorSection } from '../types/calculator.types';

export const calculatorSections: CalculatorSection[] = [
  {
    id: 'windowType',
    title: 'Тип окна',
    type: 'radio',
    options: [
      { 
        id: 'single', 
        label: 'Одностороннее окно',
        price: 0,
        image: '/images/windows/okno-01.svg'
      },
      { 
        id: 'double', 
        label: 'Двухстворчатое окно',
        price: 3000,
        image: '/images/windows/okno-02.svg'
      },
      { 
        id: 'triple', 
        label: 'Трехстворчатое окно',
        price: 6000,
        image: '/images/windows/okno-03.svg'
      },
      { 
        id: 'balcony', 
        label: 'Балконная дверь',
        price: 8000,
        image: '/images/windows/okno-04.svg'
      },
      { 
        id: 'singlebalcony', 
        label: 'Одностворчатое окно с балконной дверью',
        price: 9500,
        image: '/images/windows/okno-05.svg'
      },
      { 
        id: 'doublebalcony', 
        label: 'Двухстворчатое окно с балконной дверью',
        price: 11000,
        image: '/images/windows/okno-06.svg'
      }
    ],
    defaultValue: 'single'
  },
  {
    id: 'dimensions',
    title: 'Размер окна',
    type: 'number',
    unit: 'мм'
  },
  {
    id: 'color',
    title: 'Цвет',
    type: 'radio',
    options: [
      { id: 'white', label: 'Белые окна', price: 0 },
      { id: 'color', label: 'Цветные окна', price: 3000 }
    ],
    defaultValue: 'white'
  },
  {
    id: 'glassType',
    title: 'Стеклопакет',
    type: 'radio',
    options: [
      { id: 'single', label: 'Однокамерный', price: 0 },
      { id: 'double', label: 'Двухкамерный', price: 2000 }
    ],
    defaultValue: 'double'
  },
  {
    id: 'buildingType',
    title: 'Установка',
    type: 'radio',
    options: [
      { id: 'brick', label: 'Квартира в кирпичном доме', price: 500 },
      { id: 'panel', label: 'Квартира в панельном доме', price: 1000 },
      { id: 'stalin', label: 'Квартира в сталинском доме', price: 2000 },
      { id: 'home', label: 'Частный дом', price: 1000 },
      { id: 'office', label: 'Офис', price: 1000 },
      { id: 'other', label: 'Другое', price: 0 }
    ],
    defaultValue: 'brick'
  },
  {
    id: 'installation',
    title: 'Монтаж',
    type: 'radio',
    options: [
      { id: 'yes', label: 'Да', price: 5000 },
      { id: 'no', label: 'Нет', price: 0 }
    ],
    defaultValue: 'yes'
  }
];