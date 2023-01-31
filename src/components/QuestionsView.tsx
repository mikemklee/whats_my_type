import React, { useState } from "react";

import questionsJSON from "../constants/questions.json";

export const QuestionsView = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  console.log(questionsJSON);

  return <div>QuestionsView</div>;
};
