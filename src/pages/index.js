import React from "react";
import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Switcher from "./components/ui/Switcher/Switcher";
import Input from "./components/ui/Input/Input";
import Progress from "./components/Progress/Progress";
import { useProgressAPI } from "../hooks/useProgressAPI";

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
  const { currentProgress, isAnimated, isHidden, API } = useProgressAPI(0); // Инициализация API

  return (
    <>
      <Head>
        <title>Progress Block</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          <div className={`${styles.progress} ${styles.center}`}>
            {/* Условный рендеринг блока */}
            <div className={`${isHidden ? styles.hidden : ""}`}>
              <Progress progress={currentProgress} />
            </div>

            <div className={styles.controlPanel}>
              {/* Поле ввода для значения прогресса */}
              <Input
                text="Value"
                type="number"
                value={currentProgress}
                onChange={(e) => API.setProgress(parseInt(e.target.value, 10) || 0)}
              />

              {/* Переключатель для управления анимацией */}
              <Switcher
                text="Animated"
                checked={isAnimated}
                onChange={API.toggleAnimated}
              />

              {/* Переключатель для управления видимостью */}
              <Switcher
                text="Hide"
                checked={isHidden}
                onChange={API.toggleHidden}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

