import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import { QuestionsView } from "@/components/QuestionsView";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const currentIndex = useRef(0);
  return (
    <>
      <Head>
        <title>유형 테스트</title>
        <meta name="description" content="유형 테스트" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <QuestionsView />
      </main>
    </>
  );
}
