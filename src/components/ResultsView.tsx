import React from "react";

type Props = {
  type: string;
  onRestart: Function;
};

export const ResultsView = ({ type, onRestart }: Props) => {
  const handleRestart = () => {
    onRestart();
  };

  return (
    <div className="flex flex-col items-center">
      <span>결과: 당신은 {type} 입니다</span>

      <button className="mt-4 w-60 h-16 bg-slate-100" onClick={handleRestart}>
        테스트 다시하기
      </button>
    </div>
  );
};
