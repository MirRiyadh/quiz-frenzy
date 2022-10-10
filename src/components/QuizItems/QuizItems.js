import React from "react";
import { useLoaderData } from "react-router-dom";

const QuizItems = () => {
  const loadquiz = useLoaderData();
  const quiz = loadquiz.data;
  console.log(quiz.data);
  return (
    <div>
      <h1>this is quiz part: {quiz.name}</h1>
    </div>
  );
};

export default QuizItems;
