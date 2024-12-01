import React, { useState, useEffect } from "react";
import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Switcher from "./components/ui/Switcher/Switcher";
import Input from "./components/ui/Input/Input";
import Progress from "./components/Progress/Progress";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  // Состояния для различных параметров
  const [isProgressVisible, setIsProgressVisible] = useState(true); // Управляет видимостью прогресса
  const [isChecked, setIsChecked] = useState(false); // Управляет состоянием чекбокса Hide
  const [progressValue, setProgressValue] = useState(0); // Хранит значение, введенное пользователем для прогресса
  const [isAnimated, setIsAnimated] = useState(false); // Управляет состоянием переключателя "Animated"
  const [currentProgress, setCurrentProgress] = useState(0); // Текущее значение прогресса для анимации

  // Функция для скрытия/показа Progress
  const handleHideChange = (checked) => {
    setIsChecked(checked);
    setIsProgressVisible(!checked);
  };

  // Функция для переключения состояния анимации
  const handleAnimatedChange = (checked) => {
    setIsAnimated(checked);
    if (!checked) {
      // Если анимация выключена, устанавливаем текущий прогресс равным значению, введенному пользователем
      setCurrentProgress(progressValue);
    }
  };

  // Функция для обновления прогресса, вводимого пользователем
  const handleInputChange = (e) => {
    const value = Math.min(Math.max(0, parseInt(e.target.value, 10) || 0), 100); // Ограничиваем диапазон от 0 до 100
    setProgressValue(value);
  };

  // Используем useEffect для анимации
  useEffect(() => {
    let intervalId;

    if (isAnimated) {
      // Запускаем интервал, который будет увеличивать текущий прогресс
      intervalId = setInterval(() => {
        setCurrentProgress((prev) => {
          if (prev < progressValue) {
            // Увеличиваем прогресс, если он меньше введенного значения
            return prev + 1;
          } else {
            setTimeout(() => {
              setCurrentProgress(0); // Сбрасываем прогресс в 0
            }, 2000); // Задержка перед новым циклом
            return prev; // Возвращаем текущее значение прогресса
          }
        });
      }, 50); // Интервал обновления (50 мс для плавной анимации)
    } else {
      // Если анимация выключена, сразу устанавливаем прогресс в значение, введенное пользователем
      setCurrentProgress(progressValue);
    }

    // Очищаем интервал при размонтировании компонента или при изменении состояния анимации
    return () => clearInterval(intervalId);
  }, [isAnimated, progressValue]);

  return (
    <>
      <Head>
        <title>Progress Block</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          <p>test</p>
          {/* Переключатель для управления анимацией */}
          <Switcher
            text="Animated"
            checked={isAnimated}
            onChange={handleAnimatedChange}
          />
          {/* Переключатель для управления видимостью прогресса */}
          <Switcher
            text="Hide"
            checked={isChecked}
            onChange={handleHideChange}
          />
          {/* Поле ввода для значения прогресса */}
          <Input
            text="Value"
            type="number"
            value={progressValue} // Привязываем значение к состоянию
            onChange={handleInputChange}
          />

          {isProgressVisible && <Progress progress={currentProgress} />}
        </main>
      </div>
    </>
  );
}
