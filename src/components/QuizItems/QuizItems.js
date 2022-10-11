import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizOptions from "../QuizOptions/QuizOptions";

const QuizItems = () => {
  const loadquiz = useLoaderData();
  const quiz = loadquiz.data;
  const questions = quiz.questions;
  return (
    <div className=" lg:w-6/12 m-auto mt-5">
      <h2 className="text-4xl font-bold text-sky-600">
        {" "}
        Quiz of <span className="text-fuchsia-700">{quiz.name}</span>{" "}
      </h2>
      {questions.map((question) => (
        <QuizOptions quizQuestion={question} key={question.id}></QuizOptions>
      ))}
    </div>
  );
};

export default QuizItems;
