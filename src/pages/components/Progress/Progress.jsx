import React from "react"; // Импорт React для работы с функциональными компонентами
import styles from "./Progress.module.css"; // Импорт модульных CSS-стилей для стилизации компонента

/**
 * Компонент Progress отображает круговой индикатор прогресса.
 *
 * @param {Object} props - Пропсы компонента
 * @param {number} props.progress - Значение прогресса (от 0 до 100).
 * Если передается некорректное значение, используется 0.
 *
 * @returns {JSX.Element} Круговой прогресс-бар
 */
export default function Progress({ progress }) {
  const progressInt = isNaN(parseInt(progress, 10))
    ? 0
    : parseInt(progress, 10);
  const radius = 90; // Радиус окружности (в пикселях)
  const circumference = 2 * Math.PI * radius; // Длина окружности
  const offset = circumference - (progressInt / 100) * circumference; // Смещение обводки

  return (
    <>
      <div className={`${styles.cont}`} data-pct={progressInt}>
        <svg
          className={`${styles.svg}`}
          width="200"
          height="200"
          viewBox="0 0 200 200" // Обновлено на правильный размер
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Фоновый круг (общая окружность) */}
          <circle
            r={radius} // Радиус круга
            cx="100" // Координата X центра круга
            cy="100" // Координата Y центра круга
            fill="transparent" // Убираем заливку
            stroke-dasharray={circumference} // Устанавливаем длину окружности
            stroke-dashoffset="0" // Без смещения для фонового круга
          ></circle>

          {/* Прогресс-круг (динамическая часть) */}
          <circle
            className={`${styles.progressCircle}`}
            r={radius} // Радиус круга
            cx="100" // Координата X центра круга
            cy="100" // Координата Y центра круга
            fill="transparent" // Убираем заливку
            stroke-dasharray={circumference} // Устанавливаем длину окружности
            stroke-dashoffset={offset} // Смещение обводки для отображения прогресса
          ></circle>
        </svg>
      </div>
    </>
  );
}
