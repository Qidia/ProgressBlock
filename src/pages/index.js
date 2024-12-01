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
  const [isProgressVisible, setIsProgressVisible] = useState(true); // Состояние для управления видимостью Progress
  const [isChecked, setIsChecked] = useState(false); // Состояние для чекбокса Hide
  const [progressValue, setProgressValue] = useState(0); // Состояние для прогресса


  // Функция для скрытия/показа Progress
  const handleHideChange = (checked) => {
    setIsChecked(checked);
    setIsProgressVisible(!checked); // Если чекбокс отмечен, скрываем Progress
  };

  // Функция для обновления прогресса
  const handleInputChange = (e) => {
    const value = Math.min(Math.max(0, parseInt(e.target.value, 10) || 0), 100); // Ограничиваем диапазон от 0 до 100
    setProgressValue(value);
  };

  return (
    <>
      <Head>
        <title>Progress Block</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          <p>test</p>
          <Switcher text="Animated" state={false} />
          <Switcher
            text="Hide"
            checked={isChecked} // Передаем текущее состояние
            onChange={handleHideChange} // Обработчик для изменения
          />
          <Input text="Value" type="number" onChange={handleInputChange} />

          {isProgressVisible && <Progress progress={progressValue} />}
        </main>
      </div>
    </>
  );
}
