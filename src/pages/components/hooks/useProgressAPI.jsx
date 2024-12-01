import { useState, useEffect } from "react";

export function useProgressAPI(initialValue = 0) {
  const [progress, setProgress] = useState(initialValue); // Текущее значение прогресса
  const [isAnimated, setIsAnimated] = useState(false); // Анимация включена/выключена
  const [isHidden, setIsHidden] = useState(false); // Блок скрыт/показан
  const [currentProgress, setCurrentProgress] = useState(initialValue); // Прогресс для анимации

  // Управление анимацией
  useEffect(() => {
    let intervalId;

    if (isAnimated) {
      intervalId = setInterval(() => {
        setCurrentProgress((prev) => {
          if (prev < progress) {
            return prev + 1;
          } else {
            setTimeout(() => setCurrentProgress(0), 2000); // Сброс прогресса
            return prev;
          }
        });
      }, 50);
    } else {
      setCurrentProgress(progress); // Синхронизация без анимации
    }

    return () => clearInterval(intervalId); // Очистка интервалов
  }, [isAnimated, progress]);

  // Методы API
  const API = {
    setProgress, // Установить значение прогресса
    toggleAnimated: () => setIsAnimated((prev) => !prev), // Включить/выключить анимацию
    toggleHidden: () => setIsHidden((prev) => !prev), // Скрыть/показать блок
    resetProgress: () => setCurrentProgress(0), // Сбросить прогресс
  };

  // Возврат значений и методов
  return { currentProgress, isAnimated, isHidden, API };
}
