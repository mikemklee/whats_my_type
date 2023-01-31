import React from "react";

type Props = {
  type: string;
};

export const ResultsView = ({ type }: Props) => {
  return <div>결과: 당신은 {type} 입니다</div>;
};
