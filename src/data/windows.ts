import { WindowModel } from '../types/window.types';

export const windowsData: WindowModel[] = [
  {
    id: 1,
    name: "BRILLANT-DESIGN",
    category: "Профиль",
    description: "Окна из профиля REHAU BLITZ обладают современным дизайном и соответствуют характеристикам класса А (ГОСТ 23166-99) по параметрам водонепроницаемости, сопротивления ветровой нагрузке и звукоизоляции.",
    features: [
      {
        text: "Оптимальное сочетание цены и качества",
        icon: "/images/icons/box.svg"
      },
      {
        text: "Простота в эксплуатации и уходе",
        icon: "/images/icons/hands.svg"
      },
      {
        text: "Прочный и долговечный профиль",
        icon: "/images/icons/profile.svg"
      },
      {
        text: "Хорошие теплоизоляционные показатели",
        icon: "/images/icons/temp.svg"
      }
    ],
    efficiencyIcon: "/images/icons/renau-logo.svg",
    efficiency: "80%",
    efficiencyLabel: "Больше тепла",
    image: "/images/windows/brillant-design.svg"
  },
  {
    id: 2,
    name: "EURO DESIGN",
    category: "Профиль",
    description: "Элитный профиль с превосходной теплоизоляцией и современным дизайном. Идеально подходит для загородных домов.",
    features: [
      {
        text: "Повышенная теплоизоляция",
        icon: "/images/icons/thermal-plus.svg"
      },
      {
        text: "Элегантный дизайн",
        icon: "/images/icons/design.svg"
      },
      {
        text: "6 камер",
        icon: "/images/icons/chambers.svg"
      },
      {
        text: "Высокий класс звукоизоляции",
        icon: "/images/icons/sound.svg"
      }
    ],
    efficiencyIcon: "/images/icons/renau-logo.svg",
    efficiency: "90%",
    efficiencyLabel: "Больше тепла",
    image: "/images/windows/euro-design.jpg"
  },
  {
  id: 3,
  name: "GRAZIO",
  category: "Профиль",
  description: "Инновационный профиль с уникальным дизайном и улучшенными теплоизоляционными свойствами. Идеальное решение для современных интерьеров.",
  features: [
    {
      text: "Уникальный дизайн",
      icon: "/images/icons/design-premium.svg"
    },
    {
      text: "Повышенная теплоизоляция",
      icon: "/images/icons/thermal-plus.svg"
    },
    {
      text: "5 камер",
      icon: "/images/icons/chambers.svg"
    },
    {
      text: "Экологичность",
      icon: "/images/icons/eco.svg"
    }
  ],
  efficiencyIcon: "/images/icons/renau-logo.svg",
  efficiency: "85%",
  efficiencyLabel: "Больше тепла",
  image: "/images/windows/grazio.jpg"
  },
  {
    id: 4,
    name: "DELIGHT-DESIGN",
    category: "Профиль",
    description: "Элегантный профиль с плавными линиями и превосходной звукоизоляцией. Создает уют и комфорт в любом помещении.",
    features: [
      {
        text: "Плавные линии дизайна",
        icon: "/images/icons/design.svg"
      },
      {
        text: "Повышенная звукоизоляция",
        icon: "/images/icons/sound.svg"
      },
      {
        text: "4 камеры",
        icon: "/images/icons/chambers.svg"
      },
      {
        text: "Устойчивость к взлому",
        icon: "/images/icons/security.svg"
      }
    ],
    efficiencyIcon: "/images/icons/renau-logo.svg",
    efficiency: "82%",
    efficiencyLabel: "Больше тепла",
    image: "/images/windows/delight-design.jpg"
  },
  {
    id: 5,
    name: "INTELIO",
    category: "Премиум",
    description: "Премиальная серия окон с максимальной энергоэффективностью и интеллектуальными системами вентиляции. Высший класс комфорта.",
    features: [
      {
        text: "Максимальная энергоэффективность",
        icon: "/images/icons/thermal-plus.svg"
      },
      {
        text: "Интеллектуальная вентиляция",
        icon: "/images/icons/ventilation.svg"
      },
      {
        text: "7 камер",
        icon: "/images/icons/chambers.svg"
      },
      {
        text: "Премиальный дизайн",
        icon: "/images/icons/design-premium.svg"
      }
    ],
    efficiencyIcon: "/images/icons/renau-logo.svg",
    efficiency: "95%",
    efficiencyLabel: "Больше тепла",
    image: "/images/windows/intelio.jpg"
  }
];

export type { WindowModel };