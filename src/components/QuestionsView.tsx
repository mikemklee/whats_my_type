import React, { useMemo, useState } from "react";

import questionsJSON from "../constants/questions.json";

export const QuestionsView = () => {
  const questions = useMemo(() => questionsJSON, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentIndex]
  );
  return (
    <div>
      <div>
        <div>Question {currentIndex + 1}</div>
        <div>{currentQuestion.question}</div>

        <div className="flex">
          {currentQuestion.answers.map((answer, index) => {
            return <button key={index}>{answer.description}</button>;
          })}
        </div>
      </div>
    </div>
  );
};
