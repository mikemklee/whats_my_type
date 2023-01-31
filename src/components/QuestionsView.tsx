import React, { useMemo, useState } from "react";

import questionsJSON from "../constants/questions.json";

type Props = {
  onChangeView: Function;
};

export const QuestionsView = ({ onChangeView }: Props) => {
  const questions = useMemo(() => questionsJSON, []);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = questions[currentIndex];

  const determineType = () => {
    interface Count {
      [key: string]: number;
    }

    const count: Count = {};
    answers.forEach((val) => (count[val] = (count[val] || 0) + 1));

    let type = "";
    type += count["E"] > count["I"] ? "E" : "I";
    type += count["S"] > count["N"] ? "S" : "N";
    type += count["T"] > count["F"] ? "T" : "F";
    type += count["J"] > count["P"] ? "J" : "P";

    return type;
  };

  const onClickAnswer = (value: string) => {
    if (currentIndex === questions.length - 1) {
      const type = determineType();
      onChangeView(type);
    } else {
      setAnswers([...answers, value]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="text-lg">
      <div className="mb-2">Q. {currentIndex + 1}</div>
      <div className="mb-4">{currentQuestion.question}</div>

      <div className="grid grid-cols-1 gap-4">
        {currentQuestion.answers.map((answer, index) => {
          return (
            <button
              className="w-80 h-40 bg-slate-100"
              key={index}
              onClick={() => onClickAnswer(answer.value)}
            >
              {answer.description}
            </button>
          );
        })}
      </div>
    </div>
  );
};
