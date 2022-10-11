import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizOptions from "../QuizOptions/QuizOptions";

const QuizItems = () => {
  const loadquiz = useLoaderData();
  const quiz = loadquiz.data;
  const questions = quiz.questions;
  return (
    <div className="bg-sky-200 lg:w-9/12 m-auto mt-5">
      <h2 className="text-2xl"> Quiz of {quiz.name}</h2>
      {questions.map((question) => (
        <QuizOptions quizQuestion={question} key={question.id}></QuizOptions>
      ))}
    </div>
  );
};

export default QuizItems;
