import { CharacteristicCard } from '../types/characteristic.types';

export const characteristicsData: CharacteristicCard[] = [
  {
    id: 1,
    title: "Smart",
    price: "2 868",
    specs: [
      "Рама — 60мм",
      "Створка — 60мм",
      "Сопротивление теплопередаче — 0,88м² С/Вт",
      "Шумоизоляция — 600Па",
      "Воздушные камеры — 4"
    ],
    colors: ["#FFFFFF", "#8B4513", "#F5F5DC", "#000000"],
    image: "/images/windows/smart.svg"
  },
  {
    id: 2,
    title: "Evolution",
    price: "3 214",
    specs: [
      "Рама — 70мм",
      "Створка — 70мм",
      "Сопротивление теплопередаче — 1,06м² С/Вт",
      "Шумоизоляция — 1200Па",
      "Воздушные камеры — 5"
    ],
    colors: ["#FFFFFF", "#8B4513", "#F5F5DC", "#000000"],
    image: "/images/windows/evolution.svg"
  },
  {
    id: 3,
    title: "Art",
    price: "3 829",
    specs: [
      "Рама — 85мм",
      "Створка — 70мм",
      "Сопротивление теплопередаче — 1,08м² С/Вт",
      "Шумоизоляция — 1200Па",
      "Воздушные камеры — 5/6"
    ],
    colors: ["#FFFFFF", "#8B4513", "#F5F5DC", "#000000"],
    image: "/images/windows/art.svg"
  }
];

// Экспортируем тип для удобства
export type { CharacteristicCard };