import React, { useMemo, useState } from "react";

import questionsJSON from "../constants/questions.json";

export const QuestionsView = () => {
  const questions = useMemo(() => questionsJSON, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = questions[currentIndex];

  return (
    <div className="text-lg">
      <div className="mb-2">Q. {currentIndex + 1}</div>
      <div className="mb-4">{currentQuestion.question}</div>

      <div className="grid grid-cols-1 gap-4">
        {currentQuestion.answers.map((answer, index) => {
          return (
            <button className="w-80 h-40 bg-slate-100" key={index}>
              {answer.description}
            </button>
          );
        })}
      </div>
    </div>
  );
};
