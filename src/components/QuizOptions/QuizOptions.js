import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Option from "../QuizItems/Option/Option";

const QuizOptions = ({ quizQuestion }) => {
  const { id, question, options, correctAnswer } = quizQuestion;
  console.log(quizQuestion.question);
  return (
    <div className="m-4 bg-red-400">
      <div className="flex justify-between items-center px-3">
        <h3>Quiz: {question}</h3>
        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
      </div>
      <div>
        {options.map((option) => (
          <Option></Option>
        ))}
      </div>
    </div>
  );
};

export default QuizOptions;
