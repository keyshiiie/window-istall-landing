// advanced-timer.ts

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimerConfig {
  endDate: string;
  onComplete?: () => void;
  selectors: {
    timer: string;
    days?: string;
    hours?: string;
    minutes?: string;
    seconds?: string;
  };
}

class AdvancedTimer {
  private endTime: number;
  private config: TimerConfig;
  private intervalId: number | null = null;

  constructor(config: TimerConfig) {
    this.config = config;
    this.endTime = new Date(config.endDate).getTime();
    
    if (isNaN(this.endTime)) {
      throw new Error('Неверный формат даты');
    }
  }

  private calculate(): TimeLeft {
    const now = Date.now();
    const diff = Math.max(0, this.endTime - now);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000)
    };
  }

  private updateDisplay(): void {
    const time = this.calculate();
    const isComplete = time.days === 0 && time.hours === 0 && 
                      time.minutes === 0 && time.seconds === 0;

    // Обновляем основной таймер
    const timerEl = document.querySelector(this.config.selectors.timer);
    if (timerEl) {
      timerEl.textContent = this.formatTimerText(time);
    }

    // Если есть отдельные элементы для дней/часов/минут/секунд
    if (this.config.selectors.days) {
      const daysEl = document.querySelector(this.config.selectors.days);
      if (daysEl) daysEl.textContent = this.pad(time.days);
    }
    
    if (this.config.selectors.hours) {
      const hoursEl = document.querySelector(this.config.selectors.hours);
      if (hoursEl) hoursEl.textContent = this.pad(time.hours);
    }
    
    if (this.config.selectors.minutes) {
      const minutesEl = document.querySelector(this.config.selectors.minutes);
      if (minutesEl) minutesEl.textContent = this.pad(time.minutes);
    }
    
    if (this.config.selectors.seconds) {
      const secondsEl = document.querySelector(this.config.selectors.seconds);
      if (secondsEl) secondsEl.textContent = this.pad(time.seconds);
    }

    // Завершаем таймер если время вышло
    if (isComplete && this.config.onComplete) {
      this.stop();
      this.config.onComplete();
    }
  }

  private pad(num: number): string {
    return num.toString().padStart(2, '0');
  }

  private formatTimerText(time: TimeLeft): string {
    if (time.days > 0) {
      return `Осталось: ${time.days}д ${this.pad(time.hours)}ч ${this.pad(time.minutes)}м ${this.pad(time.seconds)}с`;
    }
    return `Осталось: ${this.pad(time.hours)}ч ${this.pad(time.minutes)}м ${this.pad(time.seconds)}с`;
  }

  public start(): void {
    this.updateDisplay();
    this.intervalId = window.setInterval(() => this.updateDisplay(), 1000);
  }

  public stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

// Функция инициализации 
export function initAdvancedTimer(): AdvancedTimer | null {
  const timerContainer = document.querySelector('.temporary-sale');
  
  if (!timerContainer) {
    console.warn('Timer container not found');
    return null;
  }

  // Настройки таймера
  const timer = new AdvancedTimer({
    endDate: '2026-03-31T23:59:59', // Дата окончания акции
    selectors: {
      timer: '.temporary-sale__timer',
      // Если хотите использовать отдельные элементы, раскомментируйте:
      // days: '.timer-days',
      // hours: '.timer-hours',
      // minutes: '.timer-minutes',
      // seconds: '.timer-seconds'
    },
    onComplete: () => {
      console.log('Акция завершена');
      // Можно добавить дополнительные действия по завершению
      const timerEl = document.querySelector('.temporary-sale__timer');
      if (timerEl) {
        timerEl.textContent = 'Акция завершена';
      }
    }
  });
  
  timer.start();
  return timer;
}

// Автоматическая инициализация при загрузке DOM (как в слайдере)
document.addEventListener('DOMContentLoaded', () => {
  initAdvancedTimer();
});