import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import Head from "next/head";

import { QuestionsView } from "@/components/QuestionsView";
import { ResultsView } from "@/components/ResultsView";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currentView, setCurrentView] = useState("questions");
  const [type, setType] = useState("");

  const onShowResults = (type: string) => {
    setCurrentView("results");
    setType(type);
  };

  const onRestart = () => {
    setCurrentView("questions");
    setType("");
  };

  return (
    <>
      <Head>
        <title>유형 테스트</title>
        <meta name="description" content="유형 테스트" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {currentView === "questions" ? (
          <QuestionsView onShowResults={onShowResults} />
        ) : (
          <ResultsView type={type} onRestart={onRestart} />
        )}
      </main>
    </>
  );
}
