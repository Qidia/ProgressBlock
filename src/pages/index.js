import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

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
  return (
    <>
      <Head>
        <title>Progress Block</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <p>test</p>
        </main>
      </div>
    </>
  );
}
